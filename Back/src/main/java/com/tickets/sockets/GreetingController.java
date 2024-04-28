package com.tickets.sockets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

    @MessageMapping("/greeting")
    public String handle(String greeting) {
        System.out.println("cica in mesaj");
        return "[" + "proba" + ": " + greeting;
    }
}