package com.tickets.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="concerts")
public class Concert {
    @Id
    private String id;

    private String name;
    private int places;

    private LocalDate date;

    @OneToMany(mappedBy = "concert",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Attachment> attachments;

    public Concert() {}

    public Concert(String id, String name, int places, LocalDate date, List<Attachment> attachments)
    {
        this.id = id;
        this.name = name;
        this.places = places;
        this.date = date;
        this.attachments = attachments;
    }

    public String getId() {return id;}
    public String getName() {return name;}
    public int getPlaces() {return places;}
    public LocalDate getDate() {return date;}
    public List<Attachment> getAttachments() {return attachments;}

    public void setId(String id) {this.id = id;}
    public void setPlaces(int places) {this.places = places;}
    public void setName(String name) {this.name = name;}
    public void setDate(LocalDate date) {this.date = date;}
    public void setAttachments(List<Attachment> attachments) {this.attachments = attachments;}
}
