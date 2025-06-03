package com.tickets.repositories;

import com.tickets.entities.layouts.Seating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatingRepository extends JpaRepository<Seating,String> {
    List<Seating> findAllByFree(boolean free);
}
