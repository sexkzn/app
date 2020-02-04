package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreateRequest {
    private String login;
    private String email;
    private String password;
    private String confirmPassword;
    private Boolean enabled;
}
