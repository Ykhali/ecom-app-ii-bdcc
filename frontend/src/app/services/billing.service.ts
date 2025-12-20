import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private host = "http://localhost:8888/api/bills";

  constructor(private http: HttpClient) { }

  public getBillsByCustomer(customerId: number): Observable<any> {
    return this.http.get(this.host + "/customer/" + customerId);
  }

  public getBillById(id: number): Observable<any> {
    return this.http.get(this.host + "/" + id);
  }
}
