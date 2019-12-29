package com.example.demo.util;

import com.example.demo.entity.ProfileEntity;
import com.example.demo.model.Profile;

import java.util.Arrays;
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
}
