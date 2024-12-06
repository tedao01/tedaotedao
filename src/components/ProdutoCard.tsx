import React from 'react';
import { Produto } from '../types/produto';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCarrinho } from '../contexts/CarrinhoContext';

interface ProdutoCardProps {
  produto: Produto;
}

export function ProdutoCard({ produto }: ProdutoCardProps) {
  const { adicionarAoCarrinho } = useCarrinho();
  const precoOriginal = produto.preco;
  const precoComDesconto = produto.preco * (1 - produto.desconto / 100);
  
  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const precoParcela = (precoComDesconto / produto.parcelas).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const handleAdicionarAoCarrinho = () => {
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        {produto.desconto > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{produto.desconto}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{produto.nome}</h3>
        <p className="text-sm text-gray-600 mb-3">{produto.descricao}</p>
        <div className="space-y-1">
          {produto.desconto > 0 && (
            <div className="text-sm text-gray-500 line-through">
              {formatarPreco(precoOriginal)}
            </div>
          )}
          <div className="text-2xl font-bold text-blue-700">
            {formatarPreco(precoComDesconto)}
          </div>
          <div className="text-sm text-gray-600">
            ou {produto.parcelas}x de {precoParcela} sem juros
          </div>
        </div>
        <button
          onClick={handleAdicionarAoCarrinho}
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}