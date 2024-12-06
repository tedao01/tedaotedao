export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: 'eletronicos' | 'moda' | 'casa' | 'esporte';
  parcelas: number;
  desconto: number;
}

export interface CarrinhoItem extends Produto {
  quantidade: number;
}