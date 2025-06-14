package com.tickets.repositories.tickets;

import com.tickets.entities.tickets.SportTicket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SportTicketRepository extends JpaRepository<SportTicket, String> {
}
