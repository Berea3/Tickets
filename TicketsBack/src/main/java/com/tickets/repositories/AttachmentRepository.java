package com.tickets.repositories;

import com.tickets.entities.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttachmentRepository extends JpaRepository<Attachment,String> {
}
