import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio'; // MatRadioModule is imported
import { MatFormFieldModule } from '@angular/material/form-field'; // Import for form field
import { MatInputModule } from '@angular/material/input'; // Import for input fields
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    PaymentComponent,
    AddressComponent,
    OrderSuccessComponent,
    ConfirmationComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule, // Already imported
    MatFormFieldModule, // Import for mat-form-field
    MatInputModule, // Import for matInput
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
