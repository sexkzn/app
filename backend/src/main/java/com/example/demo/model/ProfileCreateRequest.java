package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileCreateRequest {
    private String name;
    private Integer age;
    private Integer height;
    private Integer weight;
    private Integer boobsSize;
    private String hairColor;
    private String nation;
    private String appearance;
    private String phoneNumber;
    private Territory territory;
    private Services services;
    private String description;
    private Rates rates;

}
