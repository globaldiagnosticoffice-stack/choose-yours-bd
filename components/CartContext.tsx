"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = Product & { quantity: number; size?: string };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("choose-yours-bd-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("choose-yours-bd-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size?: string) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id && item.size === size);
      if (found) {
        return current.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1, size }];
    });
  };

  const removeFromCart = (id: number) => setCart((current) => current.filter((item) => item.id !== id));
  const updateQuantity = (id: number, quantity: number) =>
    setCart((current) =>
      current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)
    );
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}