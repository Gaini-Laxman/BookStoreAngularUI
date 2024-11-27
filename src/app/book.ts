export interface Book {
    id: number;
  title: string;
  author: string;
  description: string;
  price: number;       // Actual price
  offerPrice: number;  // Offer price (Discounted price)
  image: string;   
}
