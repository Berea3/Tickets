package com.tickets.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.security.entities.User;
import jakarta.persistence.*;

@Entity
@Table(name="seatings")
public class Seating {

    @Id
    @Column(name="id")
    private String id;

    private String name;

    private int rowCount;
    private int columnCount;
    private boolean zigzag;
    private boolean free;

    @Column(length=10000)
    private String matrix;     // yellow orange red green brown blue    A B C D E F   S-space     T-taken    black-taken  gray-reserved

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public Seating() {
    }

    public Seating(String id, String name, int rowCount, int columnCount, boolean zigzag, boolean free, String matrix, User user) {
        this.name=name;
        this.id = id;
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.zigzag = zigzag;
        this.free=free;
        this.matrix = matrix;
        this.user=user;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getRowCount() {
        return rowCount;
    }

    public int getColumnCount() {
        return columnCount;
    }

    public boolean getZigzag() {
        return zigzag;
    }

    public boolean getFree(){return free;}

    public String getMatrix() {
        return matrix;
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

    public void setRowCount(int rowCount) {
        this.rowCount = rowCount;
    }

    public void setColumnCount(int columnCount) {
        this.columnCount = columnCount;
    }

    public void setZigzag(boolean zigzag) {
        this.zigzag = zigzag;
    }

    public void setFree(boolean free){this.free=free;}

    public void setMatrix(String matrix) {
        this.matrix = matrix;
    }

    public void setUser(User user) {
        this.user = user;
    }


    @Override
    public String toString() {
        return "Seating{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", rowCount=" + rowCount +
                ", columnCount=" + columnCount +
                '}';
    }
}
