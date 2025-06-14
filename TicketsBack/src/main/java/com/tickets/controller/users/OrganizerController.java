package com.tickets.controller.users;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.dto.TicketDto;
import com.tickets.entities.Theater;
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
@RequestMapping("/organizer")
public class OrganizerController {

    @Autowired
    UserRepository userRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();


    @GetMapping("/getEvents")
    public List<Theater> getAll() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        return user.getTheaters();
    }

    @GetMapping("/getTickets")
    public List<TicketDto> getTickets() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        List<TicketDto> tickets=new ArrayList<>();
        tickets.addAll(user.getTheaters().stream()
                .flatMap(theater -> theater.getTheaterTickets().stream().map(theaterTicket -> {return new TicketDto(theaterTicket.getId(),"theater",theaterTicket.getTheater().getName());} )).toList());
        tickets.addAll(user.getConcerts().stream()
                .flatMap(concert -> concert.getConcertTickets().stream().map(concertTicket -> {return new TicketDto(concertTicket.getId(),"concert",concertTicket.getConcert().getName());} )).toList());
        tickets.addAll(user.getMovies().stream()
                .flatMap(movie -> movie.getMovieTickets().stream().map(movieTicket -> {return new TicketDto(movieTicket.getId(),"movie",movieTicket.getMovie().getName());} )).toList());
        tickets.addAll(user.getSports().stream()
                .flatMap(sport -> sport.getSportTickets().stream().map(sportTicket -> {return new TicketDto(sportTicket.getId(),"sport",sportTicket.getSport().getName());} )).toList());
        return tickets;
    }
}
