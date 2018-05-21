package com.github.boardyb.forum.post;

import com.github.boardyb.forum.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/forum/post")
public class PostController {

    @Autowired
    private PostRepository repository;

    @PostMapping
    public Response save(@RequestBody @Valid Post post) {
        post.setUploadDate(LocalDateTime.now());
        post.setCreator("Test User");
        repository.save(post);

        return Response.successfulResponseFor(post.getId());
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable("id") String id) {
        Optional<Post> post = repository.findById(id);
        if (post.isPresent()) {
            return post.get();
        } else {
            throw new RuntimeException("Post with id [" + id + "] does not exist.");
        }
    }

    @DeleteMapping("/{id}")
    public Response delete(@PathVariable("id") String id) {
        Optional<Post> optionalPost = repository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            repository.delete(post);
            return Response.successfulResponseFor(post.getId());
        } else {
            throw new RuntimeException("Post with id [" + id + "] does not exist.");
        }
    }

}
