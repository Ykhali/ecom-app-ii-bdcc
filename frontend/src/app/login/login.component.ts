import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  error: string = "";

  constructor(private customerService: CustomerService, private router: Router) { }

  login() {
    this.customerService.login(this.email).subscribe({
      next: (data) => {
        this.customerService.setCustomer(data);
        this.router.navigateByUrl('/products');
      },
      error: (err) => {
        this.error = "Customer not found";
      }
    });
  }
}
