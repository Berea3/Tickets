package com.tickets.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Attachment;
import com.tickets.entities.Theatre;
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
    private List<Theatre> theatres;

    public User()
    {

    }

    public User(String id, String email, String password, String roles, List<Theatre> theatres)
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.theatres=theatres;
    }

    public void addTheatre(Theatre theatre)
    {
        if (this.theatres==null) {this.theatres=new ArrayList<>();}
        this.theatres.add(theatre);
        theatre.setUser(this);
    }

    public String getId() {return this.id;}
    public String getPassword() {return this.password;}
    public String getEmail() {return this.email;}
    public String getRoles() {return this.roles;}
    public List<Theatre> getTheatres() {return theatres;}

    public void setId(String id) {this.id=id;}
    public void setPassword(String password) {this.password=password;}
    public void setEmail(String email) {this.email=email;}
    public void setRoles(String roles) {this.roles=roles;}
    public void setTheatres(List<Theatre> theatres) {this.theatres = theatres;}

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
