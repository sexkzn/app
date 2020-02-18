package com.example.demo.repository;

import com.example.demo.entity.ProfileEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface ProfileRepository extends JpaRepository<ProfileEntity, UUID> {
    Page<ProfileEntity> findByUserId(Pageable pageable, UUID userId);
}
