package com.example.capstone.auth.dao;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public abstract class AbstractDAO {
    @Autowired
    EntityManager entityManager;

    public <T> T save(T object) {
        return entityManager.merge(object);
    }
}
