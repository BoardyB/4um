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
