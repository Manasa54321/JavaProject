package com.mpproject.volunteer.controller;

import com.mpproject.volunteer.exception.UserNotFoundException;
import com.mpproject.volunteer.model.BloodDonation;
import com.mpproject.volunteer.repository.BloodDonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BloodDonationController {
    @Autowired
    private BloodDonationRepository bloodDonationRepository;

    @PostMapping("/bloodDonation")
    BloodDonation newBloodDonation(@RequestBody BloodDonation newbloodDonation) { return bloodDonationRepository.save(newbloodDonation);}

    @GetMapping("/bloodDonation")
    List<BloodDonation> getAllBloodDonations(){ return bloodDonationRepository.findAll();}

    @GetMapping("/bloodDonation/{id}")
    BloodDonation getBloodDonationById(@PathVariable Long id) {
        return bloodDonationRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/bloodDonation/{id}")
    BloodDonation updateBloodDonation(@RequestBody BloodDonation newUser, @PathVariable Long id) {
        return bloodDonationRepository.findById(id)
                .map(user -> {
                    user.setDate(newUser.getDate());
                    user.setTime(newUser.getTime());
                    user.setDay(newUser.getDay());
                    user.setVenue(newUser.getVenue());
                    return bloodDonationRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/bloodDonation/{id}")
    String deleteBloodDonation(@PathVariable Long id){
        if(!bloodDonationRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        bloodDonationRepository.deleteById(id);
        return  "Blood Donation Camp with id "+id+" has been deleted successfully.";
    }

}
