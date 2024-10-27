package com.example.travelbackend.Controllers;

import com.example.travelbackend.Models.Destination;
import com.example.travelbackend.Services.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "http://localhost:3000")
public class DestinationController {

    @Autowired
    private DestinationService service;

    @GetMapping("/")
    public String home() {
        return "Welcome to the Travel App API!";
    }


    @GetMapping
    public List<Destination> getAllDestinations() {
        return service.getAllDestinations();
    }

    @PostMapping
    public Destination createDestination(@RequestBody Destination destination) {
        return service.saveDestination(destination);
    }
}