import React from 'react';
import Navigation from './components/Navigation';
import ProductCard from './components/ProductCard';

const featuredProducts = [
  {
    name: "Fender Stratocaster",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=800",
    category: "Guitarras Eléctricas"
  },
  {
    name: "Gibson Les Paul",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800",
    category: "Guitarras Eléctricas"
  },
  {
    name: "Pearl Export Series",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800",
    category: "Baterías"
  },
  {
    name: "Fender Jazz Bass",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1583454944114-9a1e6f619a13?auto=format&fit=crop&w=800",
    category: "Bajos"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1920")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Tu Tienda de Música</h1>
            <p className="text-xl mb-8">Los mejores instrumentos y accesorios para músicos</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Categorías Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800" 
                alt="Guitarras" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Guitarras</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543443258-92b04ad5ec4b?auto=format&fit=crop&w=800" 
                alt="Baterías" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Baterías</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800" 
                alt="Accesorios" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Accesorios</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;