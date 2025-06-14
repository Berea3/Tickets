package com.tickets.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.*;
import com.tickets.entities.layouts.Seating;
import com.tickets.entities.layouts.Stadium;
import com.tickets.entities.tickets.ConcertTicket;
import com.tickets.entities.tickets.MovieTicket;
import com.tickets.entities.tickets.SportTicket;
import com.tickets.entities.tickets.TheaterTicket;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="id")
    private String id;

    private String email;
    private String password;

    private String roles;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Theater> theaters;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Concert> concerts;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Movie> movies;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Sport> sports;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Seating> seatings;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<TheaterTicket> theaterTickets;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<ConcertTicket> concertTickets;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<MovieTicket> movieTickets;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<SportTicket> sportTickets;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Stadium> stadiums;

    public User(){}

    public User(String id, String email, String password, String roles, List<Theater> theaters, List<Concert> concerts, List<Movie> movies, List<Sport> sports, List<Seating> seatings, List<TheaterTicket> theaterTickets, List<ConcertTicket> concertTickets, List<MovieTicket> movieTickets, List<SportTicket> sportTickets, List<Stadium> stadiums) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.theaters = theaters;
        this.concerts = concerts;
        this.movies = movies;
        this.sports = sports;
        this.seatings = seatings;
        this.theaterTickets = theaterTickets;
        this.concertTickets = concertTickets;
        this.movieTickets = movieTickets;
        this.sportTickets = sportTickets;
        this.stadiums = stadiums;
    }

    public void addTheatre(Theater theater){
        if (this.theaters==null) {this.theaters=new ArrayList<>();}
        this.theaters.add(theater);
        theater.setUser(this);
    }

    public void addConcert(Concert concert){
        if (this.concerts==null) {this.concerts=new ArrayList<>();}
        this.concerts.add(concert);
        concert.setUser(this);
    }

    public void addMovie(Movie movie){
        if (this.movies==null) {this.movies=new ArrayList<>();}
        this.movies.add(movie);
        movie.setUser(this);
    }

    public void addSport(Sport sport){
        if (this.sports==null) {this.sports=new ArrayList<>();}
        this.sports.add(sport);
        sport.setUser(this);
    }

    public void addSeating(Seating seating){
        if (this.seatings==null) {this.seatings=new ArrayList<>();}
        this.seatings.add(seating);
        seating.setUser(this);
    }

    public void addTheaterTicket(TheaterTicket theaterTicket){
        if (this.theaterTickets==null) {this.theaterTickets=new ArrayList<>();}
        this.theaterTickets.add(theaterTicket);
        theaterTicket.setUser(this);
    }

    public void addConcertTicket(ConcertTicket concertTicket){
        if (this.concertTickets==null) {this.concertTickets=new ArrayList<>();}
        this.concertTickets.add(concertTicket);
        concertTicket.setUser(this);
    }

    public void addMovieTicket(MovieTicket movieTicket){
        if (this.movieTickets==null) {this.movieTickets=new ArrayList<>();}
        this.movieTickets.add(movieTicket);
        movieTicket.setUser(this);
    }

    public void addSportTicket(SportTicket sportTicket){
        if (this.sportTickets==null) {this.sportTickets=new ArrayList<>();}
        this.sportTickets.add(sportTicket);
        sportTicket.setUser(this);
    }

    public void addStadium(Stadium stadium){
        if (this.stadiums==null) {this.stadiums=new ArrayList<>();}
        this.stadiums.add(stadium);
    }

    public String getId() {return this.id;}
    public String getPassword() {return this.password;}
    public String getEmail() {return this.email;}
    public String getRoles() {return this.roles;}
    public List<Theater> getTheaters() {return theaters;}

    public List<Concert> getConcerts() {
        return concerts;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public List<Sport> getSports() {
        return sports;
    }

    public List<Seating> getSeatings() {
        return seatings;
    }

    public List<TheaterTicket> getTheaterTickets() {
        return theaterTickets;
    }

    public List<ConcertTicket> getConcertTickets() {
        return concertTickets;
    }

    public List<MovieTicket> getMovieTickets() {
        return movieTickets;
    }

    public List<SportTicket> getSportTickets() {
        return sportTickets;
    }

    public List<Stadium> getStadiums() {
        return stadiums;
    }

    public void setId(String id) {this.id=id;}
    public void setPassword(String password) {this.password=password;}
    public void setEmail(String email) {this.email=email;}
    public void setRoles(String roles) {this.roles=roles;}
    public void setTheaters(List<Theater> theaters) {this.theaters = theaters;}

    public void setConcerts(List<Concert> concerts) {
        this.concerts = concerts;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public void setSports(List<Sport> sports) {
        this.sports = sports;
    }

    public void setSeatings(List<Seating> seatings) {
        this.seatings = seatings;
    }

    public void setTheaterTickets(List<TheaterTicket> theaterTickets) {
        this.theaterTickets = theaterTickets;
    }

    public void setConcertTickets(List<ConcertTicket> concertTickets) {
        this.concertTickets = concertTickets;
    }

    public void setMovieTickets(List<MovieTicket> movieTickets) {
        this.movieTickets = movieTickets;
    }

    public void setSportTickets(List<SportTicket> sportTickets) {
        this.sportTickets = sportTickets;
    }

    public void setStadiums(List<Stadium> stadiums) {
        this.stadiums = stadiums;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
//                ", theaters=" + theaters +
//                ", concerts=" + concerts +
//                ", movies=" + movies +
//                ", sports=" + sports +
//                ", seatings=" + seatings +
//                ", theaterTickets=" + theaterTickets +
                '}';
    }
}
