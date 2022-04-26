package com.github.boardyb.forum.security.authentication;

import com.github.boardyb.forum.user.User;
import com.github.boardyb.forum.user.UserPrincipal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class AuthenticationService {

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            log.debug("Authenticated user cannot be found.");
            throw new RuntimeException("No valid authentication was found.");
        } else {
            return new User((UserPrincipal) authentication.getPrincipal());
        }


    }
}
