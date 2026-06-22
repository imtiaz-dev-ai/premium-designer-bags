import { Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import ReceiptPage from "./pages/Receipt";
import ProductPage from "./pages/Product";
import CategoryPage from "./pages/Category";
import BrandPage from "./pages/Brand";
import AboutPage from "./pages/About";
import PolicyPage from "./pages/Policy";
import AdminPage from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import LandingPage from "./pages/Landing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/brand/:brand" element={<BrandPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Floating contact buttons */}
      <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
        <a href="https://wa.me/393515439347" target="_blank" rel="noopener noreferrer"
          style={{ background: "rgb(37, 211, 102)", display: "flex", alignItems: "center", gap: "8px", borderRadius: "9999px", padding: "12px 16px", color: "white", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.25)", transition: "transform 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
          <MessageCircle size={20} />
          <span style={{ fontSize: "14px", fontWeight: 600 }}>Order via WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/the_diamond_bags" target="_blank" rel="noopener noreferrer"
          style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", display: "flex", alignItems: "center", gap: "8px", borderRadius: "9999px", padding: "12px 16px", color: "white", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.25)", transition: "transform 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          <span style={{ fontSize: "14px", fontWeight: 600 }}>Instagram</span>
        </a>
        <a href="mailto:t33899153@gmail.com"
          style={{ background: "#6B1E2E", display: "flex", alignItems: "center", gap: "8px", borderRadius: "9999px", padding: "12px 16px", color: "white", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.25)", transition: "transform 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span style={{ fontSize: "14px", fontWeight: 600 }}>Email Us</span>
        </a>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Go home
        </a>
      </div>
    </div>
  );
}
