package com.tickets.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Concert;
import com.tickets.entities.Movie;
import com.tickets.entities.Sport;
import com.tickets.entities.Theater;
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

    public User()
    {

    }

    public User(String id, String email, String password, String roles, List<Theater> theaters)
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.theaters = theaters;
    }

    public void addTheatre(Theater theater)
    {
        if (this.theaters ==null) {this.theaters =new ArrayList<>();}
        this.theaters.add(theater);
        theater.setUser(this);
    }

    public String getId() {return this.id;}
    public String getPassword() {return this.password;}
    public String getEmail() {return this.email;}
    public String getRoles() {return this.roles;}
    public List<Theater> getTheaters() {return theaters;}

    public void setId(String id) {this.id=id;}
    public void setPassword(String password) {this.password=password;}
    public void setEmail(String email) {this.email=email;}
    public void setRoles(String roles) {this.roles=roles;}
    public void setTheaters(List<Theater> theaters) {this.theaters = theaters;}

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
//                ", theatres=" + theatres +
                '}';
    }
}
