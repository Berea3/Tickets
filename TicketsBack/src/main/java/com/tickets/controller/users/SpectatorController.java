package com.tickets.controller.users;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.dto.TicketDto;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/spectator")
public class SpectatorController {

    @Autowired
    UserRepository userRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();


    @GetMapping("/getTickets")
    public List<TicketDto> getTickets() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        List<TicketDto> tickets=new ArrayList<>();
        tickets.addAll(user.getTheaterTickets().stream().map(theaterTicket -> {return new TicketDto(theaterTicket.getId(),"theater",theaterTicket.getTheater().getName(), "event: "+theaterTicket.getTheater().getName()+" row: "+theaterTicket.getRow()+" position: "+theaterTicket.getPosition()+" date: "+theaterTicket.getTheater().getDate()+" time: "+theaterTicket.getTheater().getTime());}).toList());
        tickets.addAll(user.getConcertTickets().stream().map(concertTicket -> {return new TicketDto(concertTicket.getId(), "concert", concertTicket.getConcert().getName(), concertTicket.getConcert().getName());}).toList());
        tickets.addAll(user.getMovieTickets().stream().map(movieTicket -> {return new TicketDto(movieTicket.getId(), "movie", movieTicket.getMovie().getName(), "event: "+movieTicket.getMovie().getName()+" row: "+movieTicket.getRow()+" position: "+movieTicket.getPosition()+" date: "+movieTicket.getMovie().getDate()+" time: "+movieTicket.getMovie().getTime());}).toList());
        tickets.addAll(user.getSportTickets().stream().map(sportTicket -> {return new TicketDto(sportTicket.getId(), "sport", sportTicket.getSport().getName(),  sportTicket.getSport().getName());}).toList());
        return tickets;
    }
}
