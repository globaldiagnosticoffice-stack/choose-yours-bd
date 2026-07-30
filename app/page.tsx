import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 5);
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <span className="pill">NEW COLLECTION</span>
            <h1>Find Your Style<br />Choose <span>Yours</span></h1>
            <p>Premium quality products at the best price in Bangladesh.</p>
            <div className="heroButtons">
              <Link href="/shop" className="primary">Shop Now</Link>
              <Link href="/shop" className="secondary">View Collection</Link>
            </div>
          </div>
          <div className="heroImage">
            <Image
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion model wearing a blue shirt"
              fill
              priority
            />
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitGrid">
          <div>🚚 <span><strong>Cash on Delivery</strong><small>Pay when you receive</small></span></div>
          <div>💸 <span><strong>bKash Payment</strong><small>Easy and secure</small></span></div>
          <div>📱 <span><strong>Nagad Payment</strong><small>Fast and reliable</small></span></div>
          <div>↩️ <span><strong>7 Days Return</strong><small>No questions asked</small></span></div>
          <div>☎️ <span><strong>Customer Support</strong><small>01867-037489</small></span></div>
        </div>
      </section>

      <section className="section container">
        <div className="sectionTitle">
          <div><p className="eyebrow">SHOP BY CATEGORY</p><h2>Browse Categories</h2></div>
          <Link href="/shop">View All</Link>
        </div>
        <div className="categoryGrid">
          {[
            ["T-Shirts","👕"],["Clothing","🧥"],["Shoes","👟"],["Watches","⌚"],["Bags","🎒"],["Accessories","🕶️"]
          ].map(([name, icon]) => (
            <Link href="/shop" className="categoryCard" key={name}>
              <span>{icon}</span><strong>{name}</strong><small>Shop Now</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="sectionTitle">
          <div><p className="eyebrow">BEST SELLING</p><h2>Popular Products</h2></div>
          <Link href="/shop">View All</Link>
        </div>
        <div className="productGrid">
          {featured.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </main>
  );
}