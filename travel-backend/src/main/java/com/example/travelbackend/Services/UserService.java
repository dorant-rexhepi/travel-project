package com.example.travelbackend.Services;

import com.example.travelbackend.Models.User;
import com.example.travelbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    public UserService() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // Metodë për regjistrimin e përdoruesit
    public void registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email already in use");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    // Kontrollon fjalëkalimin për login
    public boolean checkPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    // Gjen përdoruesin me email
    public Optional<User> findByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email));
    }

    // Kthen të gjithë përdoruesit
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Fshin përdoruesin sipas ID-së
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}