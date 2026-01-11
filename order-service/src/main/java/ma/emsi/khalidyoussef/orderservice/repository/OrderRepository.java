package ma.emsi.khalidyoussef.orderservice.repository;

import ma.emsi.khalidyoussef.orderservice.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
