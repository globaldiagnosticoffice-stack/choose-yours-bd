import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "Choose Yours BD",
  description: "Fashion and lifestyle ecommerce store in Bangladesh"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <footer id="contact">
            <div className="container footerGrid">
              <div>
                <div className="logo footerLogo">CH<span>OO</span>SE <small>YOURS BD</small></div>
                <p>Quality fashion and lifestyle products at a fair price.</p>
              </div>
              <div>
                <h4>Customer Support</h4>
                <p>Phone / WhatsApp: 01867-037489</p>
                <p>Cash on Delivery available</p>
              </div>
              <div>
                <h4>Payments</h4>
                <p>bKash • Nagad • Cash on Delivery</p>
                <p>Delivery all over Bangladesh</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}