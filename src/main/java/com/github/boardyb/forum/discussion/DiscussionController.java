package com.github.boardyb.forum.discussion;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.boardyb.forum.response.ResponseMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import static com.github.boardyb.forum.response.ResponseMessage.successfulResponseFor;

@RestController
@RequestMapping("/api/forum/discussion")
public class DiscussionController {

    private Logger logger = LoggerFactory.getLogger(DiscussionController.class);

    @Autowired
    private DiscussionRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping
    public ResponseMessage save(@RequestBody @Valid Discussion discussion) {
        discussion.setId(UUID.randomUUID().toString());
        repository.save(discussion);
        logger.debug("Discussion [{}] has been saved successfully", discussion);
        return successfulResponseFor(discussion.getId());
    }

    @PutMapping
    public ResponseMessage update(@RequestBody @Valid Discussion discussion) {
        repository.save(discussion);
        logger.debug("Discussion [{}] has been updated successfully", discussion);
        return successfulResponseFor(discussion.getId());
    }

    @GetMapping("/{id}")
    public Discussion get(@PathVariable("id") String id) {
        Optional<Discussion> optionalDiscussion = repository.findById(id);
        if (optionalDiscussion.isPresent()) {
            Discussion discussion = optionalDiscussion.get();
            logger.debug("Discussion [{}] has been loaded", discussion);
            return discussion;
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseMessage delete(@PathVariable("id") String id) {
        Optional<Discussion> optionalDiscussion = repository.findById(id);
        if (optionalDiscussion.isPresent()) {
            Discussion discussion = optionalDiscussion.get();
            discussion.setDeleted(true);
            repository.save(discussion);
            logger.debug("Discussion [{}] has been deleted", discussion);
            return successfulResponseFor(discussion.getId());
        } else {
            throw new RuntimeException("Discussion with id [" + id + "] does not exist.");
        }
    }

    @PostMapping("/all")
    public Iterable<Discussion> getAll(@RequestBody Object object) {
        Map filterMap = objectMapper.convertValue(object, Map.class);
        Boolean featured = Boolean.valueOf(filterMap.get("featured").toString());
        return repository.findAllByFeaturedAndDeletedFalseOrderByCreationDateDesc(featured);
    }

}
