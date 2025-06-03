package com.tickets.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.util.Optional;

@Component
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userJson) throws UsernameNotFoundException {
//        System.out.println(username);
//        ObjectMapper mapper=new ObjectMapper();
//        String username=mapper.readValue(userJson,"username");
//        System.out.println(userJson);
        JSONObject jsonObject = new JSONObject(userJson);
        User user=userRepository.findByUsername(jsonObject.getString("email"));

//        System.out.println(jsonObject.getString("email"));
        return new MyUserDetails(user);
//        if (optionalUser.isPresent()) return new MyUserDetails(optionalUser.get());
//        else return null;
    }
}
