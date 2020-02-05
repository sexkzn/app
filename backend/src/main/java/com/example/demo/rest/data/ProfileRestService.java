package com.example.demo.rest.data;

import com.example.demo.entity.ProfileEntity;
import com.example.demo.model.Profile;
import com.example.demo.model.ProfileCreateRequest;
import com.example.demo.repository.ProfileRepository;
import com.example.demo.util.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class ProfileRestService {

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

    @CrossOrigin(origins = "*")
    @PostMapping(path = "/api/profiles")
    public Profile create(@RequestBody ProfileCreateRequest request) {
        ProfileEntity entity = Mappers.map(request);
        entity = repository.save(entity);
        return Mappers.mapFull(entity);
    }
}
