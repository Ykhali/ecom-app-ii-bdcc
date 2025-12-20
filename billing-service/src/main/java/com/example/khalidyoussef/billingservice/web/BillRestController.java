package com.example.khalidyoussef.billingservice.web;

import com.example.khalidyoussef.billingservice.entities.Bill;
import com.example.khalidyoussef.billingservice.feign.CustomerRestClient;
import com.example.khalidyoussef.billingservice.feign.ProductRestClient;
import com.example.khalidyoussef.billingservice.repository.BillRepository;
import com.example.khalidyoussef.billingservice.repository.ProductItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping(path = "/bills/{id}")
    public Bill getBill(@PathVariable Long id) {
        Bill bill = billRepository.findById(id).get();
        bill.setCustomer(customerRestClient.getCustomerById(bill.getCustomerId()));
        bill.getProductItems().forEach(productItem -> {
            productItem.setProduct(productRestClient.getProductById(productItem.getProductId()));

        });
        return bill;
    }

    @GetMapping(path = "/bills/customer/{customerId}")
    public List<Bill> getBillsByCustomer(@PathVariable Long customerId) {
        return billRepository.findByCustomerId(customerId);
    }
}
