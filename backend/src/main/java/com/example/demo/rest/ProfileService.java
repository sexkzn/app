package com.example.demo.rest;

import com.example.demo.model.Profile;
import com.example.demo.repository.ProfileRepository;
import com.example.demo.util.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class ProfileService {

    @Autowired
    private ProfileRepository repository;

    @CrossOrigin(origins = "*")
    @GetMapping(path = "/api/profiles")
    public Page<Profile> findAll(@PageableDefault Pageable pageable) {
        return repository.findAll(pageable).map(Mappers::mapSimple);
    }


    @CrossOrigin(origins = "*")
    @GetMapping(path = "/api/profiles/{id}")
    public Profile findOne(@PathVariable("id") String id) {
        return Mappers.mapFull(repository.findById(UUID.fromString(id)).orElse(null));
    }
}
