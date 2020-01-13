package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Config {
    private String username;
    private String email;
    private List<String> roles;

    //dummy
    private Map<String, Object> stats;
    private Map<String, Object> views;
    private Map<String, Object> consumption;
    private Integer balance;
}
