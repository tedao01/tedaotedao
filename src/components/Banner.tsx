import React from 'react';
import { Tag } from 'lucide-react';

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">comedia niccoly</span>
            <span className="block text-yellow-400">sem desconto ta duro dorme</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Aproveite os melhores preços em produtos selecionados. Frete grátis para todo o Brasil!
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#produtos"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
              >
                Ver Ofertas
                <Tag className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <span className="block font-semibold">Frete Grátis</span>
              <span className="text-blue-200">Em compras acima de R$199</span>
            </div>
            <div>
              <span className="block font-semibold">Parcele em até 12x</span>
              <span className="text-blue-200">Sem juros no cartão</span>
            </div>
            <div>
              <span className="block font-semibold">5% de Desconto</span>
              <span className="text-blue-200">No PIX ou boleto</span>
            </div>
            <div>
              <span className="block font-semibold">Troca Grátis</span>
              <span className="text-blue-200">Em até 30 dias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}