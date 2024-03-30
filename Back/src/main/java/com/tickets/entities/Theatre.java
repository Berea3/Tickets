package com.tickets.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Theatre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String name;

    //@JsonIgnore
    @OneToMany(mappedBy = "theatre",
                cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Attachment> attachments;

    public Theatre() {}

    public Theatre(Long id, String name)
    {
        this.id=id;
        this.name=name;
    }

    public void addAttachment(Attachment attachment)
    {
        if (attachments==null) {attachments=new ArrayList<>();}
        attachments.add(attachment);
        attachment.setTheatre(this);
    }

    public Long getId() {return this.id;}
    public String getName() {return this.name;}

    public void setId(Long id) {this.id=id;}
    public void setName(String name) {this.name=name;}
}
