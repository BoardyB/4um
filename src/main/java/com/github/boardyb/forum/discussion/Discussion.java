package com.github.boardyb.forum.discussion;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Discussion {

    @Id
    private String id;
    @Column(name = "post_count")
    private Integer postCount;
    @Column(name = "creation_date")
    private LocalDateTime creationDate;
    @Column(name = "creator")
    private String creator;
    @Column(name = "is_hidden")
    private boolean isHidden;
    @Column(name = "is_locked")
    private boolean isLocked;
    @Column(name = "is_featured")
    private boolean isFeatured;
    @Column(name = "is_deleted")
    private boolean isDeleted;

    protected Discussion() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getPostCount() {
        return postCount;
    }

    public void setPostCount(Integer postCount) {
        this.postCount = postCount;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public boolean isHidden() {
        return isHidden;
    }

    public void setHidden(boolean hidden) {
        isHidden = hidden;
    }

    public boolean isLocked() {
        return isLocked;
    }

    public void setLocked(boolean locked) {
        isLocked = locked;
    }

    public boolean isFeatured() {
        return isFeatured;
    }

    public void setFeatured(boolean featured) {
        isFeatured = featured;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Discussion{");
        sb.append("id='").append(id).append('\'');
        sb.append(", postCount=").append(postCount);
        sb.append(", creationDate=").append(creationDate);
        sb.append(", creator='").append(creator).append('\'');
        sb.append(", isHidden=").append(isHidden);
        sb.append(", isLocked=").append(isLocked);
        sb.append(", isFeatured=").append(isFeatured);
        sb.append(", isDeleted=").append(isDeleted);
        sb.append('}');
        return sb.toString();
    }
}
