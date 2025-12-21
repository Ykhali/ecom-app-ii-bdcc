import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BillsComponent } from './bills/bills.component';

const routes: Routes = [
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "customers", component: CustomersComponent
  },
  {
    path: "orders", component: OrdersComponent
  },
  {
    path: "order-details/:orderId", component: OrderDetailsComponent
  },
  {
    path: "bills/:customerId", component: BillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
