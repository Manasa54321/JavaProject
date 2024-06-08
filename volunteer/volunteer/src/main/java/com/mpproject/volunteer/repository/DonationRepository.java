package com.mpproject.volunteer.repository;

import com.mpproject.volunteer.model.Donate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donate, Long> {
    List<Donate> findByUserId(Long userId);
}
