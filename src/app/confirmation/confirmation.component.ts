import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userAddress: any;
   totalAmount: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Load the user's address and total amount from localStorage
    this.userAddress = JSON.parse(localStorage.getItem('userAddress') || '{}');
    this.totalAmount = JSON.parse(localStorage.getItem('orderTotalAmount') || '0');

    console.log('User Address:', this.userAddress);
    console.log('Total Amount:', this.totalAmount);
  }
}
