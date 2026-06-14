import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShoppingBag, MessageCircle, ChevronLeft, Star, Truck, ShieldCheck, RotateCcw, Plus, Minus, Heart } from "lucide-react";
import { addToCart, getCartCount } from "@/lib/cart-store";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/products/$id")({
  component: ProductPage,
});

const SIZES = ["XS", "S", "M", "L", "XL", "One Size"];
const WHATSAPP_LINK = "https://wa.me/393515439347";

function ProductPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    setCartCount(getCartCount());
  }, []);

  function utf8Base64Decode(value: string) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  // Decode product info from id (base64 encoded json)
  let product = { title: "Designer Bag", price: "$299", tag: "Luxury", imgs: [""], description: "" };
  try {
    const decoded = JSON.parse(utf8Base64Decode(id));
    const imgs: string[] = decoded.imgs?.length
      ? decoded.imgs
      : decoded.img
      ? [decoded.img]
      : [""];
    product = {
      title: decoded.title,
      price: decoded.price,
      tag: decoded.tag ?? "Luxury",
      imgs,
      description: decoded.description ?? "",
    };
  } catch { /* use fallback */ }

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    addToCart({
      id,
      title: product.title,
      price: product.price,
      tag: product.tag,
      img: product.imgs[0],
      size: selectedSize,
      quantity: qty,
    });
    setAdded(true);
    setCartCount(getCartCount());
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-2 text-sm font-medium hover:text-burgundy">
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
              <span className="text-[10px] font-medium tracking-[0.4em] text-gold uppercase">Elevated.</span>
            </div>
          </a>
          <button onClick={() => navigate({ to: "/cart" })} className="relative p-2 hover:text-burgundy">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted-foreground">
          <a href="/" className="hover:text-burgundy">Home</a>
          <span className="mx-2">/</span>
          <a href="/#collection" className="hover:text-burgundy">Collection</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            {product.imgs[0] ? (
              <img
                src={product.imgs[0]}
                alt={product.title}
                className="aspect-square w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            ) : (
              <div className="aspect-square w-full flex items-center justify-center bg-secondary text-muted-foreground text-sm">No Image</div>
            )}
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2.5 shadow-md transition hover:scale-110"
            >
              <Heart className={`h-5 w-5 ${wishlist ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="mb-3 inline-block w-fit rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-burgundy">
              {product.tag}
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <span className="text-sm text-muted-foreground">4.9 · 226 reviews</span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-burgundy" style={{ fontFamily: "var(--font-display)" }}>
                {product.price}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${(parseFloat(product.price.replace(/[^0-9.]/g, "")) * 1.2).toFixed(0)}
              </span>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">Save 20%</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-green-600">In Stock — Ships from Italy & Dubai</span>
            </div>

            {/* Size */}
            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-ink">Select Size</span>
                <button className="text-xs text-burgundy underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      selectedSize === s
                        ? "border-burgundy bg-burgundy text-cream"
                        : "border-border hover:border-burgundy"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-ink">Quantity</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-border px-4 py-2">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-muted-foreground hover:text-ink">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="text-muted-foreground hover:text-ink">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-xs text-muted-foreground">Max 10 per order</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest transition ${
                  added ? "bg-green-600 text-white" : "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <a
                href={WHATSAPP_LINK}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
                style={{ background: "var(--gradient-luxe)" }}
              >
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </a>
            </div>

            {added && (
              <div className="mt-3 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                <span className="text-sm text-green-700">Added to your cart!</span>
                <button onClick={() => navigate({ to: "/cart" })} className="text-sm font-semibold text-green-700 underline">
                  View Cart →
                </button>
              </div>
            )}

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-8">
              {[
                { icon: Truck, t: "Free Shipping", d: "Italy & Dubai" },
                { icon: ShieldCheck, t: "Authentic", d: "Verified product" },
                { icon: RotateCcw, t: "Easy Returns", d: "14-day policy" },
              ].map((f) => (
                <div key={f.t} className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center">
                  <f.icon className="h-5 w-5 text-burgundy" />
                  <div className="mt-2 text-xs font-semibold text-ink">{f.t}</div>
                  <div className="text-[10px] text-muted-foreground">{f.d}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">Product Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Premium quality material, sourced directly from Italy & Dubai</li>
                <li>• Real photos sent before dispatch for your confirmation</li>
                <li>• Carefully packaged with protective wrapping</li>
                <li>• Worldwide delivery with tracking number provided</li>
                <li>• WhatsApp support throughout your order journey</li>
              </ul>
            </div>

            {/* Policies quick links */}
            <div className="mt-5 flex flex-wrap gap-4 text-xs">
              <a href="/policy" className="flex items-center gap-1.5 text-muted-foreground hover:text-burgundy underline underline-offset-2">
                <RotateCcw className="h-3 w-3" /> 14-Day Returns
              </a>
              <a href="/policy" className="flex items-center gap-1.5 text-muted-foreground hover:text-burgundy underline underline-offset-2">
                <Truck className="h-3 w-3" /> Shipping Policy
              </a>
              <a href="/about" className="flex items-center gap-1.5 text-muted-foreground hover:text-burgundy underline underline-offset-2">
                <ShieldCheck className="h-3 w-3" /> About Us
              </a>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="mb-8 text-2xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Customer Reviews</h2>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} className="h-5 w-5 fill-gold text-gold" />)}</div>
            <span className="text-lg font-bold text-ink">4.9</span>
            <span className="text-sm text-muted-foreground">· 226 verified reviews</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah M.", loc: "New York", text: "Beautiful quality, arrived perfectly packed with real photos sent before shipping. Highly recommend!" },
              { name: "Emma L.", loc: "London", text: "Super fast WhatsApp replies, great communication throughout. Item exactly as shown." },
              { name: "Fatima A.", loc: "Dubai", text: "Trustworthy seller — they sent photos before dispatch. Package was gorgeous. Will order again!" },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex mb-3">{[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-burgundy text-xs font-bold text-cream">{r.name[0]}</div>
                  <div>
                    <div className="text-xs font-semibold text-ink">{r.name}</div>
                    <div className="text-[10px] text-muted-foreground">{r.loc} · Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
