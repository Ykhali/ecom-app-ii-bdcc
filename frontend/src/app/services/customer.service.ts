import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private host = "http://localhost:8888/customer-service/api/customers";
  public currentCustomer: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    // Try to load from local storage
    const stored = localStorage.getItem('customer');
    if (stored) {
      this.currentCustomer.next(JSON.parse(stored));
    }
  }

  public login(email: string): Observable<any> {
    return this.http.get(this.host + "/search/findByEmail?email=" + email);
  }

  public register(customer: any): Observable<any> {
    return this.http.post(this.host, customer);
  }

  public setCustomer(customer: any) {
    this.currentCustomer.next(customer);
    localStorage.setItem('customer', JSON.stringify(customer));
  }
}
