package com.tickets.entities.layouts;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tickets.entities.Theater;
import jakarta.persistence.*;

@Entity
@Table(name="stadium_sections")
public class StadiumSection {

    @Id
    private String id;

    private int rowCount;
    private int columnCount;

    @Column(length=10000)
    private String matrix;     // yellow orange red green brown blue    A B C D E F   S-space     T-taken    black-taken  gray-reserved

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="stadium_id", referencedColumnName = "id")
    private Stadium stadium;

    public StadiumSection() {}

    public StadiumSection(String id, int rowCount, int columnCount, String matrix, Stadium stadium) {
        this.id = id;
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.matrix = matrix;
        this.stadium = stadium;
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

    public String getMatrix() {
        return matrix;
    }

    public Stadium getStadium() {
        return stadium;
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

    public void setMatrix(String matrix) {
        this.matrix = matrix;
    }

    public void setStadium(Stadium stadium) {
        this.stadium = stadium;
    }


    @Override
    public String toString() {
        return "StadiumSection{" +
                "id='" + id + '\'' +
                ", rowCount=" + rowCount +
                ", columnCount=" + columnCount +
                ", matrix='" + matrix + '\'' +
                '}';
    }
}
