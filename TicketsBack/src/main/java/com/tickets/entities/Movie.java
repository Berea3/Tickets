package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="movies")
public class Movie {

    @Id
    private String id;

    private String title;
    private String description;
    private String genre;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
}
