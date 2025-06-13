package com.tickets.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.dto.TicketDto;
import com.tickets.entities.tickets.TheaterTicket;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();


    // READ
    @GetMapping("/getTickets")
    public List<TheaterTicket> getTickets() throws JsonProcessingException
    {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        List<TicketDto> tickets;
        return user.getTheaterTickets();
    }
}
