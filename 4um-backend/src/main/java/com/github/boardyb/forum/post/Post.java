package com.github.boardyb.forum.post;

import com.github.boardyb.forum.vote.Vote;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.annotations.Where;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

@Data
@Entity
@Table(name = "posts", schema = "forum")
@EqualsAndHashCode(of = "id")
public class Post {

    @Id
    private String id;

    @Column(name = "description")
    private String description;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    private LocalDateTime lastModifiedDate;

    @Column(name = "creator")
    private String creator;

    @NotBlank
    @Column(name = "discussion_id")
    private String discussionId;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    @Where(clause = "is_upvote = true")
    private Set<Vote> upVotedUsers = newHashSet();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    @Where(clause = "is_upvote = false")
    private Set<Vote> downVotedUsers = newHashSet();

    @Column(name = "edited")
    private boolean edited = false;

}
