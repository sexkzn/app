package com.example.demo.util;

import com.example.demo.entity.ProfileEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.model.Profile;
import com.example.demo.model.ProfileCreateRequest;
import com.example.demo.model.User;
import com.example.demo.model.UserCreateRequest;
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

    public static ProfileEntity map(ProfileCreateRequest request) {
        if (request == null) return null;
        ProfileEntity entity = new ProfileEntity();
        // TODO: 05.02.2020
        entity.setServices(servicesToString(request));

        return entity;
    }

    private static String servicesToString(ProfileCreateRequest r) {
        char[] res = new char[41];

        res[0] = r.getSexClassic() ? '1' : '0';
        res[1] = r.getSexAnal() ? '1' : '0';
        res[2] = r.getSexGroup() ? '1' : '0';
        res[3] = r.getSexDouble() ? '1' : '0';

        res[4] = r.getAffectionCondom() ? '1' : '0';
        res[5] = r.getAffectionNoCondom() ? '1' : '0';
        res[6] = r.getAffectionDeep() ? '1' : '0';
        res[7] = r.getAffectionCar() ? '1' : '0';
        res[8] = r.getAffectionCun() ? '1' : '0';
        res[9] = r.getAffectionAn() ? '1' : '0';

        res[10] = r.getFinishMouth() ? '1' : '0';
        res[11] = r.getFinishFace() ? '1' : '0';
        res[12] = r.getFinishChest() ? '1' : '0';

        res[13] = r.getBdsmBondage() ? '1' : '0';
        res[14] = r.getBdsmMistress() ? '1' : '0';
        res[15] = r.getBdsmRpGames() ? '1' : '0';
        res[16] = r.getBdsmEasy() ? '1' : '0';
        res[17] = r.getBdsmFlogging() ? '1' : '0';
        res[18] = r.getBdsmSlave() ? '1' : '0';
        res[19] = r.getBdsmFetish() ? '1' : '0';
        res[20] = r.getBdsmTrumping() ? '1' : '0';

        res[21] = r.getExtremeStrapon() ? '1' : '0';
        res[22] = r.getExtremeToys() ? '1' : '0';

        res[23] = r.getStripProf() ? '1' : '0';
        res[24] = r.getStripAmateur() ? '1' : '0';

        res[25] = r.getMassageClassic() ? '1' : '0';
        res[26] = r.getMassageProfessional() ? '1' : '0';
        res[27] = r.getMassageRelax() ? '1' : '0';
        res[28] = r.getMassageThai() ? '1' : '0';
        res[29] = r.getMassageUrological() ? '1' : '0';
        res[30] = r.getMassageErotic() ? '1' : '0';
        res[31] = r.getMassageSakura() ? '1' : '0';

        res[32] = r.getLesbiLight() ? '1' : '0';
        res[33] = r.getLesbiFull() ? '1' : '0';

        res[34] = r.getFistingAnal() ? '1' : '0';
        res[35] = r.getFistingClassic() ? '1' : '0';

        res[36] = r.getGoldenRainIn() ? '1' : '0';
        res[37] = r.getGoldenRainOut() ? '1' : '0';

        res[38] = r.getAddEscort() ? '1' : '0';
        res[39] = r.getAddPhoto() ? '1' : '0';
        res[40] = r.getAddFamily() ? '1' : '0';

        return String.valueOf(res);
    }


}
