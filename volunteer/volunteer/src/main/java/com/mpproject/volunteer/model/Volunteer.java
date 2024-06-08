package com.mpproject.volunteer.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

import java.util.List;

@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> skills;

    @ElementCollection
    private List<String> prefTasks;

    @ElementCollection
    private List<String> prefDays;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<String> getPrefTasks() {
        return prefTasks;
    }

    public void setPrefTasks(List<String> prefTasks) {
        this.prefTasks = prefTasks;
    }

    public List<String> getPrefDays() {
        return prefDays;
    }

    public void setPrefDays(List<String> prefDays) {
        this.prefDays = prefDays;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
