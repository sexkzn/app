package com.example.demo.rest;

import com.example.demo.model.Config;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigService {
    @GetMapping("/config")
    public Config f(UsernamePasswordAuthenticationToken authentication) {
        Config config = new Config();
        if (authentication != null) {
            config.setUser(((User) authentication.getPrincipal()).getUsername());
        }
        return config;
    }
}
