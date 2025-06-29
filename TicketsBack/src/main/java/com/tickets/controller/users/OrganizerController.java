package com.tickets.controller.users;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.dto.EventDto;
import com.tickets.dto.PlaceDto;
import com.tickets.dto.TicketDto;
import com.tickets.entities.Attachment;
import com.tickets.entities.Theater;
import com.tickets.entities.layouts.Seating;
import com.tickets.entities.layouts.Stadium;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/organizer")
public class OrganizerController {

    @Autowired
    UserRepository userRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();


    @GetMapping("/getEvents")
    public List<EventDto> getAll() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        List<EventDto> events=new ArrayList<>();
        events.addAll(user.getTheaters().stream().map(theater -> {return new EventDto(theater.getId(),"theater", theater.getName(), theater.getPoster().getId(), theater.getDate(),theater.getTime());}).toList());
        events.addAll(user.getConcerts().stream().map(concert -> {
            Attachment attachment=concert.getPoster();
            String posterId=null;
            if (concert.getPoster()!=null) posterId=concert.getPoster().getId();
            return new EventDto(concert.getId(), "concert", concert.getName(), posterId, concert.getDate(), concert.getTime());
        }).toList());
        events.addAll(user.getMovies().stream().map(movie -> {return new EventDto(movie.getId(), "movie", movie.getName(), movie.getPoster().getId(), movie.getDate(), movie.getTime());}).toList());
        events.addAll(user.getSports().stream().map(sport -> {return new EventDto(sport.getId(), "sport", sport.getName(), sport.getPoster().getId(), sport.getDate(), sport.getTime());}).toList());
        Collections.shuffle(events);
        return events;
    }

    @GetMapping("/getPlaces")
    public List<PlaceDto> getPlaces() throws JsonProcessingException {
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        List<PlaceDto> places=new ArrayList<>();
        places.addAll(user.getSeatings().stream().filter(Seating::getFree).map(seating -> {return new PlaceDto(seating.getId(), seating.getName(), "seating");}).toList());
        places.addAll(user.getStadiums().stream().filter(Stadium::isFree).map(stadium -> {return new PlaceDto(stadium.getId(), stadium.getName(), "stadiums");}).toList());
        return places;
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
