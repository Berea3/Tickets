package com.tickets.controller;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
public class AiController {

    @Autowired
    private ChatModel chatModel;

    @PostMapping("/translate")
    public String translate(@RequestBody String message)
    {
        return chatModel.call("Translate this message in romanian without saying you translated it:"+message);
    }
}
