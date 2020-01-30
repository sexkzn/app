package com.example.demo.repository;

import com.example.demo.entity.RegSessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface RegSessionRepository extends JpaRepository<RegSessionEntity, UUID> {
}
