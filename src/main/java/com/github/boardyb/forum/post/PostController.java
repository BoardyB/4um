package com.github.boardyb.forum.post;

import com.github.boardyb.forum.response.ResponseMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import static com.github.boardyb.forum.response.ResponseMessage.successfulResponseFor;

@RestController
@RequestMapping("/api/forum/post")
public class PostController {

    private Logger logger = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private PostRepository repository;

    @PostMapping
    public ResponseMessage save(@RequestBody @Valid Post post) {
        post.setId(UUID.randomUUID().toString());
        post.setUploadDate(LocalDateTime.now());
        post.setCreator("Test User");
        repository.save(post);
        logger.debug("Post [{}] has been saved successfully", post);
        return ResponseMessage.successfulResponseFor(post.getId());
    }

    @PutMapping
    public ResponseMessage update(@RequestBody @Valid Post post) {
        repository.save(post);
        logger.debug("Post [{}] has been updated successfully", post);
        return successfulResponseFor(post.getId());
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable("id") String id) {
        Optional<Post> optionalPost = repository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            logger.debug("Discussion [{}] has been loaded", post);
            return post;
        } else {
            throw new RuntimeException("Post with id [" + id + "] does not exist.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseMessage delete(@PathVariable("id") String id) {
        Optional<Post> optionalPost = repository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            repository.delete(post);
            logger.debug("Post [{}] has been deleted", post);
            return ResponseMessage.successfulResponseFor(post.getId());
        } else {
            throw new RuntimeException("Post with id [" + id + "] does not exist.");
        }
    }

}
