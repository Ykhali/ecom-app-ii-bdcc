package com.example.khalidyoussef.billingservice.repository;

import com.example.khalidyoussef.billingservice.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {

}
