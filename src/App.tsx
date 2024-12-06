import React from 'react';
import { Cabecalho } from './components/Cabecalho';
import { Banner } from './components/Banner';
import { ProdutoCard } from './components/ProdutoCard';
import { produtos } from './data/produtos';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

function App() {
  return (
    <CarrinhoProvider>
      <div className="min-h-screen bg-gray-50">
        <Cabecalho />
        <Banner />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </main>

        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre a Loja Brasileira</h3>
                <p className="text-blue-200">
                  Sua loja online com os melhores produtos e preços do Brasil.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-200 hover:text-yellow-400">Quem Somos</a></li>
                  <li><a href="#" className="text-blue-200 hover:text-yellow-400">Contato</a></li>
                  <li><a href="#" className="text-blue-200 hover:text-yellow-400">Política de Envio</a></li>
                  <li><a href="#" className="text-blue-200 hover:text-yellow-400">Trocas e Devoluções</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-blue-200 mb-4">
                  Cadastre-se para receber ofertas exclusivas.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                  />
                  <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-r-md hover:bg-yellow-500 font-semibold">
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
              <p>© 2024 Loja Brasileira. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </CarrinhoProvider>
  );
}

export default App;