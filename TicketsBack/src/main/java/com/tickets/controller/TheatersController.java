package com.tickets.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.Attachment;
import com.tickets.entities.Seating;
import com.tickets.entities.Theater;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.AttachmentRepository;
import com.tickets.repositories.TheaterRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
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
@RequestMapping("/theaters")
public class TheatersController {

    @Autowired
    TheaterRepository theaterRepository;

    @Autowired
    AttachmentRepository attachmentRepository;

    @Autowired
    UserRepository userRepository;

    // CREATE
    @PostMapping(path="/create")
    public HashMap<String,String> create(@RequestBody Theater theater) throws JsonProcessingException
    {
        ObjectMapper objectMapper=new ObjectMapper();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        theater.setId(Generator.generateId());
        user.addTheatre(theater);
        Seating seating=theater.getSeating();
        seating.setId(Generator.generateId());
        seating.setFree(false);

        System.out.println(theater);
        theaterRepository.save(theater);
        HashMap<String,String> response=new HashMap<String, String>();
        response.put("id", theater.getId());
        return response;
    }

    @PostMapping(path="/setFile/{id}")
    public void createFile(@RequestParam("file")MultipartFile file, @PathVariable("id") String id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setId(Generator.generateId());
        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Theater> optionalTheatre=theaterRepository.findById(id);
        Theater theater=optionalTheatre.get();

        theater.setPoster(attachment);
        theaterRepository.save(theater);
    }


    // READ
    @GetMapping(path="/getAll")
    public List<Theater> getAll()
    {
        System.out.println("brraaaa");
        System.out.println(theaterRepository.findAll());
        return theaterRepository.findAll();
    }

    @GetMapping(path="/getById/{id}")
    public Optional<Theater> getById(@PathVariable String id)
    {
        System.out.println(this.theaterRepository.findById(id).get());
        return theaterRepository.findById(id);
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


    // UPDATE
    @PutMapping(path="/update")
    public void update(@RequestBody Theater theater)
    {
        theaterRepository.save(theater);
    }


    // DELETE
    @DeleteMapping(path="/deleteById/{id}")
    public void delete(@PathVariable String id)
    {
        theaterRepository.deleteById(id);
    }
}
