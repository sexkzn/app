package com.example.demo.rest.service;

import com.example.demo.entity.RegSessionEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.model.RegistrationRequest;
import com.example.demo.model.VerificationRequest;
import com.example.demo.repository.RegSessionRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.EmailService;
import com.example.demo.util.Mappers;
import com.example.demo.util.Validations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    public void register(@RequestBody RegistrationRequest registrationRequest, HttpServletResponse response) {
        UserEntity entity = userRepository.findByUsername(registrationRequest.getLogin());
        Validations.validateUsername(registrationRequest.getLogin(), entity);
        Validations.validatePassword(registrationRequest.getPassword(), registrationRequest.getConfirmPassword());
        entity = userRepository.save(Mappers.map(registrationRequest, passwordEncoder));
        UUID regsid = UUID.randomUUID();
        response.addCookie(new Cookie(REGSID, regsid.toString()));
        RegSessionEntity regSessionEntity = new RegSessionEntity();
        regSessionEntity.setId(regsid);
        regSessionEntity.setCode(String.valueOf(random.nextInt((999999 - 111111) + 1) + 111111));
        regSessionEntity.setUsername(entity.getUsername());
        regSessionRepository.save(regSessionEntity);
    }

    @PostMapping(path = "/verify")
    public void verify(@RequestBody VerificationRequest verificationRequest, HttpServletRequest request, HttpServletResponse response) {
        if (verificationRequest.getCode() == null) return;
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
        }
    }
}
