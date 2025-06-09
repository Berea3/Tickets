package com.tickets.controller.layout;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.generator.Generator;
import com.tickets.entities.layouts.Stadium;
import com.tickets.entities.layouts.StadiumSection;
import com.tickets.repositories.layout.StadiumRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stadiums")
public class StadiumController {

    @Autowired
    StadiumRepository stadiumRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/create")
    public void create(@RequestBody Stadium stadium) throws JsonProcessingException {
//        System.out.println(stadiumSections);

        System.out.println(stadium);
        ObjectMapper objectMapper=new ObjectMapper();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        for (int i=0;i<stadium.getStadiumSections().size();i++)
        {
            stadium.getStadiumSections().get(i).setId(Generator.generateId());
        }
        stadium.setUser(user);
        stadium.setId(Generator.generateId());
        this.stadiumRepository.save(stadium);
    }

    @GetMapping("/getAll")
    public List<Stadium> getAll()
    {
        return this.stadiumRepository.findAll();
    }
}
