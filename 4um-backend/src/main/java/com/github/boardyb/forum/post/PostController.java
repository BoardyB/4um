package com.github.boardyb.forum.post;

import com.github.boardyb.forum.response.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/forum/post")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseMessage save(@RequestBody @Valid Post post) {
        return postService.save(post);
    }

    @PutMapping
    public ResponseMessage update(@RequestBody @Valid Post post) {
        return postService.update(post);
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable("id") String id) {
        return postService.get(id);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage delete(@PathVariable("id") String id) {
        return postService.delete(id);
    }

    @GetMapping("/discussion/{id}")
    public List<Post> getPostsOfDiscussion(@PathVariable("id") String id) {
        return postService.getPostsOfDiscussion(id);
    }

    @PostMapping("/upvote")
    public ResponseMessage upvote(@RequestBody @Valid Post postToUpVote) {
        return postService.upvote(postToUpVote);
    }

    @PostMapping("/downvote")
    public ResponseMessage downVote(@RequestBody @Valid Post postToDownVote) {
        return postService.downVote(postToDownVote);
    }

}
