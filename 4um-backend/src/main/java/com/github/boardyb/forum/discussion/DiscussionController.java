package com.github.boardyb.forum.discussion;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.boardyb.forum.response.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

import static com.github.boardyb.forum.response.ResponseMessage.successfulResponseFor;

@RestController
@RequestMapping("/api/forum/discussion")
public class DiscussionController {

    @Autowired
    private DiscussionService discussionService;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping
    public ResponseMessage save(@RequestBody @Valid Discussion discussion) {
        discussionService.save(discussion);
        return successfulResponseFor(discussion.getId());
    }

    @PutMapping
    public ResponseMessage update(@RequestBody @Valid Discussion discussion) {
        discussionService.update(discussion);
        return successfulResponseFor(discussion.getId());
    }

    @GetMapping("/{id}")
    public Discussion get(@PathVariable("id") String id) {
        return discussionService.get(id);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage delete(@PathVariable("id") String id) {
        discussionService.delete(id);
        return successfulResponseFor(id);
    }

    @PostMapping("/all")
    public Iterable<Discussion> getAll(@RequestBody Object object) {
        TypeReference<Map<String, Object>> mapType = new TypeReference<>() {
        };
        Map<String, Object> filterMap = objectMapper.convertValue(object, mapType);
        return discussionService.getAll(filterMap);
    }

}
