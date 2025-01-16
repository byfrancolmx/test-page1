export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  stock: number;
  features: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  name: string;
  subcategories: string[];
}

export const CATEGORIES: Category[] = [
  {
    name: "Guitarras Eléctricas",
    subcategories: ["Fender", "Gibson", "Ibanez", "PRS"],
  },
  {
    name: "Bajos",
    subcategories: ["Fender", "Music Man", "Yamaha", "Warwick"],
  },
  {
    name: "Baterías",
    subcategories: ["Pearl", "Tama", "DW", "Yamaha"],
  },
  {
    name: "Accesorios Guitarras",
    subcategories: ["Cuerdas", "Púas", "Cables", "Pedales"],
  },
  {
    name: "Accesorios Baterías",
    subcategories: ["Platillos", "Baquetas", "Parches", "Hardware"],
  },
];
