package com.example.travelbackend.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "<h1>Welcome to the Travel App!</h1>"
                + "<p>Access <a href='/api/destinations'>Destinations</a></p>"
                + "<p>Access <a href='/api/reservations'>Reservations</a></p>"
                + "<p>Login <a href='/api/users'>Users</a></p>";
    }
}