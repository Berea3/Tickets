package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.tickets.ConcertTicket;
import com.tickets.entities.tickets.TheaterTicket;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name="concerts")
public class Concert {
    @Id
    private String id;

    private String name;
    private String description;
    private LocalDate date;
    private LocalTime time;
    private int seats;
    private int availableSeats;
    private int price;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "poster_id", referencedColumnName = "id")
    private Attachment poster;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "concert",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<ConcertTicket> concertTickets;

    public Concert() {}

    public Concert(String id, String name, String description, LocalDate date, LocalTime time, int seats, int availableSeats, int price, Attachment poster, User user, List<ConcertTicket> concertTickets) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
        this.seats = seats;
        this.availableSeats = availableSeats;
        this.price = price;
        this.poster = poster;
        this.user = user;
        this.concertTickets = concertTickets;
    }

    public String getId() {return id;}
    public String getName() {return name;}
    public String getDescription() {return description;}
    public LocalDate getDate() {return date;}
    public LocalTime getTime() {return time;}
    public int getSeats() {return seats;}
    public int getAvailableSeats() {return availableSeats;}
    public int getPrice() {return price;}
    public Attachment getPoster() {return poster;}
    public User getUser() {return user;}

    public List<ConcertTicket> getConcertTickets() {
        return concertTickets;
    }

    public void setId(String id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setDescription(String description) {this.description = description;}
    public void setDate(LocalDate date) {this.date = date;}
    public void setTime(LocalTime time) {this.time = time;}
    public void setSeats(int seats) {this.seats = seats;}
    public void setAvailableSeats(int availableSeats) {this.availableSeats = availableSeats;}
    public void setPrice(int price) {this.price = price;}
    public void setPoster(Attachment poster) {this.poster = poster;}
    public void setUser(User user) {this.user = user;}

    public void setConcertTickets(List<ConcertTicket> concertTickets) {
        this.concertTickets = concertTickets;
    }
}
