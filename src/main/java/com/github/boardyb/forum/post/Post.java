package com.github.boardyb.forum.post;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
public class Post {

    @Id
    private String id;
    @Column(name = "upload_date")
    private LocalDateTime uploadDate;
    @Column(name = "vote_up")
    private Integer voteUp;
    @Column(name = "vote_down")
    private Integer voteDown;
    @Column(name = "creator")
    private String creator;
    @NotBlank
    @Column(name = "discussion_id")
    private String discussionId;

    protected Post() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDateTime uploadDate) {
        this.uploadDate = uploadDate;
    }

    public Integer getVoteUp() {
        return voteUp;
    }

    public void setVoteUp(Integer voteUp) {
        this.voteUp = voteUp;
    }

    public Integer getVoteDown() {
        return voteDown;
    }

    public void setVoteDown(Integer voteDown) {
        this.voteDown = voteDown;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getDiscussionId() {
        return discussionId;
    }

    public void setDiscussionId(String discussionId) {
        this.discussionId = discussionId;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Post{");
        sb.append("id='").append(id).append('\'');
        sb.append(", uploadDate=").append(uploadDate);
        sb.append(", voteUp=").append(voteUp);
        sb.append(", voteDown=").append(voteDown);
        sb.append(", creator='").append(creator).append('\'');
        sb.append(", discussionId='").append(discussionId).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
