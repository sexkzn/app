package com.example.demo;

import com.example.demo.util.Validations;
import org.junit.Test;

public class ValidationsTest {

    @Test(expected = ValidationException.class)
    public void test1() {
        Validations.validatePassword(null, null);
    }

    @Test(expected = ValidationException.class)
    public void test2() {
        Validations.validatePassword("1", "1");
    }

    @Test(expected = ValidationException.class)
    public void test3() {
        Validations.validatePassword("aB1", "aB1");
    }

    @Test(expected = ValidationException.class)
    public void test4() {
        Validations.validatePassword("aB111111", "aB111112");
    }

    @Test
    public void testSuccess() {
        Validations.validatePassword("aB111111", "aB111111");
    }
}
