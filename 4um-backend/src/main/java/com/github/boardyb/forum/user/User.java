package com.github.boardyb.forum.user;

import com.github.boardyb.forum.vote.Vote;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

import static com.google.common.collect.Sets.newHashSet;

@Data
@Entity
@Table(name = "users", schema = "forum")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
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

    public String getFullName() {
        return this.getForename() + " " + this.surname;
    }

}
