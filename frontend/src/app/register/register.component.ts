import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  customer = { name: '', email: '' };

  constructor(private customerService: CustomerService, private router: Router) { }

  register() {
    this.customerService.register(this.customer).subscribe({
      next: (data) => {
        alert("Registration successful! Please login.");
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
