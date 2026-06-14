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
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/393515439347"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-2xl transition hover:scale-105 hover:opacity-95"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">Order via WhatsApp</span>
      </a>
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
