package com.github.boardyb.forum.discussion;

import org.springframework.data.repository.CrudRepository;

import javax.validation.constraints.NotBlank;
import java.util.List;

public interface DiscussionRepository extends CrudRepository<Discussion, String> {

    List<Discussion> findAllByFeaturedAndDeletedFalseAndTitleContainingOrDescriptionContainingOrderByCreationDateDesc(
            boolean featured,
            @NotBlank String title,
            String description
    );

    List<Discussion> findAllByFeaturedAndDeletedFalseOrderByCreationDateDesc(boolean featured);

}
