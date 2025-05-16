package com.tickets.entities;

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

    @Column(length=10000)
    private String matrix;     // yellow orange red green brown blue    A B C D E F   S-space     G-taken

    public Seating() {
    }

    public Seating(String id, String name, int rowCount, int columnCount, boolean zigzag, String matrix) {
        this.name=name;
        this.id = id;
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.zigzag = zigzag;
        this.matrix = matrix;
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

    public String getMatrix() {
        return matrix;
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

    public void setMatrix(String matrix) {
        this.matrix = matrix;
    }
}
