package com.example.demo.util;

import com.example.demo.entity.ProfileEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.model.Profile;
import com.example.demo.model.RegistrationRequest;
import com.example.demo.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public abstract class Mappers {
    private Mappers() {
    }

    public static Profile mapCommon(ProfileEntity entity) {
        if (entity == null) return null;
        Profile profile = new Profile();
        profile.setId(entity.getId());
        profile.setName(entity.getName());
        profile.setPhoneNumber(entity.getPhoneNumber());
        profile.setAge(entity.getAge());
        profile.setWeight(entity.getWeight());
        profile.setHeight(entity.getHeight());
        profile.setBoobsSize(entity.getBoobsSize());
        profile.setCondition(entity.getCondition());
        profile.setDescription(entity.getDescription());
        profile.setPriceInOne(entity.getPriceInOne());
        profile.setPriceInTwo(entity.getPriceInTwo());
        profile.setPriceInNight(entity.getPriceInNight());
        profile.setPriceOutOne(entity.getPriceOutOne());
        profile.setPriceOutTwo(entity.getPriceOutTwo());
        profile.setPriceOutNight(entity.getPriceOutNight());
        return profile;
    }

    public static Profile mapFull(ProfileEntity entity) {
        if (entity == null) return null;
        Profile profile = mapCommon(entity);
        if (entity.getPhotos() != null) {
            List<String> photos = Arrays.asList(entity.getPhotos().split(","));
            profile.setPhotos(photos.stream().filter(el -> !el.startsWith("/main.")).map(el -> "/images/" + profile.getId() + el).collect(Collectors.toList()));
        }
        return profile;
    }

    public static Profile mapSimple(ProfileEntity entity) {
        if (entity == null) return null;
        Profile profile = mapCommon(entity);
        if (entity.getPhotos() != null) {
            List<String> photos = Arrays.asList(entity.getPhotos().split(","));
            List<String> l = photos.stream().filter(el -> el.startsWith("/main.")).map(el -> "/images/" + profile.getId() + el).collect(Collectors.toList());
            if (l.size() > 0)
                profile.setAvatar(l.get(0));
        }
        return profile;
    }

    public static User map(UserEntity entity) {
        if (entity == null) return null;
        List<GrantedAuthority> authorities = null;
        if (entity.getRoles() != null) {
            authorities = entity.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
        }

        return new User(entity.getId(), entity.getEmail(), entity.getUsername(), entity.getPassword(), authorities);
    }

    public static UserEntity map(RegistrationRequest registrationRequest, PasswordEncoder passwordEncoder) {
        if (registrationRequest == null) return null;
        UserEntity entity = new UserEntity();
        entity.setUsername(registrationRequest.getLogin());
        entity.setEmail(registrationRequest.getEmail());
        entity.setEnabled(false);
        entity.setRoles(Collections.singletonList("user"));
        entity.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        return entity;
    }
}
