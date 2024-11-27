import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router) {}  // Inject Router

  onSubmit() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Typically, you would send the signup data to your server here
    console.log('Sign Up Data:', this.signupData);
    
    // After successful signup, navigate to another page (e.g., login or dashboard)
    this.router.navigate(['/login']);  // Change '/login' to your desired route
  }
}
