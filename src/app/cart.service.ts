// cart.service.ts
import { Injectable } from '@angular/core';
import { Book } from './book'; // Assuming Book interface is in book.ts

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(book: Book) {
    const cart = this.getCartItems();
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartItems(): Book[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeFromCart(itemId: number) {
    const cart = this.getCartItems();
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
