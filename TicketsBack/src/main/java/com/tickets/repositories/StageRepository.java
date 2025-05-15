package com.tickets.repositories;

import com.tickets.entities.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StageRepository extends JpaRepository<Stage,String> {
}
