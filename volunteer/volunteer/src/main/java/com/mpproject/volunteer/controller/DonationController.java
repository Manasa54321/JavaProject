package com.mpproject.volunteer.controller;

import com.mpproject.volunteer.model.Donate;
import com.mpproject.volunteer.model.User;
import com.mpproject.volunteer.repository.DonationRepository;
import com.mpproject.volunteer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/donations")
public class DonationController {

    @Autowired
    private DonationRepository donateRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Donate> getAllDonations() {
        return donateRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donate> getDonationById(@PathVariable Long id) {
        return donateRepository.findById(id)
                .map(donate -> ResponseEntity.ok().body(donate))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Donate> createDonation(@RequestBody Donate donate) {
        User user = userRepository.findById(donate.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        donate.setUser(user);
        Donate savedDonate = donateRepository.save(donate);
        return ResponseEntity.ok().body(savedDonate);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Donate> updateDonation(@PathVariable Long id, @RequestBody Donate donateDetails) {
        return donateRepository.findById(id)
                .map(donate -> {
                    donate.setAmount(donateDetails.getAmount());
                    donate.setDescription(donateDetails.getDescription());
                    donate.setDonationDate(donateDetails.getDonationDate());
                    donate.setUser(donateDetails.getUser());
                    Donate updatedDonate = donateRepository.save(donate);
                    return ResponseEntity.ok().body(updatedDonate);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDonation(@PathVariable Long id) {
        return donateRepository.findById(id)
                .map(donate -> {
                    donateRepository.delete(donate);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public List<Donate> getDonationsByUserId(@PathVariable Long userId) {
        return donateRepository.findByUserId(userId);
    }
}
