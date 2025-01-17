import React, { useState } from "react";
import { Heart, Music, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartModal from "./Cartmodal";
import WishlistModal from "./WishlistPage";
import { useWishlist } from "../context/WishlistContext";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { state: cartState } = useCart();
  const { state: wishlistState } = useWishlist();

  const totalItems = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const wishItems = wishlistState.items.length;

  return (
    <>
      <nav className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2">
                <Music className="w-8 h-8" />
                <span className="text-xl font-bold">MusicStore</span>
              </a>
            </div>
            <div className="flex items-end justify-center space-x-4">
              <div>
                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2"
                >
                  <Heart className="h-6 w-6 text-white" />
                  <span>Lista de deseados ({wishItems})</span>
                </button>
              </div>

              <div>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Carrito ({totalItems})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
    </>
  );
};

export default Navigation;
