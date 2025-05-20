package com.tickets.controller;

import com.tickets.repositories.AttachmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/files")
public class FilesController {

    @Autowired
    AttachmentRepository attachmentRepository;

    @GetMapping("/findById/{id}")
    public ResponseEntity<Resource> findById(@PathVariable String id)
    {
        var optionalFile=attachmentRepository.findById(id);

        var file=optionalFile.get();

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(file.getType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,"inline; filename=\""+file.getName()+"\"") //in cazul in care se vrea display in browser
//                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+file.getName()+"\"")
                .body(new ByteArrayResource(file.getFile()));
    }
}
