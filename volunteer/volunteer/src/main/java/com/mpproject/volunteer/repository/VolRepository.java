package com.mpproject.volunteer.repository;

import com.mpproject.volunteer.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VolRepository extends JpaRepository<Volunteer, Long> {
}
