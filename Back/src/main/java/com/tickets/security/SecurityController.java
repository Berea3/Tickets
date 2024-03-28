package com.tickets.security;

import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/security/all")
    public String securityAll()
    {
        return "loggedin normal account";
    }
    @GetMapping("/security/admin")
    public String securityAdmin()
    {
        return "loggedin admin";
    }
    @GetMapping("/security/unauthenticated")
    public String securityUnauthenticated()
    {
        System.out.println("proba");
        return "not logged in";
    }
    @PostMapping("/security/sign-up")
    public String securitySignUp(@RequestBody User user)
    {
        System.out.println(user.toString());
        userRepository.save(user);
        return "not logged in";
    }
}
