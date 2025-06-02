package com.tickets.repositories.tickets;

import com.tickets.entities.tickets.MovieTicket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieTicketRepository extends JpaRepository<MovieTicket,String> {
}
