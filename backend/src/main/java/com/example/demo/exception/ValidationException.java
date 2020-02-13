package com.example.demo.exception;

import org.springframework.http.HttpStatus;

public class ValidationException extends RegistrationException {

    public ValidationException(String s) {
        super(s, HttpStatus.BAD_REQUEST);
    }
}
