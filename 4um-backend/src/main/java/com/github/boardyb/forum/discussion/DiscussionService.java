package com.github.boardyb.forum.discussion;

import com.github.boardyb.forum.post.Post;
import com.github.boardyb.forum.post.PostRepository;
import com.github.boardyb.forum.security.authentication.AuthenticationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import static java.util.Objects.isNull;

@Slf4j
@Service
public class DiscussionService {

    @Autowired
    private DiscussionRepository repository;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private PostRepository postRepository;

    public Discussion save(Discussion discussion) {
        discussion.setId(UUID.randomUUID().toString());
        Discussion savedDiscussion = repository.save(discussion);
        log.debug("Discussion [{}] has been saved successfully", discussion);
        return savedDiscussion;
    }

    public Discussion update(Discussion discussion) {
        if (!discussion.getCreator().equals(authenticationService.getCurrentUser().getId())) {
            throw new AccessDeniedException("A discussion can only be edited by its creator.");
        }
        Discussion updatedDiscussion = repository.save(discussion);
        log.debug("Discussion [{}] has been updated successfully", discussion);
        return updatedDiscussion;
    }

    public Discussion get(String id) {
        Optional<Discussion> optionalDiscussion = repository.findById(id);
        if (optionalDiscussion.isPresent()) {
            Discussion discussion = optionalDiscussion.get();
            log.debug("Discussion [{}] has been loaded", discussion);
            return discussion;
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

    public void delete(String id) {
        Optional<Discussion> optionalDiscussion = repository.findById(id);
        if (optionalDiscussion.isPresent()) {
            Discussion discussion = optionalDiscussion.get();
            discussion.setDeleted(true);
            repository.save(discussion);
            log.debug("Discussion [{}] has been deleted", discussion);
            List<Post> postOfDiscussion = postRepository.findAllByDiscussionId(id);
            postOfDiscussion.forEach((Post post) -> postRepository.delete(post));
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

    public Iterable<Discussion> getAll(Map<String, Object> filterMap) {
        Boolean featured = Boolean.valueOf(filterMap.get("featured").toString());
        if (!isNull(filterMap.get("filter"))) {
            String filter = String.valueOf(filterMap.get("filter"));
            return repository.findAllByFeaturedAndDeletedFalseAndTitleContainingOrDescriptionContainingOrderByCreationDateDesc(
                    featured,
                    filter,
                    filter
            );
        }
        return repository.findAllByFeaturedAndDeletedFalseOrderByCreationDateDesc(featured);
    }

    public void setDiscussionFeatured(String id) {
        Discussion discussion = repository.findById(id).orElseThrow(() -> new RuntimeException("Discussion does not exist"));
        discussion.setFeatured(true);
        repository.save(discussion);
    }
}
