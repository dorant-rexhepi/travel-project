package com.example.travelbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class TravelBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelBackendApplication.class, args);
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to the Travel App!";
    }

}
