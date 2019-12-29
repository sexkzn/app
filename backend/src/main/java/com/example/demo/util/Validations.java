package com.example.demo.util;

import com.example.demo.ValidationException;
import com.example.demo.entity.UserEntity;

public abstract class Validations {
    public static void validatePassword(String password, String passwordCheck) {

        if (password == null) {
            throw new ValidationException("Пароль должен состоять минимум из 8 символов");
        }

        if (!password.equals(passwordCheck)) {
            throw new ValidationException("Введенные пароли не совпадают");
        }

        if (!password.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")) {
            throw new ValidationException("Пароль должен содержать буквы в верхних и нижних регистрах и цифру и состоять минимум из 8 символов");
        }

    }

    public static void validateUsername(String username, UserEntity entity) {
        if (entity != null && entity.getUsername() != null && entity.getUsername().equals(username))
            throw new ValidationException("Пользователь с таким именем уже существует");
    }

}
