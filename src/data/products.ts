import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    description: "A lightweight serum that brightens and hydrates your skin for a natural, dewy glow.",
    price: 100.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500",
    category: "skincare"
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    description: "Long-lasting, creamy matte lipstick that doesn't dry out your lips.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500",
    category: "makeup"
  },
  {
    id: 3,
    name: "Silk Repair Hair Mask",
    description: "Intensive treatment that repairs and nourishes damaged hair.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=500",
    category: "haircare"
  },
  {
    id: 4,
    name: "Ocean Breeze Perfume",
    description: "Fresh and invigorating scent with notes of sea salt and jasmine.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500",
    category: "fragrance"
  }
];