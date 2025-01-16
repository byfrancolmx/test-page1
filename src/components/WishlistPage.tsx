import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Product } from "../types";

const WishlistPage = () => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    cartDispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tu lista de deseos está vacía
        </h2>
        <p className="text-gray-600">
          Agrega productos a tu lista de deseos para guardarlos para más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Mi Lista de Deseos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistState.items.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.brand}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                ${product.price.toLocaleString()}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Agregar al carrito</span>
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Eliminar de la lista de deseos"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
