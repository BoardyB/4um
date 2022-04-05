package com.github.boardyb.forum.vote;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.boardyb.forum.post.Post;
import com.github.boardyb.forum.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name = "voting", schema = "forum")
@IdClass(VoteId.class)
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"post", "user"})
public class Vote implements Serializable {

    private static final long serialVersionUID = 7609972840616555777L;

    @Id
    private String postId;

    @Id
    private String userId;

    @Column(name = "is_upvote")
    private boolean isUpvote;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "post_id", insertable = false, updatable = false)
    private Post post;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    public Vote(boolean isUpvote, Post post, User user) {
        this.postId = post.getId();
        this.userId = user.getId();
        this.isUpvote = isUpvote;
        this.post = post;
        this.user = user;
    }
}
