package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Attachment {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="theatre_id", referencedColumnName = "id")
    private Theatre theatre;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="concert_id", referencedColumnName = "id")
    private Concert concert;

    private String name;
    private String type;

    @JsonIgnore
    @Column(name="file", length = 1000000000)
    private byte[] file;

    public Attachment () {}

    public Attachment(Long id, Theatre theatre, Concert concert, String name, String type, byte[] file)
    {
        this.id = id;
        this.theatre = theatre;
        this.concert = concert;
        this.name = name;
        this.type = type;
        this.file = file;
    }

    public Long getId() {return id;}
    public Theatre getTheatre() {return theatre;}
    public Concert getConcert() {return concert;}
    public String getName() {return name;}
    public String getType() {return type;}
    public byte[] getFile() {return file;}

    public void setId(Long id) {this.id = id;}
    public void setTheatre(Theatre theatre) {this.theatre = theatre;}
    public void setConcert(Concert concert) {this.concert = concert;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setFile(byte[] file) {this.file = file;}
}
