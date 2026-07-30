"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const delivery = cart.length ? 80 : 0;

  return (
    <main className="section container">
      <h1 className="pageTitle">Your Cart ({cart.length})</h1>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <h2>Your cart is empty</h2>
          <Link className="primary" href="/shop">Start Shopping</Link>
        </div>
      ) : (
        <div className="cartLayout">
          <div className="cartList">
            {cart.map((item) => (
              <div className="cartRow" key={`${item.id}-${item.size || ""}`}>
                <div className="cartProduct">
                  <div className="cartThumb"><Image src={item.image} alt={item.name} fill /></div>
                  <div><strong>{item.name}</strong><small>{item.size ? `Size: ${item.size}` : item.category}</small></div>
                </div>
                <strong>৳ {item.price.toLocaleString()}</strong>
                <div className="qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <strong>৳ {(item.price * item.quantity).toLocaleString()}</strong>
                <button className="remove" onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))}
            <Link href="/shop" className="secondary inlineBtn">← Continue Shopping</Link>
          </div>

          <aside className="summary">
            <h2>Order Summary</h2>
            <div><span>Subtotal</span><strong>৳ {total.toLocaleString()}</strong></div>
            <div><span>Delivery Charge</span><strong>৳ {delivery}</strong></div>
            <div className="summaryTotal"><span>Total</span><strong>৳ {(total + delivery).toLocaleString()}</strong></div>
            <Link href="/checkout" className="primary full">Proceed to Checkout</Link>
            <p>Cash on Delivery available</p>
          </aside>
        </div>
      )}
    </main>
  );
}