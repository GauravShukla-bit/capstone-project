package com.example.capstone.auth.controller;

import com.example.capstone.auth.dto.LoginRequestDTO;
import com.example.capstone.auth.dto.SignUpRequestDTO;
import com.example.capstone.auth.dto.UserDTO;
import com.example.capstone.auth.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/authenticate")
    public ResponseEntity<UserDTO> authenticate(HttpServletRequest httpServletRequest) {
        return authService.authenticate(httpServletRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return authService.login(loginRequestDTO);
    }

    @PostMapping("/signUp")
    public ResponseEntity<UserDTO> signUp(@RequestBody SignUpRequestDTO signUpRequestDTO) {
        return authService.signUp(signUpRequestDTO);
    }
}
