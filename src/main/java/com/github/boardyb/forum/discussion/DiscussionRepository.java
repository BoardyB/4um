package com.github.boardyb.forum.discussion;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DiscussionRepository extends CrudRepository<Discussion, String> {

    List<Discussion> findAllByOrderByCreationDateDesc();

}
