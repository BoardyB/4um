package com.github.boardyb.forum.security.authentication;

import com.github.boardyb.forum.user.User;
import com.github.boardyb.forum.user.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

import static com.google.common.collect.Sets.newHashSet;

@Component
public class AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            logger.debug("Authenticated user cannot be found.");
            throw new RuntimeException("No valid authentication was found.");
        } else {
            return new User((UserPrincipal) authentication.getPrincipal());
        }


    }
}
