package ma.emsi.khalidyoussef.orderservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.emsi.khalidyoussef.orderservice.enums.OrderStatus;
import ma.emsi.khalidyoussef.orderservice.model.Customer;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders") // "order" is often a reserved keyword
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private OrderStatus status;
    private Long customerId;
    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;
    @Transient
    private Customer customer;
}
