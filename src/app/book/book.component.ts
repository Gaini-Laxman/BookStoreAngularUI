import { Component } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'Java Programming',
      author: 'Gaini Laxman',
      description: 'Learn Java programming from scratch.',
      price: 499,         // Actual price
      offerPrice: 399,    // Offer price
      image: 'assets/java.jpg' 
    },
    {
      id: 2,
      title: 'Angular in Action',
      author: 'Jane Smith',
      description: 'Master Angular framework with this book.',
      price: 799,
      offerPrice: 699,
      image: 'assets/angular.jpg'
    },
    {
      id: 3,
      title: 'Spring Boot Guide',
      author: 'Richard Roe',
      description: 'A comprehensive guide to Spring Boot.',
      price: 599,
      offerPrice: 499,
      image: 'assets/springboot.jpg'
    },
    {
      id: 4,
      title: 'HTML Book',
      author: 'Richard Roe',
      description: 'A comprehensive guide to Spring Boot.',
      price: 599,
      offerPrice: 499,
      image: 'assets/html.jpg'
    },
    {
      id: 5,
      title: 'CSS Book',
      author: 'Ben Frain',
      description: 'A comprehensive guide to Spring Boot.',
      price: 999,
      offerPrice: 899,
      image: 'assets/css.jpg'
    },
    {
      id: 6,
      title: 'TYPESCRIPT Book',
      author: 'Nabendu biswas',
      description: 'A comprehensive guide to Spring Boot.',
      price: 399,
      offerPrice: 299,
      image: 'assets/typescript.jpg'
    },
    {
      id: 7,
      title: 'JAVASCRIPT Book',
      author: 'Terry McNavage',
      description: 'A comprehensive guide to JAVASCRIPT.',
      price: 399,
      offerPrice: 290,
      image: 'assets/javascript.jpg'
    },
    {
      id: 8,
      title: 'MICROSERVICES Book',
      author: 'Kasun Indrasri',
      description: 'A comprehensive guide to JAVASCRIPT.',
      price: 1199,
      offerPrice: 1099,
      image: 'assets/microservices.jpg'
    },
    {
      id: 9,
      title: 'MACHINELEARN Book',
      author: 'Springer',
      description: 'A comprehensive guide to MICHINELEARN.',
      price: 1299,
      offerPrice: 1199,
      image: 'assets/machinelearn.jpg'
    },
    {
      id: 10,
      title: 'ReactJs Book',
      author: 'Lionel lopez',
      description: 'A comprehensive guide to ReactJs.',
      price: 999,
      offerPrice: 750,
      image: 'assets/reactjs.jpg'
    },
    {
      id: 11,
      title: 'AWS Book',
      author: 'Parvin Mishra',
      description: 'A comprehensive guide to ReactJs.',
      price: 1990,
      offerPrice: 1699,
      image: 'assets/aws.jpg'
    }

  ];
  
  constructor(private router: Router) {}

  addToCart(book: Book) {
    // Retrieve the current cart items from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if the book is already in the cart
    const isBookInCart = currentCart.some((item: { id: number; }) => item.id === book.id);
  
    if (isBookInCart) {
      alert(`${book.title} is already in the cart!`);
    } else {
      // Add the new book to the cart
      currentCart.push(book);
      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(currentCart));
      alert(`${book.title} added to cart!`);
    }
    // Navigate to cart after adding
    this.router.navigate(['/cart']);
  }
}
