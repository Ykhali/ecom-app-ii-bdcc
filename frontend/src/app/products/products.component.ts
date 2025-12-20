import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getProducts().subscribe({
      next: (data) => {
        this.products = data._embedded.products;
      },
      error: (err) => { console.error(err); }
    });
  }
}
