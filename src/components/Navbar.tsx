import React, { useState } from 'react';
import { Menu, X, Settings, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Settings className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Precision Enterprises</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</a>
            <a href="#products" className="text-gray-300 hover:text-blue-500 transition-colors">Products</a>
            <a href="#clients" className="text-gray-300 hover:text-blue-500 transition-colors">Enterprise Clients</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Shop Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-b border-slate-800">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-500">About Us</a>
            <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Products</a>
            <a href="#clients" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Enterprise Clients</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Contact</a>
            <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}