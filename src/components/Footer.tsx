import React from 'react';
import { Settings, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Precision Enterprises</span>
            </div>
            <p className="mt-4 text-sm">
              Premium rubber components for industrial machinery. Quality and reliability in every part.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-blue-500 transition-colors">Products</a></li>
              <li><a href="#clients" className="hover:text-blue-500 transition-colors">Enterprise Clients</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Rubber Gaskets</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Rubber Suckers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Washers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Precision Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}