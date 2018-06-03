package com.github.boardyb.forum.post;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.github.boardyb.forum.user.User;
import org.hibernate.annotations.WhereJoinTable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

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

    @JsonManagedReference
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(schema = "forum",
            name = "voting",
            joinColumns = @JoinColumn(table = "posts",  name = "post_id", referencedColumnName="id"),
            inverseJoinColumns = @JoinColumn(table = "users", name = "user_id", referencedColumnName="id"))
    @WhereJoinTable(clause = "upvoted = true")
    private List<User> upVotedUsers = newArrayList();

    @JsonManagedReference
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(schema = "forum",
            name = "voting",
            joinColumns = @JoinColumn(table = "posts",  name = "post_id", referencedColumnName="id"),
            inverseJoinColumns = @JoinColumn(table = "users", name = "user_id", referencedColumnName="id"))
    @WhereJoinTable(clause = "upvoted = false")
    private List<User> downVotedUsers = newArrayList();

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

    public List<User> getUpVotedUsers() {
        return upVotedUsers;
    }

    public void setUpVotedUsers(List<User> upVotedUsers) {
        this.upVotedUsers = upVotedUsers;
    }

    public List<User> getDownVotedUsers() {
        return downVotedUsers;
    }

    public void setDownVotedUsers(List<User> downVotedUsers) {
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
