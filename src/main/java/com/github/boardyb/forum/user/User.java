package com.github.boardyb.forum.user;

import com.github.boardyb.forum.vote.Vote;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

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

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Vote> upvotedPosts = newHashSet();

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Vote> downVotedUsers = newHashSet();

    @Column(name = "roles")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"), schema = "forum")
    private Set<Role> roles = newHashSet();

    public User(String id, String username, String password, String forename, String surname, LocalDateTime registerDate, String email, Set<Vote> upvotedPosts, Set<Vote> downVotedUsers, Set<Role> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.forename = forename;
        this.surname = surname;
        this.registerDate = registerDate;
        this.email = email;
        this.upvotedPosts = upvotedPosts;
        this.downVotedUsers = downVotedUsers;
        this.roles = roles;
    }

    public User(String username, String password, String fullname, String email) {
        this.id = UUID.randomUUID().toString();
        this.username = username;
        this.password = password;
        String[] splitName = fullname.split("\\s+", 2);
        this.forename = splitName[0];
        this.surname = splitName[1];
        this.registerDate = LocalDateTime.now();
        this.email = email;
    }

    public User(UserPrincipal userPrincipal) {
        this.id = userPrincipal.getId();
        String[] splitName = userPrincipal.getName().split("\\s+", 2);
        this.forename = splitName[0];
        this.surname = splitName[1];
        this.username = userPrincipal.getUsername();
        this.email = userPrincipal.getEmail();
        this.password = userPrincipal.getPassword();
    }

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

    public Set<Vote> getUpvotedPosts() {
        return upvotedPosts;
    }

    public void setUpvotedPosts(Set<Vote> upvotedPosts) {
        this.upvotedPosts = upvotedPosts;
    }

    public Set<Vote> getDownVotedUsers() {
        return downVotedUsers;
    }

    public void setDownVotedUsers(Set<Vote> downVotedUsers) {
        this.downVotedUsers = downVotedUsers;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getFullName() {
        return this.getForename() + " " + this.surname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
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
