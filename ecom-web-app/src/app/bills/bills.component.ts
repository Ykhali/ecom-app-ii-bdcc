import { Component, OnInit } from '@angular/core';
import { BillingService } from '../services/billing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-bills',
    standalone: false,
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
    bills: any;
    customerId!: number;

    constructor(private billingService: BillingService, private route: ActivatedRoute, private router: Router) {
        // Assuming we might pass customerId via query param or route param to list their bills
        // For now, let's try to get it from route or hardcode for testing if not present,
        // or maybe valid use case is navigating from Customers -> Bills
        this.customerId = this.route.snapshot.params['customerId'];
    }

    ngOnInit(): void {
        if (this.customerId) {
            this.billingService.getBillsByCustomer(this.customerId).subscribe({
                next: (data) => {
                    this.bills = data;
                },
                error: (err) => {
                    console.log(err);
                }
            });
        }
    }

    getBillDetails(b: any) {
        // Implement if we have a details view for bills, otherwise just show basic info
    }
}
