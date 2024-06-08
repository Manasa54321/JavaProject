package com.mpproject.volunteer.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.mpproject.volunteer.model.User;

public interface UserRepository extends JpaRepository <User,Long> {
}
