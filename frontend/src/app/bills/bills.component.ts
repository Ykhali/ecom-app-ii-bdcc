import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BillingService } from '../services/billing.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit {
  bills: any;

  constructor(
    private billingService: BillingService,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const customer = this.customerService.currentCustomer.getValue();
    if (!customer) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.billingService.getBillsByCustomer(customer.id).subscribe({
      next: (data) => {
        this.bills = data;
      },
      error: (err) => { console.error(err); }
    });
  }

  viewDetails(bill: any) {
    this.router.navigateByUrl('/bill-details/' + bill.id);
  }
}
