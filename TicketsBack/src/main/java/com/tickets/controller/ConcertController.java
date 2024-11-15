package com.tickets.controller;

import com.tickets.entities.Concert;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.ConcertRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/concerts")
public class ConcertController {

    @Autowired
    ConcertRepository concertRepository;

    @PostMapping
    public void create(@RequestBody Concert concert)
    {
        String id= Generator.generateId();
        concert.setId(id);
        concertRepository.save(concert);
    }
}
