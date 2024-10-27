package com.example.travelbackend.Repositories;

import com.example.travelbackend.Models.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Long> {
}
