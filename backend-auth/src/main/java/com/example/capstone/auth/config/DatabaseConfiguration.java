package com.example.capstone.auth.config;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import jakarta.persistence.Persistence;

@Configuration
public class DatabaseConfiguration {

    @Bean
    public EntityManager entityManager(){
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("capstoneDatabase");
        return entityManagerFactory.createEntityManager();
    }
}
