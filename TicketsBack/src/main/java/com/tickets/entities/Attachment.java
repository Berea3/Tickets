package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name="attachments")
public class Attachment {

    @Id
    @Column(name="id")
    private String id;

    private String name;
    private String type;

    @JsonIgnore
    @Column(name="file", length = 1000000000)
    private byte[] file;

    public Attachment () {}

    public Attachment(String id, String name, String type, byte[] file)
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.file = file;
    }

    public String getId() {return id;}
    public String getName() {return name;}
    public String getType() {return type;}
    public byte[] getFile() {return file;}

    public void setId(String id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setType(String type) {this.type = type;}
    public void setFile(byte[] file) {this.file = file;}
}
