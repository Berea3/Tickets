package com.tickets.entities.tickets;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Sport;
import com.tickets.entities.Theater;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="sport_tickets")
public class SportTicket {

    @Id
    private String id;

    private int row;
    private int position;
    private String stadiumSection;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="sport_id", referencedColumnName = "id")
    private Sport sport;

    public SportTicket() {}

    public SportTicket(String id, int row, int position, String stadiumSection, User user, Sport sport) {
        this.id = id;
        this.row = row;
        this.position = position;
        this.stadiumSection = stadiumSection;
        this.user = user;
        this.sport = sport;
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

    public String getStadiumSection() {
        return stadiumSection;
    }

    public User getUser() {
        return user;
    }

    public Sport getSport() {
        return sport;
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

    public void setStadiumSection(String stadiumSection) {
        this.stadiumSection = stadiumSection;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setSport(Sport sport) {
        this.sport = sport;
    }
}
