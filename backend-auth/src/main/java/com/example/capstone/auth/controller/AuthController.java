package com.example.capstone.auth.controller;

import com.example.capstone.auth.dto.LoginRequestDTO;
import com.example.capstone.auth.dto.SignUpRequestDTO;
import com.example.capstone.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/test")
    public static String test() {
        return "Hello World";
    }

    @PostMapping("/login")
    public void login(@RequestBody LoginRequestDTO loginRequestDTO){
        authService.login(loginRequestDTO);
    }

    @PostMapping("/signUp")
    public void signUp(@RequestBody SignUpRequestDTO signUpRequestDTO){
        authService.signUp(signUpRequestDTO);
    }
}
