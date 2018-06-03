package com.github.boardyb.forum.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.github.boardyb.forum.post.Post;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

@Entity
@Table(name = "users", schema = "forum")
public class User {

    @Id
    private String id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "forename")
    private String forename;

    @Column(name = "surname")
    private String surname;

    @Column(name = "register_date")
    private LocalDateTime registerDate;

    @Column(name = "email")
    private String email;

    @JsonBackReference
    @ManyToMany(mappedBy = "upVotedUsers")
    private Set<Post> upvotedPosts = newHashSet();

    @JsonBackReference
    @ManyToMany(mappedBy = "downVotedUsers")
    private Set<Post> downVotedUsers = newHashSet();

    public User() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getForename() {
        return forename;
    }

    public void setForename(String forename) {
        this.forename = forename;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDateTime getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(LocalDateTime registerDate) {
        this.registerDate = registerDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Post> getUpvotedPosts() {
        return upvotedPosts;
    }

    public void setUpvotedPosts(Set<Post> upvotedPosts) {
        this.upvotedPosts = upvotedPosts;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("User{");
        sb.append("id='").append(id).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", forename='").append(forename).append('\'');
        sb.append(", surname='").append(surname).append('\'');
        sb.append(", registerDate=").append(registerDate);
        sb.append(", email='").append(email).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
