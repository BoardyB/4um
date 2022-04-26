package com.github.boardyb.forum.discussion;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "discussions", schema = "forum")
public class Discussion {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "post_count")
    private Integer postCount;
    @Column(name = "creation_date")
    @CreatedDate
    private LocalDateTime creationDate;
    @NotBlank
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "creator")
    private String creator;
    @Column(name = "featured")
    private boolean featured = false;
    @Column(name = "deleted")
    private boolean deleted = false;

}
