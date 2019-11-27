package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
public class Controller {

    @Autowired
    private GirlRepository repository;

    @GetMapping("/config")
    public ConfigModel f(UsernamePasswordAuthenticationToken authentication) {
        ConfigModel config = new ConfigModel();
        if (authentication != null) {
            config.setUser(((User) authentication.getPrincipal()).getUsername());
        }
        return config;
    }

    @CrossOrigin(origins = "*")
    @GetMapping(path = "/api/girls")
    public Page<Girl> findAll(@PageableDefault Pageable pageable) {

        return repository.findAll(pageable).map(this::mapSimple);
    }


    @CrossOrigin(origins = "*")
    @GetMapping(path = "/api/girls/{id}")
    public Girl findOne(@PathVariable("id") String id) {
        return mapFull(repository.findById(UUID.fromString(id)).orElse(null));
    }

    private Girl mapCommon(GirlEntity entity) {
        if (entity == null) return null;
        Girl girl = new Girl();
        girl.setId(entity.getId());
        girl.setName(entity.getName());
        girl.setPhoneNumber(entity.getPhoneNumber());
        girl.setAge(entity.getAge());
        girl.setWeight(entity.getWeight());
        girl.setHeight(entity.getHeight());
        girl.setBoobsSize(entity.getBoobsSize());
        girl.setCondition(entity.getCondition());
        girl.setDescription(entity.getDescription());
        girl.setPriceInOne(entity.getPriceInOne());
        girl.setPriceInTwo(entity.getPriceInTwo());
        girl.setPriceInNight(entity.getPriceInNight());
        girl.setPriceOutOne(entity.getPriceOutOne());
        girl.setPriceOutTwo(entity.getPriceOutTwo());
        girl.setPriceOutNight(entity.getPriceOutNight());
        return girl;
    }

    private Girl mapFull(GirlEntity entity) {
        if (entity == null) return null;
        Girl girl = mapCommon(entity);
        if (entity.getPhotos() != null) {
            List<String> photos = Arrays.asList(entity.getPhotos().split(","));
            girl.setPhotos(photos.stream().filter(el -> !el.startsWith("/main.")).map(el -> "/images/" + girl.getId() + el).collect(Collectors.toList()));
        }
        return girl;
    }

    private Girl mapSimple(GirlEntity entity) {
        if (entity == null) return null;
        Girl girl = mapCommon(entity);
        if (entity.getPhotos() != null) {
            List<String> photos = Arrays.asList(entity.getPhotos().split(","));
            List<String> l = photos.stream().filter(el -> el.startsWith("/main.")).map(el -> "/images/" + girl.getId() + el).collect(Collectors.toList());
            if (l.size() > 0)
                girl.setAvatar(l.get(0));
        }
        return girl;
    }
}
