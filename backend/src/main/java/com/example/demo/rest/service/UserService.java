package com.example.demo.rest.service;

import com.example.demo.entity.RegSessionEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.exception.RegistrationException;
import com.example.demo.model.UserCreateRequest;
import com.example.demo.model.VerificationRequest;
import com.example.demo.repository.RegSessionRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.EmailService;
import com.example.demo.util.Mappers;
import com.example.demo.util.Validations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@RestController
@Transactional
public class UserService {

    private static final String REGSID = "regsid";

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RegSessionRepository regSessionRepository;

    private Random random = new Random();


    @PostMapping(path = "/register")
    public void register(@RequestBody UserCreateRequest userCreateRequest, HttpServletResponse response) {
        UserEntity entity = userRepository.findByUsername(userCreateRequest.getLogin());
        Validations.validateUsername(userCreateRequest.getLogin(), entity);
        Validations.validatePassword(userCreateRequest.getPassword(), userCreateRequest.getConfirmPassword());
        String code = String.valueOf(random.nextInt((999999 - 111111) + 1) + 111111);

        try {
            emailService.sendRegistrationMessage(userCreateRequest.getEmail(), "Проверочный код", code);
        } catch (Exception e) {
            throw new RegistrationException("Не удалось отправить сообщение. Возможно вы ввели неверный адрес.", HttpStatus.BAD_REQUEST);
        }

        entity = userRepository.save(Mappers.map(userCreateRequest, passwordEncoder));
        UUID regsid = UUID.randomUUID();
        response.addCookie(new Cookie(REGSID, regsid.toString()));
        RegSessionEntity regSessionEntity = new RegSessionEntity();
        regSessionEntity.setId(regsid);
        regSessionEntity.setCode(code);
        regSessionEntity.setUsername(entity.getUsername());
        regSessionRepository.save(regSessionEntity);
    }

    @PostMapping(path = "/verify")
    public void verify(@RequestBody VerificationRequest verificationRequest, HttpServletRequest request, HttpServletResponse response) {
        if (verificationRequest.getCode() == null) {
            throw new RegistrationException(null, HttpStatus.BAD_REQUEST);
        }
        String regsid = null;
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (REGSID.equals(cookie.getName())) {
                    regsid = cookie.getValue();
                }
            }
        }
        if (regsid != null) {
            Optional<RegSessionEntity> regSessionEntity = regSessionRepository.findById(UUID.fromString(regsid));
            if (regSessionEntity.isPresent() && userRepository.existsByUsername(regSessionEntity.get().getUsername())) {
                if (verificationRequest.getCode().equals(regSessionEntity.get().getCode())) {
                    userRepository.findByUsername(regSessionEntity.get().getUsername()).setEnabled(true);
                }
            }
        } else {
            throw new RegistrationException(null, HttpStatus.BAD_REQUEST);
        }
    }

    @ExceptionHandler({RegistrationException.class})
    public ResponseEntity<Object> handleException(RegistrationException ex) {
        if (ex.getMessage() == null)
            return new ResponseEntity<>(ex.getStatus());
        return new ResponseEntity<>(Map.of("error", Map.of("text", ex.getMessage())), new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }
}
