package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface GirlRepository extends JpaRepository<GirlEntity, UUID> {

}
