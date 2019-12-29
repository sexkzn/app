package com.example.demo.rest;

import com.example.demo.model.Config;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class ConfigService {
    @GetMapping("/config")
    public Config config(UsernamePasswordAuthenticationToken authentication) {
        Config config = new Config();
        if (authentication != null) {
            config.setUsername(((com.example.demo.model.User) authentication.getPrincipal()).getUsername());
            config.setEmail(((com.example.demo.model.User) authentication.getPrincipal()).getEmail());
            Collection<GrantedAuthority> authorities = ((com.example.demo.model.User) authentication.getPrincipal()).getAuthorities();
            if (authorities != null)
                config.setRoles(authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()));
        }
        return config;
    }
}
