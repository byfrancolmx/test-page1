import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { dispatch } = useCart();

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
            </div>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < averageRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-gray-600">({product.reviews.length} reseñas)</span>
            </div>

            <p className="text-4xl font-bold text-gray-900">${product.price.toLocaleString()}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">Características</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Agregar al carrito</span>
            </button>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Reseñas de clientes</h3>
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{review.userName}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;