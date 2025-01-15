import React from 'react';
import { Guitar, Drumstick, Music, ChevronDown } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <Music className="w-8 h-8" />
              <span className="text-xl font-bold">MusicStore</span>
            </a>
            
            <div className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <Guitar className="w-4 h-4" />
                  <span>Guitarras</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2">
                  <a href="/guitarras/electricas" className="block px-4 py-2 hover:bg-indigo-50">Guitarras Eléctricas</a>
                  <a href="/guitarras/acusticas" className="block px-4 py-2 hover:bg-indigo-50">Guitarras Acústicas</a>
                  <a href="/guitarras/clasicas" className="block px-4 py-2 hover:bg-indigo-50">Guitarras Clásicas</a>
                  <a href="/guitarras/bajos" className="block px-4 py-2 hover:bg-indigo-50">Bajos</a>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <Drumstick className="w-4 h-4" />
                  <span>Baterías</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2">
                  <a href="/baterias/acusticas" className="block px-4 py-2 hover:bg-indigo-50">Baterías Acústicas</a>
                  <a href="/baterias/electronicas" className="block px-4 py-2 hover:bg-indigo-50">Baterías Electrónicas</a>
                  <a href="/baterias/platillos" className="block px-4 py-2 hover:bg-indigo-50">Platillos</a>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <span>Accesorios</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2">
                  <a href="/accesorios/cuerdas" className="block px-4 py-2 hover:bg-indigo-50">Cuerdas</a>
                  <a href="/accesorios/puas" className="block px-4 py-2 hover:bg-indigo-50">Púas</a>
                  <a href="/accesorios/baquetas" className="block px-4 py-2 hover:bg-indigo-50">Baquetas</a>
                  <a href="/accesorios/fundas" className="block px-4 py-2 hover:bg-indigo-50">Fundas</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700">
              Carrito (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;