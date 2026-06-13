import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronLeft, ShieldCheck, Lock } from "lucide-react";
import { getCart, getCartTotal, clearCart, saveOrder, type CartItem, type Order } from "@/lib/cart-store";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

const PAYMENT_OPTIONS = ["PayPal", "Credit Card", "Zelle", "Venmo", "Bank Transfer", "Cash App"];

function CheckoutPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"details" | "payment">("details");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", country: "",
  });
  const [payment, setPayment] = useState("PayPal");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  useEffect(() => {
    const cart = getCart();
    if (cart.length === 0) { navigate({ to: "/" }); return; }
    setItems(cart);
  }, []);

  const subtotal = getCartTotal(items);
  const shipping = 25;
  const total = subtotal + shipping;

  const set = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  function validateDetails() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.country.trim()) e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function placeOrder() {
    setLoading(true);
    const order: Order = {
      id: `PDB-${Date.now().toString(36).toUpperCase()}`,
      date: new Date().toISOString(),
      items,
      subtotal: `$${subtotal.toFixed(2)}`,
      shipping: `$${shipping.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
      customer: form,
      paymentMethod: payment,
      status: "confirmed",
    };
    setTimeout(() => {
      saveOrder(order);
      clearCart();
      navigate({ to: "/receipt", search: { orderId: order.id } });
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button onClick={() => step === "payment" ? setStep("details") : navigate({ to: "/cart" })} className="flex items-center gap-2 text-sm font-medium hover:text-burgundy">
            <ChevronLeft className="h-4 w-4" /> {step === "payment" ? "Back to Details" : "Back to Cart"}
          </button>
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            <span className="hidden text-base font-semibold text-burgundy sm:block" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
          </a>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Secure
          </div>
        </div>
        {/* Steps */}
        <div className="mx-auto flex max-w-7xl items-center gap-0 px-4 pb-0">
          {["details", "payment"].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition ${step === s ? "border-burgundy text-burgundy" : i === 0 && step === "payment" ? "border-transparent text-green-600" : "border-transparent text-muted-foreground"}`}>
                <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold ${step === s ? "bg-burgundy text-cream" : i === 0 && step === "payment" ? "bg-green-600 text-white" : "bg-border text-muted-foreground"}`}>{i + 1}</span>
                {s === "details" ? "Your Details" : "Payment"}
              </div>
              {i === 0 && <div className="h-px w-8 bg-border" />}
            </div>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            {step === "details" ? (
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="mb-6 text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Shipping Details</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" value={form.name} onChange={(v) => set("name", v)} error={errors.name} placeholder="John Doe" />
                  <Field label="Email Address *" value={form.email} onChange={(v) => set("email", v)} error={errors.email} placeholder="john@example.com" type="email" />
                  <Field label="Phone Number *" value={form.phone} onChange={(v) => set("phone", v)} error={errors.phone} placeholder="+1 234 567 8900" />
                  <Field label="Country *" value={form.country} onChange={(v) => set("country", v)} error={errors.country} placeholder="United States" />
                  <div className="sm:col-span-2">
                    <Field label="Full Address *" value={form.address} onChange={(v) => set("address", v)} error={errors.address} placeholder="123 Main Street, Apt 4B" />
                  </div>
                  <Field label="City *" value={form.city} onChange={(v) => set("city", v)} error={errors.city} placeholder="New York" />
                </div>
                <button
                  onClick={() => { if (validateDetails()) setStep("payment"); }}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
                  style={{ background: "var(--gradient-luxe)" }}
                >
                  Continue to Payment →
                </button>
              </div>
            ) : (
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="mb-6 text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Payment Method</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PAYMENT_OPTIONS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPayment(p)}
                      className={`rounded-2xl border-2 px-5 py-4 text-left transition ${payment === p ? "border-burgundy bg-burgundy/5" : "border-border hover:border-gold"}`}
                    >
                      <div className="text-sm font-semibold text-ink">{p}</div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">
                        {p === "PayPal" && "romaboma242@gmail.com"}
                        {p === "Cash App" && "$romabomaye242"}
                        {p === "Zelle" && "Via QR code scan"}
                        {p === "Venmo" && "Via QR code scan"}
                        {p === "Bank Transfer" && "JPMorgan Chase · USD"}
                        {p === "Credit Card" && "Secure card payment"}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 p-4 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
                  Payment instructions will be sent to your email after order confirmation.
                </div>
                <button
                  onClick={placeOrder}
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90 disabled:opacity-60"
                  style={{ background: "var(--gradient-luxe)" }}
                >
                  {loading ? "Placing Order..." : `Place Order · $${total.toFixed(2)}`}
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Order Summary</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-3">
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="h-14 w-14 rounded-xl object-cover" />
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-ink line-clamp-1">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <span className="text-sm font-bold text-burgundy">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-border pt-2">
                <span>Total</span><span className="text-burgundy">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({ label, value, onChange, error, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-burgundy ${error ? "border-red-400 bg-red-50" : "border-border bg-background"}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
