package com.example.capstone.auth.dao;

import com.example.capstone.auth.entity.User;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class UserDAO extends AbstractDAO {

    public List<User> getAllUsers() {
        TypedQuery<User> typedQuery = entityManager.createNamedQuery("User.getAllUsers", User.class);
        return typedQuery.getResultList();
    }

    public Long getDuplicateUserCount(String email) {
        TypedQuery<Long> typedQuery = entityManager.createNamedQuery("User.getDuplicateUserCount", Long.class);
        return getNullSafeResult(typedQuery);
    }

    public User getUserById(Long userId) {
        TypedQuery<User> typedQuery = entityManager.createNamedQuery("User.getUserById", User.class);
        typedQuery.setParameter("userId", userId);
        return getNullSafeResult(typedQuery);
    }

    public User getUserByEmail(String email) {
        TypedQuery<User> typedQuery = entityManager.createNamedQuery("User.getUserByEmail", User.class);
        typedQuery.setParameter("email", email);
        return getNullSafeResult(typedQuery);
    }

    private <T> T getNullSafeResult(TypedQuery<T> typedQuery){
        try {
            return typedQuery.getSingleResult();
        } catch (Exception e){
            return null;
        }
    }
}
