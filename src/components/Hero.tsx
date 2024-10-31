import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Industrial machinery"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Precision in Every Part
          <span className="block text-blue-500 mt-2">Premium Rubber Components for Industrial Needs</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Delivering high-quality rubber components for industrial machinery nationwide. Trusted by leading manufacturers for superior performance and reliability.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="group inline-flex items-center justify-center rounded bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-all">
            Explore Our Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group inline-flex items-center justify-center rounded border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-100 hover:bg-white/10 transition-all">
            Shop Online
            <ShoppingBag className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}