package com.tickets.entities.layouts;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.tickets.TheaterTicket;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="stadiums")
public class Stadium {

    @Id
    private String id;

    private String name;
    private boolean free;

//    @JsonIgnore
    @OneToMany(mappedBy = "stadium",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<StadiumSection> stadiumSections=new ArrayList<>();

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public Stadium() {}

    public Stadium(String id, String name, boolean free, List<StadiumSection> stadiumSections, User user) {
        this.id = id;
        this.name = name;
        this.free = free;
        this.stadiumSections = stadiumSections != null ? stadiumSections : new ArrayList<>();
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isFree() {
        return free;
    }

    public List<StadiumSection> getStadiumSections() {
        return stadiumSections;
    }

    public User getUser() {
        return user;
    }



    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFree(boolean free) {
        this.free = free;
    }

    public void setStadiumSections(List<StadiumSection> stadiumSections) {
        this.stadiumSections = stadiumSections;
    }

    public void setUser(User user) {
        this.user = user;
    }


    @Override
    public String toString() {
        return "Stadium{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", free=" + free +
                ", stadiumSections=" + stadiumSections +
                ", user=" + user +
                '}';
    }
}
