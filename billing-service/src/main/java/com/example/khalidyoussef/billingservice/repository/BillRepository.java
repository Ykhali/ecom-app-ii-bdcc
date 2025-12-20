package com.example.khalidyoussef.billingservice.repository;

import com.example.khalidyoussef.billingservice.entities.Bill;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
    List<Bill> findByCustomerId(Long customerId);
}
