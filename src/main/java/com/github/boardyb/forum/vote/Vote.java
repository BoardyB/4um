package com.github.boardyb.forum.vote;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.boardyb.forum.post.Post;
import com.github.boardyb.forum.user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "voting", schema = "forum")
@IdClass(VoteId.class)
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

    public Vote() {
    }

    public Vote(boolean isUpvote, Post post, User user) {
        this.postId = post.getId();
        this.userId = user.getId();
        this.isUpvote = isUpvote;
        this.post = post;
        this.user = user;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public boolean isUpvote() {
        return isUpvote;
    }

    public void setUpvote(boolean upvote) {
        isUpvote = upvote;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vote vote = (Vote) o;
        return isUpvote == vote.isUpvote &&
                Objects.equals(post, vote.post) &&
                Objects.equals(user, vote.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(isUpvote, post, user);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Vote{");
        sb.append("postId='").append(postId).append('\'');
        sb.append(", userId='").append(userId).append('\'');
        sb.append(", isUpvote=").append(isUpvote);
        sb.append('}');
        return sb.toString();
    }
}
