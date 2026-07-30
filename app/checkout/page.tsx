"use client";

import { useState } from "react";
import { useCart } from "@/components/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [area, setArea] = useState("inside");
  const [placed, setPlaced] = useState(false);
  const delivery = area === "inside" ? 80 : 150;

  const placeOrder = () => {
    if (!cart.length) return;
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="section container">
        <div className="successBox">
          <h1>Order placed successfully!</h1>
          <p>We will contact you shortly at your provided phone number.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="section container">
      <h1 className="pageTitle">Checkout</h1>
      <div className="steps"><span className="active">1. Shipping</span><span>2. Payment</span><span>3. Review</span></div>

      <div className="checkoutLayout">
        <section className="checkoutForm">
          <h2>Shipping Information</h2>
          <label>Full Name<input placeholder="Enter your full name" /></label>
          <label>Phone Number<input defaultValue="01867037489" /></label>
          <label>Address<textarea placeholder="House/Street/Area" rows={4} /></label>
          <label>District/City<select><option>Dhaka</option><option>Chattogram</option><option>Other District</option></select></label>
          <div className="deliveryOptions">
            <label><input type="radio" name="area" checked={area === "inside"} onChange={() => setArea("inside")} /> Inside Dhaka (৳80)</label>
            <label><input type="radio" name="area" checked={area === "outside"} onChange={() => setArea("outside")} /> Outside Dhaka (৳150)</label>
          </div>
          <label>Payment Method<select><option>Cash on Delivery</option><option>bKash</option><option>Nagad</option></select></label>
          <button className="primary full" onClick={placeOrder}>Place Order</button>
        </section>

        <aside className="summary">
          <h2>Order Summary</h2>
          {cart.map((item) => <div key={item.id}><span>{item.name} ×{item.quantity}</span><strong>৳ {(item.price * item.quantity).toLocaleString()}</strong></div>)}
          <div><span>Subtotal</span><strong>৳ {total.toLocaleString()}</strong></div>
          <div><span>Delivery Charge</span><strong>৳ {delivery}</strong></div>
          <div className="summaryTotal"><span>Total</span><strong>৳ {(total + delivery).toLocaleString()}</strong></div>
          <p>100% secure payment • Cash on Delivery available</p>
        </aside>
      </div>
    </main>
  );
}