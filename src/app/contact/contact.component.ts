import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() {}

  onSubmit() {
    if (this.name && this.email && this.message) {
      // In a real-world scenario, you would send the form data to a backend service.
      console.log('Contact Form Submitted!');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

      // Reset the form after submission
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      // Form is invalid, alert the user or show a message
      console.log('Please fill all fields');
    }
  }
}
