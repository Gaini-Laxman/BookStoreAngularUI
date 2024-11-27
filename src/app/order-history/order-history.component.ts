import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: any[] = [];
  successMessage: string = '';

  ngOnInit() {
    // Load order history from localStorage (or a service)
    this.orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
  }

  // Method to check if the order was placed within the last 30 minutes
  canCancelOrder(orderDate: string): boolean {
    const orderTime = new Date(orderDate).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - orderTime;
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    return timeDifference <= thirtyMinutes;
  }

  // Cancel the order and show success message
  cancelOrder(orderIndex: number): void {
    // Remove the order from the history
    this.orderHistory.splice(orderIndex, 1);

    // Save the updated order history back to localStorage
    localStorage.setItem('orderHistory', JSON.stringify(this.orderHistory));

    // Set success message
    this.successMessage = 'Your order has been successfully cancelled.';

    // Optionally, clear the success message after a timeout
    setTimeout(() => {
      this.successMessage = '';
    }, 5000); // Hide after 5 seconds
  }
}
