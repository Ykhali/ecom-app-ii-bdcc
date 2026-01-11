package ma.emsi.khalidyoussef.orderservice.repository;

import ma.emsi.khalidyoussef.orderservice.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
