package com.tickets.controller.layout;

import com.tickets.entities.Seating;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.SeatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seating")
public class SeatingController {

    @Autowired
    SeatingRepository seatingRepository;

    @PostMapping("/create")
    public void create(@RequestBody Seating seating)
    {
        seating.setId(Generator.generateId());
        this.seatingRepository.save(seating);
    }
}
