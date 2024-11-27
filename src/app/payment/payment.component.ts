import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPaymentOption: string = '';

  constructor(private router: Router) {}

  // Navigate to address form if COD is selected
  goToAddressForm() {
    if (this.selectedPaymentOption === 'cod') {
      this.router.navigate(['/address']); // Navigate to address page
    }
  }
}
