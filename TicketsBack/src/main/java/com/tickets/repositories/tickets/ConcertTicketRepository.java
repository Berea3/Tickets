package com.tickets.repositories.tickets;

import com.tickets.entities.tickets.ConcertTicket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConcertTicketRepository extends JpaRepository<ConcertTicket, String> {
}
