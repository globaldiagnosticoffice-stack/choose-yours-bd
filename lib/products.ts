export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  description: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "T-Shirts",
    price: 590,
    oldPrice: 750,
    badge: "-21%",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "Soft premium cotton T-shirt with a comfortable regular fit for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Casual Black Shirt",
    category: "Shirts",
    price: 890,
    oldPrice: 1100,
    badge: "-19%",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    description: "Modern casual shirt with clean detailing and a smart, comfortable fit.",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "Sports Sneakers",
    category: "Shoes",
    price: 2490,
    oldPrice: 2990,
    badge: "-17%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description: "Lightweight sports sneakers designed for walking, training and casual use.",
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 4,
    name: "Classic Wrist Watch",
    category: "Watches",
    price: 1900,
    oldPrice: 2400,
    badge: "-20%",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description: "Elegant wrist watch with a clean dial and premium everyday styling."
  },
  {
    id: 5,
    name: "Stylish Backpack",
    category: "Bags",
    price: 1290,
    oldPrice: 1690,
    badge: "-24%",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "Spacious and stylish backpack for study, work and short trips."
  },
  {
    id: 6,
    name: "Running Shoes",
    category: "Shoes",
    price: 2190,
    oldPrice: 2750,
    badge: "-20%",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
    description: "Comfortable running shoes with cushioned support and breathable materials.",
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Clothing",
    price: 1900,
    oldPrice: 2490,
    badge: "-24%",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
    description: "Classic denim jacket with a versatile look for everyday outfits.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Accessories",
    price: 590,
    oldPrice: 790,
    badge: "-25%",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    description: "Compact leather wallet with practical card and cash compartments."
  }
];

export const categories = ["All Products", "T-Shirts", "Shirts", "Clothing", "Shoes", "Watches", "Bags", "Accessories"];