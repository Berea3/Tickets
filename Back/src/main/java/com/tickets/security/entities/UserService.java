package com.tickets.security.entities;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {

//    private UserRepository userRepository;

//    public UserService(){}
//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    public User validateUser(String username, String password, UserRepository userRepository)
    {
//        System.out.println(username);
//        System.out.println(password);
//        System.out.println(userRepository.count());
        User user=userRepository.findByUsername(username);
//        System.out.println(user.getRoles().size());
        if (user!=null)
        {
            if (Objects.equals(user.getPassword(), password)) return user;
            else return null;
        }
        else return null;
    }
}
