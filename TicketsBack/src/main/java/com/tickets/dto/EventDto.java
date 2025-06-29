package com.tickets.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class EventDto {

    public String id;
    public String eventType;
    public String name;
    public String posterId;
    public LocalDate date;
    public LocalTime time;

    public EventDto(String id, String eventType, String name, String posterId, LocalDate date, LocalTime time) {
        this.id = id;
        this.eventType = eventType;
        this.name = name;
        this.posterId = posterId;
        this.date = date;
        this.time = time;
    }
}
