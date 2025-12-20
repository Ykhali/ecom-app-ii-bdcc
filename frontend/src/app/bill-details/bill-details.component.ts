import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'app-bill-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-details.component.html',
  styleUrl: './bill-details.component.css'
})
export class BillDetailsComponent implements OnInit {
  bill: any;

  constructor(private billingService: BillingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.billingService.getBillById(id).subscribe({
      next: (data) => {
        this.bill = data;
      },
      error: (err) => { console.error(err); }
    });
  }
}
