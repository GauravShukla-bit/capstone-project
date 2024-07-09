package com.example.capstone.auth.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER")
@NamedQueries({
        @NamedQuery(name = "User.getAllUsers", query = "SELECT u FROM User u"),
        @NamedQuery(name = "User.getDuplicateUserCount", query = "SELECT COUNT(*) FROM User"),
        @NamedQuery(name = "User.getUserById", query = "SELECT u FROM User u WHERE u.userId=:userId"),
        @NamedQuery(name = "User.getUserByEmail", query = "SELECT u FROM User u WHERE u.email=:email")
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "HASHED_PASSWORD")
    private String hashedPassword;

}
