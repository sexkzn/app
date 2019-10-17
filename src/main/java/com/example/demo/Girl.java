package com.example.demo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Girl implements Serializable {
    private UUID id;
    private String name;
    private String phoneNumber;
    private String avatar;
    private List<String> photos;
    private Integer age;
    private Integer weight;
    private Integer height;
    private Integer boobsSize;
    private String condition;
    private String description;
    private Integer priceInOne;
    private Integer priceInTwo;
    private Integer priceInNight;
    private Integer priceOutOne;
    private Integer priceOutTwo;
    private Integer priceOutNight;
}
