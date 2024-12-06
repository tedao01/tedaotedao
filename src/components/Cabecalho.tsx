import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useCarrinho } from '../contexts/CarrinhoContext';

export function Cabecalho() {
  const { totalItens } = useCarrinho();

  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Loja Brasileira</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-200">Eletrônicos</a>
            <a href="#" className="text-white hover:text-blue-200">Moda</a>
            <a href="#" className="text-white hover:text-blue-200">Casa</a>
            <a href="#" className="text-white hover:text-blue-200">Esporte</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-blue-200">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-blue-200">
              <User className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-blue-200 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalItens}
              </span>
            </button>
            <button className="md:hidden text-white hover:text-blue-200">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}