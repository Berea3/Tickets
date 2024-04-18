package com.tickets.repositories;

import com.tickets.entities.Concert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConcertRepository extends JpaRepository<Concert,String> {
    @Query(value="select concert.id from Concert concert")
    List<String> findAllIds();
}
