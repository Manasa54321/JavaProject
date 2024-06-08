package com.mpproject.volunteer.repository;

import com.mpproject.volunteer.model.BloodDonation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodDonationRepository extends JpaRepository<BloodDonation,Long> {
}
