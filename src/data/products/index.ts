import { guitarrasElectricas } from "./guitarras-electricas";
import { baterias } from "./baterias";
import { bajos } from "./bajos";
import { Product } from "../../types";

// Combina todos los productos en un solo array
export const allProducts: Product[] = [
  ...guitarrasElectricas,
  ...baterias,
  ...bajos,
];
