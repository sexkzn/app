package com.example.demo;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Configuration
public class AppConfiguration {
    @Controller
    static class FaviconController {

        @GetMapping("favicon.ico")
        @ResponseBody
        void returnNoFavicon() {
        }
    }

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

}
