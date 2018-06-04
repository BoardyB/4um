package com.github.boardyb.forum.post;

import com.github.boardyb.forum.vote.Vote;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

@Entity
@Table(name = "posts", schema = "forum")
public class Post {

    @Id
    private String id;

    @Column(name = "description")
    private String description;

    @Column(name = "upload_date")
    private LocalDateTime uploadDate;

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

    protected Post() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDateTime uploadDate) {
        this.uploadDate = uploadDate;
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

    public Set<Vote> getUpVotedUsers() {
        return upVotedUsers;
    }

    public void setUpVotedUsers(Set<Vote> upVotedUsers) {
        this.upVotedUsers = upVotedUsers;
    }

    public Set<Vote> getDownVotedUsers() {
        return downVotedUsers;
    }

    public void setDownVotedUsers(Set<Vote> downVotedUsers) {
        this.downVotedUsers = downVotedUsers;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Post{");
        sb.append("id='").append(id).append('\'');
        sb.append(", description='").append(description).append('\'');
        sb.append(", uploadDate=").append(uploadDate);
        sb.append(", creator='").append(creator).append('\'');
        sb.append(", discussionId='").append(discussionId).append('\'');
        sb.append(", upVotedUsers=").append(upVotedUsers);
        sb.append(", downVotedUsers=").append(downVotedUsers);
        sb.append('}');
        return sb.toString();
    }
}
