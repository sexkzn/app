package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Configuration
public class AppConfiguration {

    @Controller
    public static class MyErrorController implements ErrorController {

        @RequestMapping("/error")
        public String handleError() {
            //do something like logging
            return "error";
        }

        @Override
        public String getErrorPath() {
            return "/error";
        }
    }

    @Bean
    public FilterRegistrationBean securityFilterChain(@Value("${sitemap.path}") String sitemapPath) {
        EscapedFragmentFilter f = new EscapedFragmentFilter(sitemapPath);
        FilterRegistrationBean<EscapedFragmentFilter> registration = new FilterRegistrationBean<>(f);
        registration.setOrder(Integer.MIN_VALUE + 1);
        registration.setName("escapedFragmentFilter");
        return registration;
    }

}
