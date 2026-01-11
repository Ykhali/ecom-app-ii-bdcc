package ma.emsi.khalidyoussef.orderservice.web;

import ma.emsi.khalidyoussef.orderservice.entities.Order;
import ma.emsi.khalidyoussef.orderservice.model.Customer;
import ma.emsi.khalidyoussef.orderservice.model.Product;
import ma.emsi.khalidyoussef.orderservice.repository.OrderRepository;
import ma.emsi.khalidyoussef.orderservice.repository.OrderItemRepository;
import ma.emsi.khalidyoussef.orderservice.services.CustomerRestClient;
import ma.emsi.khalidyoussef.orderservice.services.InventoryRestClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderRestController {
    private OrderRepository orderRepository;
    private OrderItemRepository orderItemRepository;
    private CustomerRestClient customerRestClient;
    private InventoryRestClient inventoryRestClient;

    public OrderRestController(OrderRepository orderRepository, OrderItemRepository orderItemRepository,
            CustomerRestClient customerRestClient, InventoryRestClient inventoryRestClient) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.customerRestClient = customerRestClient;
        this.inventoryRestClient = inventoryRestClient;
    }

    @GetMapping("/fullOrder/{id}")
    public Order getOrder(@PathVariable Long id) {
        Order order = orderRepository.findById(id).get();
        Customer customer = customerRestClient.findCustomerById(order.getCustomerId());
        order.setCustomer(customer);
        order.getOrderItems().forEach(pi -> {
            Product product = inventoryRestClient.findProductById(pi.getProductId());
            pi.setProduct(product);
        });
        return order;
    }
}
