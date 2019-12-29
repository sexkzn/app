package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@MappedSuperclass
public abstract class AbstractEntity {
    @Id
    private UUID id;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;

    @Column(name = "last_action_date")
    private LocalDateTime lastActionDate;

    @PrePersist
    protected void prePersist() {
        if (id == null)
            setId(UUID.randomUUID());
        LocalDateTime now = LocalDateTime.now(Clock.systemUTC());
        setCreationDate(now);
        setLastActionDate(now);
    }

    @PreUpdate
    protected void preUpdate() {
        setLastActionDate(LocalDateTime.now(Clock.systemUTC()));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity that = (AbstractEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
