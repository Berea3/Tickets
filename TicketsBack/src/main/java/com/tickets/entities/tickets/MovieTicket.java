package com.tickets.entities.tickets;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Movie;
import com.tickets.entities.Theater;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="movie_tickets")
public class MovieTicket {

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
    @JoinColumn(name="movie_id", referencedColumnName = "id")
    private Movie movie;


    public MovieTicket() {
    }


    public MovieTicket(String id, int row, int position, User user, Movie movie) {
        this.id = id;
        this.row = row;
        this.position = position;
        this.user = user;
        this.movie = movie;
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

    public Movie getMovie() {
        return movie;
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

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
