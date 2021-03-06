package com.example.demo.rest;

import com.example.demo.model.Config;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;
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
        return mock(config);
    }

    private Config mock(Config config) {
        if (config.getUsername() == null) return config;

        int count = (int) ((Math.random() * 15) + 3);
        int inactive = (int) ((Math.random() * (count - 3)));
        config.setStats(Map.of(
                "count", count,
                "active", count - inactive,
                "inactive", inactive
        ));

        config.setViews(Map.of(
                "today", (int) ((Math.random() * ((150 - 50) + 1)) + 50),
                "yesterday", (int) ((Math.random() * ((150 - 50) + 1)) + 50),
                "all", ((int) ((Math.random() * ((150 - 50) + 1)) + 50)) * ((int) ((Math.random() * ((150 - 70) + 1)) + 70))
        ));

        int consumption = (int) (Math.random() * 40 + 10);
        config.setConsumption(Map.of(
                "forDay", consumption,
                "forWeek", consumption * 7,
                "forMonth", consumption * 30
        ));


        config.setBalance((int) (Math.random() * 10000));
        return config;
    }
}
