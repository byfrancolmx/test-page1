import React, { useState } from "react";
import {
  Guitar,
  Drumstick,
  Music,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import CartModal from "./Cartmodal";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

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

            <div className="flex items-center space-x-4">
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
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
