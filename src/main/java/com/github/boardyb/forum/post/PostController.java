package com.github.boardyb.forum.post;

import com.github.boardyb.forum.response.ResponseMessage;
import com.github.boardyb.forum.security.AuthenticationService;
import com.github.boardyb.forum.user.User;
import com.github.boardyb.forum.vote.Vote;
import com.github.boardyb.forum.vote.VotingContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.function.Consumer;

import static com.github.boardyb.forum.response.ResponseMessage.successfulResponseFor;
import static java.util.Objects.isNull;

@RestController
@RequestMapping("/api/forum/post")
public class PostController {

    private Logger logger = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private PostManager postManager;

    @PostMapping
    public ResponseMessage save(@RequestBody @Valid Post post) {
        return postManager.save(post);
    }

    @PutMapping
    public ResponseMessage update(@RequestBody @Valid Post post) {
        return postManager.update(post);
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable("id") String id) {
        return postManager.get(id);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage delete(@PathVariable("id") String id) {
        return postManager.delete(id);
    }

    @GetMapping("/discussion/{id}")
    public List<Post> getPostsOfDiscussion(@PathVariable("id") String id) {
        return postManager.getPostsOfDiscussion(id);
    }

    @PostMapping("/upvote")
    public ResponseMessage upvote(@RequestBody @Valid Post postToUpVote) {
        return postManager.upvote(postToUpVote);
    }

    @PostMapping("/downvote")
    public ResponseMessage downVote(@RequestBody @Valid Post postToDownVote) {
        return postManager.downVote(postToDownVote);
    }

}
