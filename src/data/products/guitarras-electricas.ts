import { Product } from "../../types";

export const guitarrasElectricas: Product[] = [
  {
    id: "1",
    name: "Fender Stratocaster",
    brand: "Fender",
    price: 1499.99,
    description:
      "La legendaria Fender Stratocaster, conocida por su sonido versátil y su comodidad al tocar. Perfecta para cualquier estilo musical.",
    image:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=800",
    category: "Guitarras Eléctricas",
    subcategory: "Fender",
    stock: 10,
    features: [
      "Cuerpo de aliso",
      "Mástil de arce",
      "3 pastillas single-coil",
      "Puente tremolo sincronizado",
      "22 trastes",
    ],
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "Juan Pérez",
        rating: 5,
        comment: "Excelente guitarra, el sonido es increíble",
        date: "2024-02-15",
      },
    ],
  },
  {
    id: "2",
    name: "Gibson Les Paul Standard",
    brand: "Gibson",
    price: 2499.99,
    description:
      "La Gibson Les Paul Standard es el epítome de la perfección en guitarras eléctricas. Su sonido rico y sustain legendario la hacen única.",
    image:
      "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800",
    category: "Guitarras Eléctricas",
    subcategory: "Gibson",
    stock: 5,
    features: [
      "Cuerpo de caoba con tapa de arce",
      "Mástil de caoba",
      "2 pastillas humbucker",
      "Puente Tune-O-Matic",
      "22 trastes",
    ],
    reviews: [
      {
        id: "r2",
        userId: "u2",
        userName: "María García",
        rating: 5,
        comment: "La mejor inversión que he hecho. Sonido espectacular.",
        date: "2024-02-10",
      },
    ],
  },
];
