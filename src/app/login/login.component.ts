import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      // Here you would typically make an API call to authenticate the user
      // For example:
      // this.authService.login(this.email, this.password).subscribe(response => {
      //   // On successful login, redirect to the dashboard or home page
      //   this.router.navigate(['/home']);
      // });

      // For now, we'll just log the email and password to the console
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // Redirect to a home page (example)
      this.router.navigate(['/home']);
    }
  }
}
