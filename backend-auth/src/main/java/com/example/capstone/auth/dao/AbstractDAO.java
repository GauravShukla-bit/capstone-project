package com.example.capstone.auth.dao;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public abstract class AbstractDAO {
    @Autowired
    EntityManager entityManager;

    public <T> T save(T object) {
        entityManager.getTransaction().begin();
        T savedObject = entityManager.merge(object);
        entityManager.getTransaction().commit();
        return savedObject;
    }
}
