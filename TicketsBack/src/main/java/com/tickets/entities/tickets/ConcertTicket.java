package com.tickets.entities.tickets;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Concert;
import com.tickets.entities.Theater;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="concert_tickets")
public class ConcertTicket {

    @Id
    @Column(name="id")
    private String id;

    private int price;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="concert_id", referencedColumnName = "id")
    private Concert concert;

    public ConcertTicket() {
    }

    public ConcertTicket(String id, int price, User user, Concert concert) {
        this.id = id;
        this.price = price;
        this.user = user;
        this.concert = concert;
    }


    public String getId() {
        return id;
    }

    public int getPrice() {
        return price;
    }

    public User getUser() {
        return user;
    }

    public Concert getConcert() {
        return concert;
    }



    public void setId(String id) {
        this.id = id;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }
}
