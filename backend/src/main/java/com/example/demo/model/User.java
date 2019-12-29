package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
public class User extends org.springframework.security.core.userdetails.User {

    private String email;

    public User(String email, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        if (email == null) throw new IllegalArgumentException("Email mustn't be null");
        this.email = email;
    }
}
