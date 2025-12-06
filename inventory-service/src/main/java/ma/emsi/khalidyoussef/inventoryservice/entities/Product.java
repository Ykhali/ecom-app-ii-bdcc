package ma.emsi.khalidyoussef.inventoryservice.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
@ToString
public class Product {
    @Id
    private String id;
    private String name;
    private double price;
    private int quantity;
}
