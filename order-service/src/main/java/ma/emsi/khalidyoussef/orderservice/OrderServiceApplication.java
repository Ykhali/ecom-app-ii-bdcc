package ma.emsi.khalidyoussef.orderservice;

import ma.emsi.khalidyoussef.orderservice.entities.Order;
import ma.emsi.khalidyoussef.orderservice.entities.OrderItem;
import ma.emsi.khalidyoussef.orderservice.enums.OrderStatus;
import ma.emsi.khalidyoussef.orderservice.repository.OrderRepository;
import ma.emsi.khalidyoussef.orderservice.repository.OrderItemRepository;
import ma.emsi.khalidyoussef.orderservice.services.CustomerRestClient;
import ma.emsi.khalidyoussef.orderservice.services.InventoryRestClient;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
@EnableFeignClients
public class OrderServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(OrderRepository orderRepository,
            OrderItemRepository orderItemRepository,
            CustomerRestClient customerRestClient,
            InventoryRestClient inventoryRestClient) {
        return args -> {
            // Seed data logic can go here if needed
        };
    }
}
