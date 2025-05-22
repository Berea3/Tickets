package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="concerts")
public class Concert {
    @Id
    private String id;

    private String name;
    private String description;
    private LocalDate date;
    private LocalTime time;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "poster_id", referencedColumnName = "id")
    private Attachment poster;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "seating_id", referencedColumnName = "id")
    private Seating seating;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public Concert() {}

    public Concert(String id, String name, String description, LocalDate date, LocalTime time, Attachment poster, Seating seating, User user) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
        this.poster = poster;
        this.seating = seating;
        this.user = user;
    }

    public String getId() {return id;}
    public String getName() {return name;}
    public String getDescription() {return description;}
    public LocalDate getDate() {return date;}
    public LocalTime getTime() {return time;}
    public Attachment getPoster() {return poster;}
    public Seating getSeating() {return seating;}
    public User getUser() {return user;}

    public void setId(String id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setDescription(String description) {this.description = description;}
    public void setDate(LocalDate date) {this.date = date;}
    public void setTime(LocalTime time) {this.time = time;}
    public void setPoster(Attachment poster) {this.poster = poster;}
    public void setSeating(Seating seating) {this.seating = seating;}
    public void setUser(User user) {this.user = user;}
}
