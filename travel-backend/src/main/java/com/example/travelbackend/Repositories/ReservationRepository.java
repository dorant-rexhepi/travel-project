package com.example.travelbackend.Repositories;


import com.example.travelbackend.Models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
