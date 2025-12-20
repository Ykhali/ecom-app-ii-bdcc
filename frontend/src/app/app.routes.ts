import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { BillsComponent } from './bills/bills.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bills', component: BillsComponent },
    { path: 'bill-details/:id', component: BillDetailsComponent },
];
