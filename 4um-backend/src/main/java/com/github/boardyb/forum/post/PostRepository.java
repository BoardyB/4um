package com.github.boardyb.forum.post;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, String> {

    List<Post> findAllByDiscussionId(String discussionId);

}
