import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { Product } from "../types";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    cartDispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  if (!isOpen) return null;

  if (wishlistState.items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Lista de Deseos</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tu lista de deseos está vacía
                </h2>
                <p className="text-gray-600">
                  Agrega productos a tu lista de deseos para guardarlos para más
                  tarde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Lista de Deseos</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-1 gap-4">
              {wishlistState.items.map((product) => (
                <div key={product.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="font-bold">
                      ${product.price.toLocaleString()}
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Agregar al carrito</span>
                      </button>
                      <button
                        onClick={() => handleRemoveFromWishlist(product.id)}
                        className="p-2 text-gray-500 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
