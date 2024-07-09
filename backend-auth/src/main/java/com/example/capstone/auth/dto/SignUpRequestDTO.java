package com.example.capstone.auth.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequestDTO {
    private String name;
    private String email;
    private String password;
}
