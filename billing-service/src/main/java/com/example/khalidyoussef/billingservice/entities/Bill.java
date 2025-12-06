package com.example.khalidyoussef.billingservice.entities;

import com.example.khalidyoussef.billingservice.model.Customer;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter
@Setter @Builder
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date billingDate;
    private long customerId;
    @OneToMany(mappedBy = "bill")
    private List<ProductItem> productItems = new ArrayList<>();
    @Transient private Customer customer;
    /*Annotation @Transient indique à jpa que l'attribut
    customer existe dans la classe mais il n'est pas représenté
    dans la base de données*/

}
