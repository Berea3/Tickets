package com.tickets.dto;

public class TicketDto {

    public String id;
    public String event;
    public String eventName;

    public TicketDto(String id, String event, String eventName) {
        this.id = id;
        this.event = event;
        this.eventName = eventName;
    }
}
