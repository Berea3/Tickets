package com.tickets.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.Attachment;
import com.tickets.entities.Sport;
import com.tickets.entities.Theater;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.SportRepository;
import com.tickets.repositories.layout.StadiumRepository;
import com.tickets.repositories.layout.StadiumSectionRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/sports")
public class SportsController {

    @Autowired
    SportRepository sportRepository;

    @Autowired
    StadiumRepository stadiumRepository;

    @Autowired
    StadiumSectionRepository stadiumSectionRepository;

    @Autowired
    UserRepository userRepository;


    @PostMapping("/create")
    public HashMap<String,String> create(@RequestBody Sport sport) throws JsonProcessingException {
        ObjectMapper objectMapper=new ObjectMapper();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        sport.setId(Generator.generateId());
        sport.setUser(user);
        for (int i=0;i<sport.getStadium().getStadiumSections().size();i++)
        {
            sport.getStadium().getStadiumSections().get(i).setId(Generator.generateId());
        }
        sport.getStadium().setId(Generator.generateId());
        sport.getStadium().setFree(false);
        this.sportRepository.save(sport);

        HashMap<String,String> response=new HashMap<String, String>();
        response.put("id", sport.getId());
        return response;
    }

    @PostMapping(path="/setFile/{id}")
    public void createFile(@RequestParam("file") MultipartFile file, @PathVariable("id") String id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setId(Generator.generateId());
        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Sport> optionalSport=this.sportRepository.findById(id);
        Sport sport=optionalSport.get();

        sport.setPoster(attachment);
        this.sportRepository.save(sport);
    }
}
