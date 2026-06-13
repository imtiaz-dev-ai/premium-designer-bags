import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShoppingBag, Trash2, Plus, Minus, ChevronLeft, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { getCart, saveCart, removeFromCart, updateQty, getCartTotal, type CartItem } from "@/lib/cart-store";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => { setItems(getCart()); }, []);

  function remove(id: string, size: string) {
    removeFromCart(id, size);
    setItems(getCart());
  }

  function changeQty(id: string, size: string, qty: number) {
    if (qty < 1) return;
    updateQty(id, size, qty);
    setItems(getCart());
  }

  const subtotal = getCartTotal(items);
  const shipping = subtotal > 0 ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-2 text-sm font-medium hover:text-burgundy">
            <ChevronLeft className="h-4 w-4" /> Continue Shopping
          </button>
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            <span className="hidden text-base font-semibold text-burgundy sm:block" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
          </a>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        {items.length === 0 ? (
          <div className="py-32 text-center">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/30" />
            <h2 className="mt-4 text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Discover our luxury collection and add items to your cart.</p>
            <button onClick={() => navigate({ to: "/" })} className="mt-6 inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold text-cream" style={{ background: "var(--gradient-luxe)" }}>
              Shop Now
            </button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                  <img src={item.img} alt={item.title} className="h-28 w-28 shrink-0 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{item.tag}</span>
                        <h3 className="mt-0.5 text-sm font-semibold text-ink leading-snug">{item.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">Size: {item.size}</p>
                      </div>
                      <button onClick={() => remove(item.id, item.size)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-lg border border-border px-3 py-1.5">
                        <button onClick={() => changeQty(item.id, item.size, item.quantity - 1)} className="text-muted-foreground hover:text-ink">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => changeQty(item.id, item.size, item.quantity + 1)} className="text-muted-foreground hover:text-ink">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-base font-bold text-burgundy">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-burgundy">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate({ to: "/checkout" })}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
                style={{ background: "var(--gradient-luxe)" }}
              >
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={WHATSAPP_LINK}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-burgundy py-3 text-sm font-semibold text-burgundy transition hover:bg-burgundy hover:text-cream"
              >
                Order via WhatsApp Instead
              </a>

              <div className="mt-5 space-y-2 rounded-xl bg-secondary/40 p-4 text-xs text-muted-foreground">
                <p className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-gold" /> Free worldwide shipping on orders over $500</p>
                <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Real photos sent before dispatch</p>
                <p className="flex items-center gap-2"><RotateCcw className="h-3.5 w-3.5 text-gold" /> 14-day easy returns</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
