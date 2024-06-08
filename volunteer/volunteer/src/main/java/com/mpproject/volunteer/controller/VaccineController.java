package com.mpproject.volunteer.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mpproject.volunteer.exception.UserNotFoundException;
import com.mpproject.volunteer.model.VaccineCamp;
import com.mpproject.volunteer.repository.VaccineCampRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VaccineController {
    @Autowired
    private VaccineCampRepository vaccineCampRepository;

    @PostMapping("/vaccineCamp")
    VaccineCamp newVaccineCamp(@RequestBody VaccineCamp newvaccineCamp) { return vaccineCampRepository.save(newvaccineCamp);}

    @GetMapping("/vaccineCamp")
    List<VaccineCamp> getAllVaccineCamps(){ return vaccineCampRepository.findAll();}

    @GetMapping("/vaccineCamp/{id}")
    VaccineCamp getVaccineCampById(@PathVariable Long id) {
        return vaccineCampRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/vaccineCamp/{id}")
    VaccineCamp updateVaccineCamp(@RequestBody VaccineCamp newUser, @PathVariable Long id) {
        return vaccineCampRepository.findById(id)
                .map(user -> {
                    user.setVaccine(newUser.getVaccine());
                    user.setVdate(newUser.getVdate());
                    user.setVtime(newUser.getVtime());
                    user.setVlocation(newUser.getVlocation());
                    return vaccineCampRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/vaccineCamp/{id}")
    String deleteVaccineCamp(@PathVariable Long id){
        if(!vaccineCampRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        vaccineCampRepository.deleteById(id);
        return  "Blood Donation Camp with id "+id+" has been deleted successfully.";
    }

}
