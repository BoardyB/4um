package com.github.boardyb.forum.vote;

import com.github.boardyb.forum.post.Post;
import com.github.boardyb.forum.user.User;

public class VotingContext {

    private Post post;
    private User user;

    public VotingContext(Post post, User user) {
        this.post = post;
        this.user = user;
    }

    public VotingContext() {
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("VotingContext{");
        sb.append("post=").append(post);
        sb.append(", user=").append(user);
        sb.append('}');
        return sb.toString();
    }
}
