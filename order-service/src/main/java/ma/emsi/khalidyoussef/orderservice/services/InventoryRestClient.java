package ma.emsi.khalidyoussef.orderservice.services;

import ma.emsi.khalidyoussef.orderservice.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "inventory-service")
public interface InventoryRestClient {
    @GetMapping("/products/{id}")
    Product findProductById(@PathVariable("id") String id);

    @GetMapping("/products")
    List<Product> allProducts();
}
