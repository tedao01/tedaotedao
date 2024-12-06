import React, { createContext, useContext, useState } from 'react';
import { Produto, CarrinhoItem } from '../types/produto';

interface CarrinhoContextData {
  itens: CarrinhoItem[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (produtoId: number) => void;
  limparCarrinho: () => void;
  totalItens: number;
  totalPreco: number;
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<CarrinhoItem[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setItens(itensAtuais => {
      const itemExistente = itensAtuais.find(item => item.id === produto.id);
      
      if (itemExistente) {
        return itensAtuais.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...itensAtuais, { ...produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (produtoId: number) => {
    setItens(itensAtuais =>
      itensAtuais.filter(item => item.id !== produtoId)
    );
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);

  const totalPreco = itens.reduce((total, item) => {
    const precoComDesconto = item.preco * (1 - item.desconto / 100);
    return total + (precoComDesconto * item.quantidade);
  }, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
        totalItens,
        totalPreco
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);