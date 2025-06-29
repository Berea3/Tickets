package com.tickets.controller;

import com.tickets.dto.EventDto;
import com.tickets.entities.Attachment;
import com.tickets.repositories.ConcertRepository;
import com.tickets.repositories.MovieRepository;
import com.tickets.repositories.SportRepository;
import com.tickets.repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventsController {

    @Autowired
    TheaterRepository theaterRepository;

    @Autowired
    ConcertRepository concertRepository;

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    SportRepository sportRepository;

    @GetMapping(path="/getAll")
    public List<EventDto> getAll()
    {
        List<EventDto> events=new ArrayList<>();
        events.addAll(this.theaterRepository.findAll().stream().map(theater -> {return new EventDto(theater.getId(),"theater", theater.getName(), theater.getPoster().getId(), theater.getDate(),theater.getTime());}).toList());
        events.addAll(this.concertRepository.findAll().stream().map(concert -> {
            Attachment attachment=concert.getPoster();
            String posterId=null;
            if (concert.getPoster()!=null) posterId=concert.getPoster().getId();
            return new EventDto(concert.getId(), "concert", concert.getName(), posterId, concert.getDate(), concert.getTime());
        }).toList());
        events.addAll(this.movieRepository.findAll().stream().map(movie -> {return new EventDto(movie.getId(), "movie", movie.getName(), movie.getPoster().getId(), movie.getDate(), movie.getTime());}).toList());
        events.addAll(this.sportRepository.findAll().stream().map(sport -> {return new EventDto(sport.getId(), "sport", sport.getName(), sport.getPoster().getId(), sport.getDate(), sport.getTime());}).toList());
        Collections.shuffle(events);
        return events;
    }
}
