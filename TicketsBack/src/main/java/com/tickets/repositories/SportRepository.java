package com.tickets.repositories;

import com.tickets.entities.Sport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SportRepository extends JpaRepository<Sport, String> {
}
