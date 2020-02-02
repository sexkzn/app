package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.UUID;

@Getter
@Setter
public class User extends org.springframework.security.core.userdetails.User {

    private UUID id;
    private String email;

    public User(UUID id, String email, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.id = id;
        if (email == null) throw new IllegalArgumentException("Email mustn't be null");
        this.email = email;
    }
}
