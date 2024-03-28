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

    private String name;
    private String type;

    @JsonIgnore
    @Column(name="file", length = 1000000000)
    private byte[] file;

    public Attachment () {}

    public Attachment (Long id, String name, String type, byte[] file)
    {
        this.id=id;
        this.name=name;
        this.type=type;
        this.file=file;
    }

    public Long getId() {return this.id;}
    public Theatre getTheatre() {return this.theatre;}
    public String getName() {return this.name;}
    public String getType() {return this.type;}
    public byte[] getFile() {return this.file;};

    public void setId(Long id) {this.id=id;}
    public void setTheatre(Theatre theatre) {this.theatre=theatre;}
    public void setName(String name) {this.name=name;}
    public void setType(String type) {this.type=type;}
    public void setFile(byte[] file) {this.file=file;}
}
