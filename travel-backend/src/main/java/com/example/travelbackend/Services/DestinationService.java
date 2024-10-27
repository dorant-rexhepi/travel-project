package com.example.travelbackend.Services;

import com.example.travelbackend.Models.Destination;
import com.example.travelbackend.Repositories.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository repository;

    public List<Destination> getAllDestinations() {
        return repository.findAll();
    }

    public Destination saveDestination(Destination destination) {
        return repository.save(destination);
    }
}
