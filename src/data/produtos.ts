import { Produto } from '../types/produto';

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Smartphone Galaxy Ultra",
    descricao: "Smartphone com câmera de alta resolução, 256GB, 5G e bateria de 5000mAh",
    preco: 123.99,
    imagem: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=500",
    categoria: "eletronicos",
    parcelas: 12,
    desconto: 15
  },
  {
    id: 2,
    nome: "Tênis Runner Pro",
    descricao: "Tênis esportivo com tecnologia de amortecimento e sistema anti-impacto",
    preco: 299.99,
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500",
    categoria: "esporte",
    parcelas: 6,
    desconto: 20
  },
  {
    id: 3,
    nome: "Smart TV 55\" 4K",
    descricao: "TV com resolução 4K, HDR, WiFi integrado e assistente de voz",
    preco: 3299.99,
    imagem: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500",
    categoria: "eletronicos",
    parcelas: 12,
    desconto: 10
  },
  {
    id: 4,
    nome: "Conjunto Sofá 3 Lugares",
    descricao: "Sofá retrátil e reclinável em veludo com design contemporâneo",
    preco: 1899.99,
    imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500",
    categoria: "casa",
    parcelas: 10,
    desconto: 25
  },
  {
    id: 5,
    nome: "Notebook Ultra Pro",
    descricao: "Intel Core i7, 16GB RAM, SSD 512GB, Placa de vídeo dedicada",
    preco: 4599.99,
    imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=500",
    categoria: "eletronicos",
    parcelas: 12,
    desconto: 12
  },
  {
    id: 6,
    nome: "Bicicleta Mountain Bike",
    descricao: "Quadro em alumínio, 21 marchas, freio a disco hidráulico",
    preco: 20000.99,
    imagem: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=500",
    categoria: "esporte",
    parcelas: 10,
    desconto: 18
  }
];