package com.tickets.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.entities.Attachment;
import com.tickets.entities.Movie;
import com.tickets.entities.Seating;
import com.tickets.entities.Theater;
import com.tickets.entities.generator.Generator;
import com.tickets.repositories.AttachmentRepository;
import com.tickets.repositories.MovieRepository;
import com.tickets.security.entities.User;
import com.tickets.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
public class MoviesController {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    AttachmentRepository attachmentRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/create")
    public HashMap<String, String> create(@RequestBody Movie movie) throws JsonProcessingException {
        ObjectMapper objectMapper=new ObjectMapper();
        User user=this.userRepository.findById(objectMapper.readValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString(),User.class).getId()).get();
        movie.setId(Generator.generateId());
        user.addMovie(movie);
        Seating seating=movie.getSeating();
        seating.setId(Generator.generateId());
        seating.setFree(false);

        System.out.println(movie);
        movieRepository.save(movie);
        HashMap<String,String> response=new HashMap<String, String>();
        response.put("id", movie.getId());
        return response;
    }

    @PostMapping(path="/setFile/{id}")
    public void createFile(@RequestParam("file") MultipartFile file, @PathVariable("id") String id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setId(Generator.generateId());
        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Movie> optionalMovie=movieRepository.findById(id);
        Movie movie=optionalMovie.get();

        movie.setPoster(attachment);
        movieRepository.save(movie);
    }


    // READ
    @GetMapping("/getAll")
    public List<Movie> getAll()
    {
        return this.movieRepository.findAll();
    }
}
