package com.example.khalidyoussef.billingservice.entities;

import com.example.khalidyoussef.billingservice.model.Product;
import jakarta.persistence.*;

@Entity
public class ProductItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productId;
    @ManyToOne
    private Bill bIll;
    private int quantity;
    private double unitPrice;
    @Transient private Product product;
}
