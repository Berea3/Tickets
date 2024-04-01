package com.tickets.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Theatre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String name;
    private int places;

    //@JsonIgnore
    @OneToMany(mappedBy = "theatre",
                cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Attachment> attachments;

    public Theatre() {}

    public Theatre(Long id, String name, int places)
    {
        this.id=id;
        this.name=name;
        this.places=places;
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
    public List<Attachment> getAttachments() {return this.attachments;}

    public void setId(Long id) {this.id=id;}
    public void setName(String name) {this.name=name;}
    public void setPlaces(int places) {this.places=places;}
    public void setAttachments(List<Attachment> attachments) {this.attachments=attachments;}
}
