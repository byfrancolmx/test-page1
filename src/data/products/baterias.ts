import { Product } from "../../types";

export const baterias: Product[] = [
  {
    id: "3",
    name: "Pearl Export Series",
    brand: "Pearl",
    price: 899.99,
    description:
      "La batería Pearl Export Series es perfecta para principiantes y intermedios. Ofrece un sonido profesional a un precio accesible.",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800",
    category: "Baterías",
    subcategory: "Pearl",
    stock: 3,
    features: [
      'Bombo de 22"',
      'Tom de 12"',
      'Tom de piso de 16"',
      'Caja de 14"',
      "Hardware incluido",
    ],
    reviews: [
      {
        id: "r3",
        userId: "u3",
        userName: "Carlos Rodríguez",
        rating: 4,
        comment: "Muy buena relación calidad-precio",
        date: "2024-02-01",
      },
    ],
  },
];
