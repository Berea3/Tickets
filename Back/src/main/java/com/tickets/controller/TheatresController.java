package com.tickets.controller;

import com.tickets.entities.Attachment;
import com.tickets.entities.Theatre;
import com.tickets.repositories.TheatreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/theatres")
public class TheatresController {

    @Autowired
    TheatreRepository theatreRepository;

    //CREATE
    @PostMapping(path="/create")
    public HashMap<String,Long> create(@RequestBody Theatre theatre)
    {
        theatreRepository.save(theatre);
        HashMap<String,Long> response=new HashMap<String, Long>();
        response.put("id",theatre.getId());
        return response;
    }

    @PostMapping(path="/create/file/{id}")
    public void createFile(@RequestParam("file")MultipartFile file, @PathVariable("id") Long id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Theatre> optionalTheatre=theatreRepository.findById(id);
        Theatre theatre=optionalTheatre.get();

//        theatre.
    }

    // READ
}
