"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "./CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <article className="productCard">
      <div className="productImageWrap">
        {product.badge && <span className="discountBadge">{product.badge}</span>}
        <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt={product.name} fill className="productImage" />
        </Link>
      </div>
      <p className="productCategory">{product.category}</p>
      <Link href={`/product/${product.id}`}><h3>{product.name}</h3></Link>
      <div className="price">
        <strong>৳ {product.price.toLocaleString()}</strong>
        {product.oldPrice && <del>৳ {product.oldPrice.toLocaleString()}</del>}
      </div>
      <button className="primary full" onClick={() => addToCart(product)}>Add to Cart</button>
    </article>
  );
}