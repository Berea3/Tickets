package com.tickets.repositories;

import com.tickets.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheaterRepository extends JpaRepository<Theater,String> {
}
