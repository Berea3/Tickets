package com.tickets.controller.layout;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.layouts.Seating;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.layout.SeatingRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/seating")
public class SeatingController {

    @Autowired
    SeatingRepository seatingRepository;

    @Autowired
    UserRepository userRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();

    @PostMapping("/create")
    public void create(@RequestBody Seating seating) throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        seating.setId(Generator.generateId());
        seating.setFree(true);
        seating.setUser(user);
        this.seatingRepository.save(seating);
    }


    @GetMapping("/getAll")
    public List<Seating> getAll() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        return user.getSeatings().stream().filter(Seating::getFree).toList();
    }

    @DeleteMapping("/delete/{seatingId}")
    public void delete(@PathVariable String id)
    {
        this.seatingRepository.deleteById(id);
    }
}
