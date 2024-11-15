package com.tickets.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="theatres")
public class Theatre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String name;
    private int places;
    private LocalDate date;

    //@JsonIgnore
    @OneToMany(mappedBy = "theatre",
                cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Attachment> attachments;

    public Theatre() {}

    public Theatre(Long id, String name, int places, LocalDate date, List<Attachment> attachments) {
        this.id = id;
        this.name = name;
        this.places = places;
        this.date = date;
        this.attachments = attachments;
    }

    @Override
    public String toString() {
        return "Theatre{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", places=" + places +
                ", attachments=" + attachments +
                '}';
    }

    public void addAttachment(Attachment attachment)
    {
        if (attachments==null) {attachments=new ArrayList<>();}
        attachments.add(attachment);
        attachment.setTheatre(this);
    }

    public Long getId() {return this.id;}
    public String getName() {return this.name;}
    public int getPlaces() {return this.places;}
    private LocalDate getDate() {return this.date;}
    public List<Attachment> getAttachments() {return this.attachments;}

    public void setId(Long id) {this.id=id;}
    public void setName(String name) {this.name=name;}
    public void setPlaces(int places) {this.places=places;}
    public void setDate(LocalDate date) {this.date=date;}
    public void setAttachments(List<Attachment> attachments) {this.attachments=attachments;}
}
