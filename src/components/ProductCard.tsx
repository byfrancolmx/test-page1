import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-2">${price.toLocaleString()}</p>
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;