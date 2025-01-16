import React from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { Product } from "../types";

interface WishlistButtonProps {
  product: Product;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { state, dispatch } = useWishlist();
  const isInWishlist = state.items.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={isInWishlist ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      <Heart
        className={`h-6 w-6 ${
          isInWishlist ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </button>
  );
};
