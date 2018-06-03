package com.github.boardyb.forum.discussion;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

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
    @Column(name = "locked")
    private boolean locked = false;
    @Column(name = "featured")
    private boolean featured = false;
    @Column(name = "deleted")
    private boolean deleted = false;

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Discussion{");
        sb.append("id='").append(id).append('\'');
        sb.append(", postCount=").append(postCount);
        sb.append(", creationDate=").append(creationDate);
        sb.append(", title='").append(title).append('\'');
        sb.append(", description='").append(description).append('\'');
        sb.append(", creator='").append(creator).append('\'');
        sb.append(", locked=").append(locked);
        sb.append(", featured=").append(featured);
        sb.append(", deleted=").append(deleted);
        sb.append('}');
        return sb.toString();
    }
}
