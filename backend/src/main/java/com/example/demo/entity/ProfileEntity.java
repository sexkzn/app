package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "profile", schema = "demo")
@Getter
@Setter
public class ProfileEntity extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Column(name = "ext_id")
    private Integer extId;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "height")
    private Integer height;

    @Column(name = "boobs_size")
    private Integer boobsSize;

    @Column(name = "description")
    private String description;

    @Column(name = "condition")
    private String condition;

    @Column(name = "price_in_one")
    private Integer priceInOne;

    @Column(name = "price_in_two")
    private Integer priceInTwo;

    @Column(name = "price_in_night")
    private Integer priceInNight;

    @Column(name = "price_out_one")
    private Integer priceOutOne;

    @Column(name = "price_out_two")
    private Integer priceOutTwo;

    @Column(name = "price_out_night")
    private Integer priceOutNight;

    @Column(name = "checked")
    private Boolean checked;

    @Column(name = "photos")
    private String photos;

    @Column(name = "services")
    private String services;

}
