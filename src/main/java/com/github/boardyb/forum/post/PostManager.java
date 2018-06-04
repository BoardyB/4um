package com.github.boardyb.forum.post;

import com.github.boardyb.forum.response.ResponseMessage;
import com.github.boardyb.forum.security.AuthenticationService;
import com.github.boardyb.forum.user.User;
import com.github.boardyb.forum.vote.Vote;
import com.github.boardyb.forum.vote.VotingContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.function.Consumer;

import static com.github.boardyb.forum.response.ResponseMessage.successfulResponseFor;
import static java.util.Objects.isNull;

@Component
public class PostManager {

    private Logger logger = LoggerFactory.getLogger(PostManager.class);

    @Autowired
    private PostRepository repository;

    @Autowired
    private AuthenticationService authenticationService;

    public ResponseMessage save(Post post) {
        post.setId(UUID.randomUUID().toString());
        post.setCreator(authenticationService.getCurrentUser().getId());
        post.setLastModifiedDate(LocalDateTime.now());
        repository.save(post);
        logger.debug("Post [{}] has been saved successfully", post);
        return ResponseMessage.successfulResponseFor(post.getId());
    }

    public ResponseMessage update(Post post) {
        post.setEdited(true);
        repository.save(post);
        logger.debug("Post [{}] has been updated successfully", post);
        return successfulResponseFor(post.getId());
    }

    public Post get(String id) {
        Optional<Post> optionalPost = repository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            logger.debug("Discussion [{}] has been loaded", post);
            return post;
        } else {
            throw new PostNotFoundException(id);
        }
    }

    public ResponseMessage delete(String id) {
        Optional<Post> optionalPost = repository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            repository.delete(post);
            logger.debug("Post [{}] has been deleted", post);
            return ResponseMessage.successfulResponseFor(post.getId());
        } else {
            throw new PostNotFoundException(id);
        }
    }

    public List<Post> getPostsOfDiscussion(String id) {
        return repository.findAllByDiscussionId(id);
    }

    public ResponseMessage upvote(Post postToUpVote) {
        return handleVoting(postToUpVote, (VotingContext votingContext) -> {
            Vote vote = new Vote(true, votingContext.getPost(), votingContext.getUser());
            removeExistingVote(votingContext, votingContext.getPost().getDownVotedUsers());
            votingContext.getPost().getUpVotedUsers().add(vote);
        });
    }

    private ResponseMessage handleVoting(Post postToUpvote, Consumer<VotingContext> consumer) {
        Optional<Post> optionalPost = repository.findById(postToUpvote.getId());
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            User currentUser = authenticationService.getCurrentUser();
            VotingContext votingContext = new VotingContext(post, currentUser);
            consumer.accept(votingContext);
            repository.save(votingContext.getPost());
            logger.debug("Post [{}] has been voted by user [{}] successfully", post.getId(), currentUser.getId());
            return ResponseMessage.successfulResponseFor(post);
        } else {
            throw new PostNotFoundException(postToUpvote.getId());
        }
    }

    private void removeExistingVote(VotingContext votingContext, Set<Vote> userVotes) {
        Vote userUpvote = userVotes.stream().filter((Vote upvote) ->
                upvote.getUser().equals(votingContext.getUser())).findFirst().orElse(null);
        if (!isNull(userUpvote)) {
            userVotes.remove(userUpvote);
        }
    }

    public ResponseMessage downVote(Post postToDownVote) {
        return handleVoting(postToDownVote, (VotingContext votingContext) -> {
            removeExistingVote(votingContext, votingContext.getPost().getUpVotedUsers());
            Vote vote = new Vote(false, votingContext.getPost(), votingContext.getUser());
            votingContext.getPost().getDownVotedUsers().add(vote);
        });
    }

}
