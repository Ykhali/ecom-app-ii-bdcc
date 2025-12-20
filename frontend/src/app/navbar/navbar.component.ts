import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  customer: any = null;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.currentCustomer.subscribe(c => {
      this.customer = c;
    });
  }

  logout() {
    this.customerService.setCustomer(null);
    this.router.navigateByUrl('/login');
  }
}
