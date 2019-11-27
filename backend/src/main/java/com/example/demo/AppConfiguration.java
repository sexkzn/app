package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Configuration
    @EnableWebSecurity
    public static class SecurityConfiguration extends WebSecurityConfigurerAdapter {

        @Autowired
        public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication()
                    .withUser("user").password(passwordEncoder().encode("password")).authorities("ROLE_test");
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable().authorizeRequests().anyRequest().permitAll().and().formLogin().and().httpBasic();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }

}
