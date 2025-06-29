package com.tickets.dto;

public class TicketDto {

    public String id;
    public String event;
    public String eventName;
    public String description;

    public TicketDto(String id, String event, String eventName) {
        this.id = id;
        this.event = event;
        this.eventName = eventName;
    }

    public TicketDto(String id, String event, String eventName, String description) {
        this.id = id;
        this.event = event;
        this.eventName = eventName;
        this.description = description;
    }
}
