package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="theaters")
public class Theater {

    @Id
    @Column(name="id")
    private String id;

    private String name;
    private int places;
    private LocalDate date;

    //@JsonIgnore
    @OneToMany(mappedBy = "theater",
                cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Attachment> attachments;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public Theater() {}

    public Theater(String id, String name, int places, LocalDate date, List<Attachment> attachments, User user) {
        this.id = id;
        this.name = name;
        this.places = places;
        this.date = date;
        this.attachments = attachments;
        this.user=user;
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

    public String getId() {return this.id;}
    public String getName() {return this.name;}
    public int getPlaces() {return this.places;}
    private LocalDate getDate() {return this.date;}
    public List<Attachment> getAttachments() {return this.attachments;}
    public User getUser() {return user;}

    public void setId(String id) {this.id=id;}
    public void setName(String name) {this.name=name;}
    public void setPlaces(int places) {this.places=places;}
    public void setDate(LocalDate date) {this.date=date;}
    public void setAttachments(List<Attachment> attachments) {this.attachments=attachments;}
    public void setUser(User user) {this.user = user;}
}
