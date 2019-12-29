package com.example.demo.rest;

import com.example.demo.model.RegisterRequest;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/api/users/register")
    public void register(@RequestBody RegisterRequest registerRequest) {
        userRepository.save(Mappers.map(registerRequest, passwordEncoder));
    }
}
