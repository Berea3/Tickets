package com.tickets.security.entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value="select user from User user where user.username = ?1")
    User findByUsername(String username);

}