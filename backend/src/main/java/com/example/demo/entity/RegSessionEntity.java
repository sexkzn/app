package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "reg_session", schema = "demo")
@Getter
@Setter
public class RegSessionEntity extends AbstractEntity {
    @Column(name = "username")
    private String username;

    @Column(name = "code")
    private String code;

}
