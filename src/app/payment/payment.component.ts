import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  // Define cartItems with example data
  cartItems: any[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', offerPrice: 500, image: 'book1.jpg' },
    { id: 2, title: 'Book 2', author: 'Author 2', offerPrice: 600, image: 'book2.jpg' }
  ];

  // Define total price property
  totalPrice: number = 0;

  // Define paymentMethod property to bind to the radio button group
  paymentMethod: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Calculate the total price when the component is initialized
    this.calculateTotalPrice();
  }

  // Calculate the total price from cart items
  calculateTotalPrice() {
    // Check if cartItems has been initialized
    if (this.cartItems && this.cartItems.length > 0) {
      this.totalPrice = this.cartItems.reduce((total, item) => total + item.offerPrice, 0);
    }
  }

  // Method to handle removing items from the cart
  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.calculateTotalPrice(); // Recalculate total price after removal
  }

  // Method to handle adding more items to the cart
  addMoreItems() {
    // Example: Add a new book to the cart (you can modify to dynamically add items)
    const newItem = { id: this.cartItems.length + 1, title: `Book ${this.cartItems.length + 1}`, author: `Author ${this.cartItems.length + 1}`, offerPrice: 700, image: 'book3.jpg' };
    this.cartItems.push(newItem);
    this.calculateTotalPrice(); // Recalculate total price after adding a new item
  }

  // Method to handle payment method change (optional for more functionality)
  onPaymentMethodChange() {
    console.log('Payment method selected:', this.paymentMethod);
  }

  // Navigate to address form if COD is selected
  goToAddressForm() {
    if (this.paymentMethod === 'cod') {
      this.router.navigate(['/address']); // Navigate to address page
    }
  }
}
