"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { count } = useCart();
  return (
    <>
      <div className="topbar">Cash on Delivery available all over Bangladesh 🚚</div>
      <header className="header">
        <div className="container headerTop">
          <Link href="/" className="logo">
            CH<span>OO</span>SE <small>YOURS BD</small>
          </Link>
          <div className="searchBox">
            <input placeholder="Search for products..." />
            <button>Search</button>
          </div>
          <div className="headerActions">
            <Link href="/shop">Wishlist</Link>
            <Link href="/cart">Cart ({count})</Link>
          </div>
        </div>
        <div className="navWrap">
          <div className="container nav">
            <button className="categoryBtn">☰ All Categories</button>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop">T-Shirts</Link>
            <Link href="/shop">Shoes</Link>
            <Link href="/shop">Watches</Link>
            <Link href="/shop">Bags</Link>
            <Link href="/shop">Accessories</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>
      </header>
    </>
  );
}