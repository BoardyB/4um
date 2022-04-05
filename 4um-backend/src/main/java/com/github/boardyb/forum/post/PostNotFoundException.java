package com.github.boardyb.forum.post;

public class PostNotFoundException extends RuntimeException {

    public PostNotFoundException() {
    }

    public PostNotFoundException(String id) {
        super("Post with id [" + id + "] does not exist.");
    }

    public PostNotFoundException(String id, Throwable cause) {
        super("Post with id [" + id + "] does not exist.", cause);
    }
}
