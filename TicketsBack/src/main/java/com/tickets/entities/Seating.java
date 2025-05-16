package com.tickets.entities;

import jakarta.persistence.*;

@Entity
@Table(name="stages")
public class Seating {

    @Id
    @Column(name="id")
    private String id;

    private int rowCount;
    private int columnCount;
    private boolean zigzag;

    private String matrix;     // yellow orange red green brown blue    A B C D E F   S-space     G-taken

    public Seating() {
    }

    public Seating(String id, int rowCount, int columnCount, boolean zigzag, String matrix) {
        this.id = id;
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.zigzag = zigzag;
        this.matrix = matrix;
    }

    public String getId() {
        return id;
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
