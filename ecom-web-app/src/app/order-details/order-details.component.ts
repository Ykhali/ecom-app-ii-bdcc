import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-order-details',
    standalone: false,
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
    orderId!: number;
    orderDetails: any;
    constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) {
        this.orderId = this.route.snapshot.params['orderId'];
    }

    ngOnInit(): void {
        this.orderService.getOrderDetails(this.orderId).subscribe({
            next: (data) => {
                this.orderDetails = data;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    getTotal(orderDetails: any): number {
        let total = 0;
        if (orderDetails && orderDetails.orderItems) {
            for (let item of orderDetails.orderItems) {
                total += item.price * item.quantity;
            }
        }
        return total;
    }

}
