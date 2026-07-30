"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  const { addToCart } = useCart();
  const [size, setSize] = useState(product?.sizes?.[0] || "");
  if (!product) return notFound();

  return (
    <main className="section container">
      <div className="breadcrumb">Home › {product.category} › {product.name}</div>
      <div className="productDetail">
        <div className="detailImage">
          <Image src={product.image} alt={product.name} fill />
        </div>
        <div className="detailInfo">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detailPrice">
            <strong>৳ {product.price.toLocaleString()}</strong>
            {product.oldPrice && <del>৳ {product.oldPrice.toLocaleString()}</del>}
            {product.badge && <span>{product.badge}</span>}
          </div>
          <p>{product.description}</p>

          {product.sizes && (
            <div className="sizes">
              <label>Size</label>
              <div>
                {product.sizes.map((item) => (
                  <button key={item} className={size === item ? "selectedSize" : ""} onClick={() => setSize(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button className="primary large" onClick={() => addToCart(product, size)}>Add to Cart</button>

          <div className="safeBox">
            <strong>Guaranteed Safe Checkout</strong>
            <p>bKash • Nagad • Cash on Delivery</p>
          </div>
        </div>
      </div>

      <div className="descriptionBox">
        <h2>Product Description</h2>
        <p>{product.description} Product colour may vary slightly depending on screen settings.</p>
      </div>
    </main>
  );
}