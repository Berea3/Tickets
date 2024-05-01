package com.tickets.email;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    private final Email email;

    public EmailController(Email email) {
        this.email = email;
    }

    @GetMapping(path="/sendEmail")
    public String sendRequest()
    {
        System.out.println("request for email called");
        email.send("berendeaandrei03@gmail.com","mail test","mail body");
        return "request done";
    }
}
