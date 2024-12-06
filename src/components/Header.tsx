import React from 'react';
import { ShoppingBag, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600">BeautyHub</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600">Skincare</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Makeup</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Haircare</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Fragrance</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-600">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-pink-600">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-pink-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}