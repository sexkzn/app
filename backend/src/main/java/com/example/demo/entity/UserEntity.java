package com.example.demo.entity;

import com.example.demo.util.CommaSeparatedStringListConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "user", schema = "demo")
@Getter
@Setter
public class UserEntity extends AbstractEntity {
    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "enabled")
    private Boolean enabled;

    @Column(name = "roles")
    @Convert(converter = CommaSeparatedStringListConverter.class)
    private List<String> roles;
}
