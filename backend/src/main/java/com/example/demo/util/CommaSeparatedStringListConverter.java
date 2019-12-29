package com.example.demo.util;

import javax.persistence.AttributeConverter;
import java.util.Arrays;
import java.util.List;

public class CommaSeparatedStringListConverter implements AttributeConverter<List<String>, String> {
    @Override
    public String convertToDatabaseColumn(List<String> strings) {
        if (strings == null) return null;
        return String.join(",", strings);
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        if (s == null || s.isEmpty()) return null;
        return Arrays.asList(s.split(","));
    }
}
