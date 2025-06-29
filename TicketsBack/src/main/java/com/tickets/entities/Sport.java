package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.layouts.Stadium;
import com.tickets.entities.tickets.SportTicket;
import com.tickets.entities.tickets.TheaterTicket;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name="sports")
public class Sport {

    @Id
    private String id;

    private String name;
    @Column(length=10000)
    private String description;
    private String type;
    private LocalDate date;
    private LocalTime time;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "poster_id", referencedColumnName = "id")
    private Attachment poster;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "stadium_id", referencedColumnName = "id")
    private Stadium stadium;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "sport",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<SportTicket> sportTickets;

    public Sport() {}

    public Sport(String id, String name, String description, String type, LocalDate date, LocalTime time, Attachment poster, Stadium stadium, User user, List<SportTicket> sportTickets) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.date = date;
        this.time = time;
        this.poster = poster;
        this.stadium = stadium;
        this.user = user;
        this.sportTickets = sportTickets;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public LocalDate getDate() {
        return date;
    }

    public LocalTime getTime() {
        return time;
    }

    public Attachment getPoster() {
        return poster;
    }

    public Stadium getStadium() {
        return stadium;
    }

    public User getUser() {
        return user;
    }

    public List<SportTicket> getSportTickets() {
        return sportTickets;
    }



    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public void setPoster(Attachment poster) {
        this.poster = poster;
    }

    public void setStadium(Stadium stadium) {
        this.stadium = stadium;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setSportTickets(List<SportTicket> sportTickets) {
        this.sportTickets = sportTickets;
    }
}
