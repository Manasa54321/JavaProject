package com.mpproject.volunteer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class VaccineCamp {
    @Id
    @GeneratedValue
    private Long id;
    private String vaccine;
    private Date vdate;

    private String vtime;
    private String vlocation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVaccine() {
        return vaccine;
    }

    public void setVaccine(String vaccine) {
        this.vaccine = vaccine;
    }

    public Date getVdate() {
        return vdate;
    }

    public void setVdate(Date vdate) {
        this.vdate = vdate;
    }

    public String getVtime() {
        return vtime;
    }

    public void setVtime(String vtime) {
        this.vtime = vtime;
    }

    public String getVlocation() {
        return vlocation;
    }

    public void setVlocation(String vlocation) {
        this.vlocation = vlocation;
    }
}
