export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  ingredients: string[];
  stock: number;
  createdAt: string;
}
