import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
userAddress: any;

  constructor() {}

  ngOnInit() {
    // You can fetch the order information here (e.g., user address, cart details, etc.)
    const userAddress = JSON.parse(localStorage.getItem('userAddress') || '{}');
    console.log('User address:', userAddress);
  }
}
