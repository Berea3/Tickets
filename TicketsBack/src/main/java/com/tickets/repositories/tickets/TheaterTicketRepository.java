package com.tickets.repositories.tickets;

import com.tickets.entities.tickets.TheaterTicket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheaterTicketRepository extends JpaRepository<TheaterTicket, String> {
}
