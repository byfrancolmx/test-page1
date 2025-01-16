import { Product } from "../../types";

export const bajos: Product[] = [
  {
    id: "4",
    name: "Fender Jazz Bass",
    brand: "Fender",
    price: 1299.99,
    description:
      "El Fender Jazz Bass es conocido por su versatilidad y su sonido característico que ha definido el bajo eléctrico en la música moderna.",
    image:
      "https://images.unsplash.com/photo-1583454944114-9a1e6f619a13?auto=format&fit=crop&w=800",
    category: "Bajos",
    subcategory: "Fender",
    stock: 7,
    features: [
      "Cuerpo de aliso",
      "Mástil de arce",
      "2 pastillas Jazz Bass",
      "Puente de alta masa",
      "20 trastes",
    ],
    reviews: [
      {
        id: "r4",
        userId: "u4",
        userName: "Ana Martínez",
        rating: 5,
        comment: "Sonido increíble y muy cómodo de tocar",
        date: "2024-02-20",
      },
    ],
  },
];
