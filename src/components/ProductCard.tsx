import React from "react";
import WishlistButton from "./WishlistButton";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  brand,
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previene que se abra el modal al hacer clic en el botón
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        name,
        price,
        image,
        category,
        brand,
      } as any,
    });
  };

  const product: Product = {
    id,
    name,
    brand,
    price,
    description: "",
    image,
    category,
    subcategory: "",
    stock: 0,
    features: [],
    reviews: [],
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-2">
          ${price.toLocaleString()}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Agregar al carrito
        </button>
        <div className="mt-2 flex justify-center">
          <WishlistButton
            product={product}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
