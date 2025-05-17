package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name="attachments")
public class Attachment {

    @Id
    @Column(name="id")
    private String id;

//    @JsonIgnore
//    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
//    @JoinColumn(name="theater_id", referencedColumnName = "id")
//    private Theater theater;

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

    public Attachment(String id, Concert concert, String name, String type, byte[] file)
    {
        this.id = id;
        this.concert = concert;
        this.name = name;
        this.type = type;
        this.file = file;
    }

    public String getId() {return id;}
    public Concert getConcert() {return concert;}
    public String getName() {return name;}
    public String getType() {return type;}
    public byte[] getFile() {return file;}

    public void setId(String id) {this.id = id;}
    public void setConcert(Concert concert) {this.concert = concert;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setFile(byte[] file) {this.file = file;}
}
