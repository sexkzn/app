package com.example.demo;

import com.example.demo.util.CommaSeparatedStringListConverter;
import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CommaSeparatedStringListConverterTest {
    @Test
    public void test() {
        CommaSeparatedStringListConverter c = new CommaSeparatedStringListConverter();
        Assert.assertEquals("a", c.convertToDatabaseColumn(Collections.singletonList("a")));
        Assert.assertEquals("a,b,c", c.convertToDatabaseColumn(Arrays.asList("a", "b", "c")));

        Assert.assertEquals("a", c.convertToEntityAttribute("a").get(0));
        List<String> list = c.convertToEntityAttribute("a,b,c");
        Assert.assertEquals(3, list.size());
        Assert.assertEquals("a", list.get(0));
        Assert.assertEquals("b", list.get(1));
        Assert.assertEquals("c", list.get(2));
    }
}
