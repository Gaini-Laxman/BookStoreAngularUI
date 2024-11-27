import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];
  totalPrice: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    // Load cart items from localStorage
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateTotalPrice();
  }

  // Calculate the total price of the cart
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.offerPrice, 0);
  }

  // Remove an item from the cart
  removeFromCart(itemId: number) {
    const updatedCart = this.cartItems.filter(item => item.id !== itemId);
    this.cartItems = updatedCart;
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
    this.calculateTotalPrice(); // Recalculate total price after removing item
  }

  // Proceed to the payment page and clear the cart
  proceedToPayment() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Also clear the cartItems array to update the view
    this.cartItems = [];
    
    // Navigate to the payment page
    this.router.navigate(['/payment']);
  }

  // Navigate to the shop page to add more items to the cart
  addMoreItems() {
    // Navigate to the product listing page (assuming it's '/shop' or '/products')
    this.router.navigate(['/book']); // Or replace '/shop' with the actual route for your product listing page
  }
}
