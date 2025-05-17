package com.tickets.controller.layout;

import com.tickets.entities.Seating;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.SeatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/seating")
public class SeatingController {

    @Autowired
    SeatingRepository seatingRepository;

    @PostMapping("/create")
    public void create(@RequestBody Seating seating)
    {
        seating.setId(Generator.generateId());
        seating.setFree(true);
        this.seatingRepository.save(seating);
    }


    @GetMapping("/getAll")
    public List<Seating> getAll()
    {
        return this.seatingRepository.findAllByFree(true);
    }
}
