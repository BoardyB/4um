package com.github.boardyb.forum.vote;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class VoteId implements Serializable {

    @Column(name = "post_id")
    private String postId;
    @Column(name = "user_id")
    private String userId;

    public VoteId() {
    }

    public VoteId(String postId, String userId) {
        this.postId = postId;
        this.userId = userId;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VoteId voteId = (VoteId) o;
        return Objects.equals(postId, voteId.postId) &&
                Objects.equals(userId, voteId.userId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(postId, userId);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("VoteId{");
        sb.append("postId='").append(postId).append('\'');
        sb.append(", userId='").append(userId).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
