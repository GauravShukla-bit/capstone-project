package com.example.capstone.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthService {

    @GetMapping("/test")
    public static String test() {
        return "Hello World";
    }
}
