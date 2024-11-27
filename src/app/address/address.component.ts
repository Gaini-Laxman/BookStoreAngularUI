// address.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Book } from '../book'; // Assuming the Book interface is imported

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address = {
    name: '',
    address: '',
    city: '',
    zipcode: ''
  };

  cartItems: Book[] = [];
  totalAmount: number = 0;  // Initialize totalAmount

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    // Calculate the total amount on initialization
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.offerPrice, 0);
  }

  submitAddress() {
    const totalAmount = this.cartItems.reduce((sum, item) => sum + item.offerPrice, 0);
  
    // Create the order object
    const order = {
      address: this.address,
      cartItems: this.cartItems,
      totalAmount: totalAmount,
      orderDate: new Date().toLocaleString()
    };
  
    // Save order details to localStorage
    localStorage.setItem('userAddress', JSON.stringify(this.address));  // Save address separately
    localStorage.setItem('orderTotalAmount', JSON.stringify(totalAmount));  // Save total amount
  
    // Save the order to order history (if needed)
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  
    // Navigate to the confirmation page
    this.router.navigate(['/confirmation']);
  }
  
}
