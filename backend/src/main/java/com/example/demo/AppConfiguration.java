package com.example.demo;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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
            http.csrf().disable().authorizeRequests().anyRequest().permitAll().and().formLogin().successHandler(new CustomAuthenticationSuccessHandler()).and().httpBasic();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }

    public static class CustomAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
        protected final Log logger = LogFactory.getLog(this.getClass());
        private RequestCache requestCache = new HttpSessionRequestCache();

        public CustomAuthenticationSuccessHandler() {
        }

        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
            SavedRequest savedRequest = this.requestCache.getRequest(request, response);
            if (savedRequest == null) {
                clearAuthenticationAttributes(request);
            } else {
                String targetUrlParameter = this.getTargetUrlParameter();
                if (!this.isAlwaysUseDefaultTargetUrl() && (targetUrlParameter == null || !StringUtils.hasText(request.getParameter(targetUrlParameter)))) {
                    clearAuthenticationAttributes(request);
                    String targetUrl = savedRequest.getRedirectUrl();
                } else {
                    this.requestCache.removeRequest(request, response);
                    super.onAuthenticationSuccess(request, response, authentication);
                }
            }
        }

        public void setRequestCache(RequestCache requestCache) {
            this.requestCache = requestCache;
        }
    }

}
