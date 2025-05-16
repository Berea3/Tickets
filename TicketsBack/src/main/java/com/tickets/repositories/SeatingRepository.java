package com.tickets.repositories;

import com.tickets.entities.Seating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeatingRepository extends JpaRepository<Seating,String> {
}
