package com.tickets.repositories.layout;

import com.tickets.entities.layouts.Seating;
import com.tickets.entities.layouts.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StadiumRepository extends JpaRepository<Stadium,String> {
    List<Stadium> findAllByFree(boolean free);
}
