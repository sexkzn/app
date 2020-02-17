package com.example.demo.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class RegistrationException extends RuntimeException {

    private HttpStatus status;

    public RegistrationException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }
}
