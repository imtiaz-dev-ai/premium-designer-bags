import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ShoppingBag, MessageCircle, ChevronLeft, Star, Truck, ShieldCheck, RotateCcw, Plus, Minus, Heart } from "lucide-react";
import { addToCart, getCartCount } from "@/lib/cart-store";
import logoImg from "@/assets/Logo.png";

const WHATSAPP_LINK = "https://wa.me/393515439347";

export default function ProductPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    setCartCount(getCartCount());
    const onStorage = () => setCartCount(getCartCount());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  let product = { title: "Designer Bag", price: "$299", tag: "Luxury", img: "", description: "" };
  try {
    const bytes = Uint8Array.from(atob(id), (c) => c.charCodeAt(0));
    const decoded = JSON.parse(new TextDecoder().decode(bytes));
    product = {
      title: decoded.title,
      price: decoded.price,
      tag: decoded.tag ?? "Luxury",
      img: decoded.img ?? "",
      description: decoded.description ?? "",
    };
  } catch { /* use fallback */ }

  function handleAddToCart() {
    addToCart({ id, title: product.title, price: product.price, tag: product.tag, img: product.img, size: "", quantity: qty });
    setAdded(true);
    setCartCount(getCartCount());
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium hover:text-burgundy">
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            <div className="hidden flex-col sm:flex">
              <span className="text-base font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
            </div>
          </Link>
          <button onClick={() => navigate("/cart")} className="relative p-2 hover:text-burgundy">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">{cartCount}</span>}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <nav className="mb-4 text-xs text-muted-foreground md:mb-6">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground line-clamp-1">{product.title}</span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Single Image */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            {product.img ? (
              <img src={product.img} alt={product.title} className="aspect-square w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            ) : (
              <div className="aspect-square w-full flex items-center justify-center bg-secondary text-muted-foreground text-sm">No Image</div>
            )}
            <button onClick={() => setWishlist(!wishlist)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-md transition hover:scale-110">
              <Heart className={`h-5 w-5 ${wishlist ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="mb-2 inline-block w-fit rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-burgundy">{product.tag}</span>
            <h1 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <span className="text-sm text-muted-foreground">4.9 · 226 reviews</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-burgundy md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{product.price}</span>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">Save 20%</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-green-600">In Stock — Ships from Italy & Dubai</span>
            </div>

            <div className="mt-5">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-ink">Quantity</span>
              <div className="inline-flex items-center gap-4 rounded-xl border border-border px-4 py-2.5">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-muted-foreground hover:text-ink active:scale-95"><Minus className="h-4 w-4" /></button>
                <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-muted-foreground hover:text-ink active:scale-95"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button onClick={handleAddToCart} className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest transition active:scale-95 ${added ? "bg-green-600 text-white" : "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"}`}>
                <ShoppingBag className="h-4 w-4" /> {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <a href={WHATSAPP_LINK} className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90 active:scale-95" style={{ background: "var(--gradient-luxe)" }}>
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </a>
            </div>

            {added && (
              <div className="mt-3 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                <span className="text-sm text-green-700">Added to your cart!</span>
                <button onClick={() => navigate("/cart")} className="text-sm font-semibold text-green-700 underline">View Cart →</button>
              </div>
            )}

            {product.description && (
              <div className="mt-6 border-t border-border pt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink">Description</h3>
                <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{product.description}</p>
              </div>
            )}

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-6">
              {[{ icon: Truck, t: "Free Shipping", d: "Italy & Dubai" }, { icon: ShieldCheck, t: "Authentic", d: "Verified" }, { icon: RotateCcw, t: "Returns", d: "14-day policy" }].map((f) => (
                <div key={f.t} className="flex flex-col items-center rounded-xl border border-border bg-card p-3 text-center">
                  <f.icon className="h-4 w-4 text-burgundy" />
                  <div className="mt-1.5 text-[10px] font-semibold text-ink">{f.t}</div>
                  <div className="text-[9px] text-muted-foreground">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
