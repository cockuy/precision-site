import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Industrial Rubber Gaskets',
    description: 'High-performance gaskets for blending machines and industrial equipment',
    image: 'https://images.unsplash.com/photo-1617781377265-e5578c4e9629?auto=format&fit=crop&q=80',
    price: '₹499',
    category: 'Gaskets'
  },
  {
    id: 2,
    name: 'Precision Rubber Suckers',
    description: 'Engineered rubber suckers for industrial cylinders and automation',
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80',
    price: '₹299',
    category: 'Suckers'
  },
  {
    id: 3,
    name: 'Industrial Washers',
    description: 'Versatile rubber washers for various industrial applications',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80',
    price: '₹199',
    category: 'Washers'
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Premium quality rubber components engineered for industrial excellence
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}