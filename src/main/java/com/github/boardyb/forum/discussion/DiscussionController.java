package com.github.boardyb.forum.discussion;

import com.github.boardyb.forum.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/forum/discussion")
public class DiscussionController {

    @Autowired
    private DiscussionRepository repository;

    @PostMapping
    public Response save(@RequestBody @Valid Discussion discussion) {
        discussion.setCreationDate(LocalDateTime.now());
        repository.save(discussion);
        return Response.successfulResponseFor(discussion.getId());
    }

    @GetMapping("/{id}")
    public Discussion get(@PathVariable("id") String id) {
        Optional<Discussion> discussion = repository.findById(id);
        if (discussion.isPresent()) {
            return discussion.get();
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

    @DeleteMapping("/{id}")
    public Response delete(@PathVariable("id") String id) {
        Optional<Discussion> optionalDiscussion = repository.findById(id);
        if (optionalDiscussion.isPresent()) {
            Discussion discussion = optionalDiscussion.get();
            discussion.setDeleted(true);
            repository.save(discussion);
            return Response.successfulResponseFor(discussion.getId());
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

}
