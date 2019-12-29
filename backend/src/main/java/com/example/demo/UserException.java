package com.example.demo;

public class UserException extends IllegalStateException {
    public UserException() {
        super();
    }

    public UserException(String s) {
        super(s);
    }

    public UserException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserException(Throwable cause) {
        super(cause);
    }
}
