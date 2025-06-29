package com.tickets.dto;

public class PlaceDto {
    public String id;

    public String name;
    public String placeType;

    public PlaceDto(String id, String name, String placeType) {
        this.id = id;
        this.name = name;
        this.placeType = placeType;
    }
}
