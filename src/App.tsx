import React, { useState } from "react";
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import ProductFilters from "./components/ProductFilters";
import SearchBar from "./components/SearchBar";
import { Product } from "./types";
import { allProducts } from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesBrand =
      !selectedBrand || product.subcategory === selectedBrand;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {selectedProduct ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <ProductDetail product={selectedProduct} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-center">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedBrand={selectedBrand}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategory}
                onBrandChange={setSelectedBrand}
                onPriceRangeChange={setPriceRange}
              />
            </div>

            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No se encontraron productos que coincidan con los filtros
                    seleccionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
