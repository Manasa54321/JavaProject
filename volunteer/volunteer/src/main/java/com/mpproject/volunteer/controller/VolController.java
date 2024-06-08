package com.mpproject.volunteer.controller;

import com.mpproject.volunteer.model.User;
import com.mpproject.volunteer.model.Volunteer;
import com.mpproject.volunteer.repository.UserRepository;
import com.mpproject.volunteer.repository.VolRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class VolController {

    @Autowired
    private VolRepository volRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/volunteer")
    Volunteer newVolunteer(@RequestBody Volunteer newVolunteer) {
        User user = newVolunteer.getUser();
        if (user != null && user.getId() == null) {
            userRepository.save(user);
        }
        return volRepository.save(newVolunteer);
    }

    @GetMapping("/volunteers")
    List<Volunteer> getAllVolunteers() {
        return volRepository.findAll();
    }
}
