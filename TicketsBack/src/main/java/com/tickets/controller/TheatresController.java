package com.tickets.controller;

import com.tickets.entities.Attachment;
import com.tickets.entities.Theatre;
import com.tickets.repositories.AttachmentRepository;
import com.tickets.repositories.TheatreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/theatres")
public class TheatresController {

    @Autowired
    TheatreRepository theatreRepository;

    @Autowired
    AttachmentRepository attachmentRepository;

    // CREATE
    @PostMapping(path="/create")
    public HashMap<String,Long> create(@RequestBody Theatre theatre)
    {
        System.out.println(theatre);
        theatreRepository.save(theatre);
        HashMap<String,Long> response=new HashMap<String, Long>();
        response.put("id",theatre.getId());
        return response;
    }

//    @PostMapping(path="/create")
//    public void create(@RequestBody Theatre theatre)
//    {
//        System.out.println(theatre);
//        theatreRepository.save(theatre);
////        HashMap<String,Long> response=new HashMap<String, Long>();
////        response.put("id",theatre.getId());
////        return response;
//    }

    @PostMapping(path="/create/file/{id}")
    public void createFile(@RequestParam("file")MultipartFile file, @PathVariable("id") Long id) throws IOException {
        Attachment attachment=new Attachment();

        attachment.setFile(file.getBytes());
        attachment.setType(file.getContentType());
        attachment.setName(file.getOriginalFilename());

        Optional<Theatre> optionalTheatre=theatreRepository.findById(id);
        Theatre theatre=optionalTheatre.get();

        theatre.addAttachment(attachment);
        theatreRepository.save(theatre);
    }


    // READ
    @GetMapping(path="/getAll")
    public List<Theatre> getAll()
    {
        return theatreRepository.findAll();
    }

    @GetMapping(path="/getById/{id}")
    public Optional<Theatre> getById(@PathVariable Long id)
    {
        return theatreRepository.findById(id);
    }

    @GetMapping(path="/read/attachment/{id}")
    public ResponseEntity<Resource> readAttachment(@PathVariable Long id)
    {
        var optionalFile=attachmentRepository.findById(id);

        var file=optionalFile.get();

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(file.getType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,"inline; filename=\""+file.getName()+"\"") //in cazul in care se vrea display in browser
//                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+file.getName()+"\"")
                .body(new ByteArrayResource(file.getFile()));
    }


    // UPDATE
    @PutMapping(path="/update")
    public void update(@RequestBody Theatre theatre)
    {
        theatreRepository.save(theatre);
    }


    // DELETE
    @DeleteMapping(path="/deleteById/{id}")
    public void delete(@PathVariable Long id)
    {
        theatreRepository.deleteById(id);
    }
}
