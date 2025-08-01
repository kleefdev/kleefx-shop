export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  category: string;
  rating?: number; // Optional rating
  reviews?: number; // Optional number of reviews
}

export interface CartItem extends Product {
  quantity: number;
}
