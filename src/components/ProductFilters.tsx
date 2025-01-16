import React from "react";
import { CATEGORIES } from "../types";

interface ProductFiltersProps {
  selectedCategory: string;
  selectedBrand: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  selectedBrand,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
}) => {
  const category = CATEGORIES.find((cat) => cat.name === selectedCategory);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categorías</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={cat.name} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={cat.name}
                checked={selectedCategory === cat.name}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {category && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Marcas</h3>
          <div className="space-y-2">
            {category.subcategories.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={(e) => onBrandChange(e.target.value)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-3">Rango de Precio</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
