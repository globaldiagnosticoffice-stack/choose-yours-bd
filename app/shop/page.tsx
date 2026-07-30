"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function ShopPage() {
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("latest");

  const shown = useMemo(() => {
    let list = category === "All Products" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort]);

  return (
    <main className="section container">
      <div className="breadcrumb">Home › Shop</div>
      <div className="shopHeader">
        <h1 className="pageTitle">All Products</h1>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="shopLayout">
        <aside className="sidebar">
          <h3>Categories</h3>
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "activeSide" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
          <div className="filterBox">
            <h3>Filter by Price</h3>
            <input type="range" min="0" max="5000" defaultValue="5000" />
            <small>৳0 – ৳5000</small>
          </div>
        </aside>

        <div className="productGrid shopGrid">
          {shown.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    </main>
  );
}