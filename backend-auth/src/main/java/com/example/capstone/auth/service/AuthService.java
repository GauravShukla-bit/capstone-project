package com.example.capstone.auth.service;

import com.example.capstone.auth.dto.LoginRequestDTO;
import com.example.capstone.auth.dto.SignUpRequestDTO;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public void login(LoginRequestDTO loginRequestDTO){
        System.out.println(loginRequestDTO);
    }

    public void signUp(SignUpRequestDTO signUpRequestDTO){
        System.out.println(signUpRequestDTO);
    }
}
