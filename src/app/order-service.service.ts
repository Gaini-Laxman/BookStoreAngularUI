// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8082/api/orders';  // Spring Boot API

  constructor(private http: HttpClient) {}

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderData);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
