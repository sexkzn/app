package com.example.demo.util;

import com.example.demo.entity.ProfileEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.model.*;
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

    public static UserEntity map(UserCreateRequest userCreateRequest, PasswordEncoder passwordEncoder) {
        if (userCreateRequest == null) return null;
        UserEntity entity = new UserEntity();
        entity.setUsername(userCreateRequest.getLogin());
        entity.setEmail(userCreateRequest.getEmail());
        entity.setEnabled(false);
        entity.setRoles(Collections.singletonList("user"));
        entity.setPassword(passwordEncoder.encode(userCreateRequest.getPassword()));
        return entity;
    }

    public static ProfileEntity map(ProfileCreateRequest request, UserEntity user) {
        if (request == null) return null;
        ProfileEntity entity = new ProfileEntity();
        entity.setUser(user);
        // TODO: 05.02.2020
        entity.setServices(servicesToString(request.getServices()));

        return entity;
    }

    private static String servicesToString(Services services) {
        if (services == null) return null;
        char[] res = new char[41];

        res[0] = services.isSexClassic() ? '1' : '0';
        res[1] = services.isSexAnal() ? '1' : '0';
        res[2] = services.isSexGroup() ? '1' : '0';
        res[3] = services.isSexDouble() ? '1' : '0';

        res[4] = services.isAffectionCondom() ? '1' : '0';
        res[5] = services.isAffectionNoCondom() ? '1' : '0';
        res[6] = services.isAffectionDeep() ? '1' : '0';
        res[7] = services.isAffectionCar() ? '1' : '0';
        res[8] = services.isAffectionCun() ? '1' : '0';
        res[9] = services.isAffectionAn() ? '1' : '0';
        res[10] = services.isFinishMouth() ? '1' : '0';
        res[11] = services.isFinishFace() ? '1' : '0';
        res[12] = services.isFinishChest() ? '1' : '0';
        res[13] = services.isBdsmBondage() ? '1' : '0';
        res[14] = services.isBdsmMistress() ? '1' : '0';
        res[15] = services.isBdsmRpGames() ? '1' : '0';
        res[16] = services.isBdsmEasy() ? '1' : '0';
        res[17] = services.isBdsmFlogging() ? '1' : '0';
        res[18] = services.isBdsmSlave() ? '1' : '0';
        res[19] = services.isBdsmFetish() ? '1' : '0';
        res[20] = services.isBdsmTrumping() ? '1' : '0';
        res[21] = services.isExtremeStrapon() ? '1' : '0';
        res[22] = services.isExtremeToys() ? '1' : '0';
        res[23] = services.isStripProf() ? '1' : '0';
        res[24] = services.isStripAmateur() ? '1' : '0';
        res[25] = services.isMassageClassic() ? '1' : '0';
        res[26] = services.isMassageProfessional() ? '1' : '0';
        res[27] = services.isMassageRelax() ? '1' : '0';
        res[28] = services.isMassageThai() ? '1' : '0';
        res[29] = services.isMassageUrological() ? '1' : '0';
        res[30] = services.isMassageErotic() ? '1' : '0';
        res[31] = services.isMassageSakura() ? '1' : '0';
        res[32] = services.isLesbiLight() ? '1' : '0';
        res[33] = services.isLesbiFull() ? '1' : '0';
        res[34] = services.isFistingAnal() ? '1' : '0';
        res[35] = services.isFistingClassic() ? '1' : '0';
        res[36] = services.isGoldenRainIn() ? '1' : '0';
        res[37] = services.isGoldenRainOut() ? '1' : '0';
        res[38] = services.isAddEscort() ? '1' : '0';
        res[39] = services.isAddPhoto() ? '1' : '0';
        res[40] = services.isAddFamily() ? '1' : '0';

        return String.valueOf(res);
    }


}
