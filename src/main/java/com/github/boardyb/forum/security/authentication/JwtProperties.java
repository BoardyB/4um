package com.github.boardyb.forum.security.authentication;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.jwt")
public class JwtProperties {

    private String secret;
    private int expirationInMs;

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public int getExpirationInMs() {
        return expirationInMs;
    }

    public void setExpirationInMs(int expirationInMs) {
        this.expirationInMs = expirationInMs;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("JwtProperties{");
        sb.append("secret='").append(secret).append('\'');
        sb.append(", expirationInMs=").append(expirationInMs);
        sb.append('}');
        return sb.toString();
    }
}
