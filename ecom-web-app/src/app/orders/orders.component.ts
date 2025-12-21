import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe({
        next: (data) => {
          this.orders = data;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/" + o.id);
  }
}
