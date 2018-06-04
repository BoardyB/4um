package com.github.boardyb.forum.security;

import com.github.boardyb.forum.user.User;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

import static com.google.common.collect.Sets.newHashSet;

@Component
public class AuthenticationService {

    public User getCurrentUser() {
        return new User("userId", "user", "user", "Elek", "Test", LocalDateTime.of(2018, 6, 4, 9, 19), "elek@test.com", newHashSet(), newHashSet());
    }
}
