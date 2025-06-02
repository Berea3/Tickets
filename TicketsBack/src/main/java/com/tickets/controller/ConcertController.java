package com.tickets.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.Attachment;
import com.tickets.entities.Concert;
import com.tickets.entities.Seating;
import com.tickets.entities.Theater;
import com.tickets.entities.generator.Generator;
import com.tickets.entities.tickets.ConcertTicket;
import com.tickets.entities.tickets.TheaterTicket;
import com.tickets.repositories.AttachmentRepository;
import com.tickets.repositories.ConcertRepository;
import com.tickets.repositories.tickets.ConcertTicketRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/concerts")
public class ConcertController {

    @Autowired
    ConcertRepository concertRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AttachmentRepository attachmentRepository;

    @Autowired
    ConcertTicketRepository concertTicketRepository;

    private final ObjectMapper objectMapper=new ObjectMapper();

    // CREATE
    @PostMapping(path="/create")
    public HashMap<String,String> create(@RequestBody Concert concert) throws JsonProcessingException
    {
        ObjectMapper objectMapper=new ObjectMapper();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        concert.setId(Generator.generateId());
        user.addConcert(concert);

        concertRepository.save(concert);
        HashMap<String,String> response=new HashMap<String, String>();
        response.put("id", concert.getId());
        return response;
    }

    @PostMapping(path="/setFile/{id}")
    public void createFile(@RequestParam("file") MultipartFile file, @PathVariable("id") String id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setId(Generator.generateId());
        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Concert> optionalConcert=this.concertRepository.findById(id);
        Concert concert=optionalConcert.get();

        concert.setPoster(attachment);
        this.concertRepository.save(concert);
    }

    @PostMapping("/buy/{concertId}")
    public void buyTicket(@RequestBody ConcertTicket concertTicket, @PathVariable String concertId) throws JsonProcessingException
    {
        Concert concert=this.concertRepository.findById(concertId).get();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        concertTicket.setId(Generator.generateId());
        concertTicket.setConcert(concert);
        concertTicket.setUser(user);
        concertTicket.setPrice(concert.getPrice());
        this.concertTicketRepository.save(concertTicket);
    }



    // READ
    @GetMapping("/getAll")
    public List<Concert> getAll()
    {
        return this.concertRepository.findAll();
    }

    @GetMapping("/getById/{id}")
    public Concert getById(@PathVariable String id)
    {
        return this.concertRepository.findById(id).get();
    }

    @GetMapping(path="/read/attachment/{id}")
    public ResponseEntity<Resource> readAttachment(@PathVariable String id)
    {
        var optionalFile=attachmentRepository.findById(id);

        var file=optionalFile.get();

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(file.getType()))
//                .header(HttpHeaders.CONTENT_DISPOSITION,"inline; filename=\""+file.getName()+"\"") //in cazul in care se vrea display in browser
                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+file.getName()+"\"")
                .body(new ByteArrayResource(file.getFile()));
    }
}
