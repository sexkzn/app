package com.example.demo.rest.service;

import com.example.demo.entity.UserEntity;
import com.example.demo.model.RegisterRequest;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.Mappers;
import com.example.demo.util.Validations;
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

    @PostMapping(path = "/register")
    public void register(@RequestBody RegisterRequest registerRequest) {
        UserEntity entity = userRepository.findByUsername(registerRequest.getLogin());
        Validations.validateUsername(registerRequest.getLogin(), entity);
        Validations.validatePassword(registerRequest.getPassword(), registerRequest.getConfirmPassword());
        userRepository.save(Mappers.map(registerRequest, passwordEncoder));
    }
}
