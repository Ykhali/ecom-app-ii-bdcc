package com.example.khalidyoussef.billingservice.web;

import com.example.khalidyoussef.billingservice.entities.Bill;
import com.example.khalidyoussef.billingservice.feign.CustomerRestClient;
import com.example.khalidyoussef.billingservice.feign.ProductRestClient;
import com.example.khalidyoussef.billingservice.repository.BillRepository;
import com.example.khalidyoussef.billingservice.repository.ProductItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BillRestController {
    @Autowired
    private BillRepository billRepository;
    @Autowired
    private ProductItemRepository productItemRepository;
    @Autowired
    private CustomerRestClient customerRestClient;
    @Autowired
    private ProductRestClient productRestClient;

    public Bill getBill(Long id){
        Bill bill = billRepository.findById(id).get();
        return bill;
    }
}
