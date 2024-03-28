package com.tickets.repositories;

import com.tickets.entities.Theatre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheatreRepository extends JpaRepository<Theatre,Long> {
}
