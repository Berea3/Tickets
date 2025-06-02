package com.tickets.entities.tickets;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Theater;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="theater_tickets")
public class TheaterTicket {

    @Id
    @Column(name="id")
    private String id;

    private int row;
    private int position;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="theater_id", referencedColumnName = "id")
    private Theater theater;

    public TheaterTicket() {
    }

    public TheaterTicket(String id, int row, int position, User user, Theater theater) {
        this.id = id;
        this.row = row;
        this.position = position;
        this.user = user;
        this.theater = theater;
    }

    public String getId() {
        return id;
    }

    public int getRow() {
        return row;
    }

    public int getPosition() {
        return position;
    }

    public User getUser() {
        return user;
    }

    public Theater getTheater() {
        return theater;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setTheater(Theater theater) {
        this.theater = theater;
    }
}
