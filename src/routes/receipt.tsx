import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, Download, MessageCircle, ShoppingBag, MapPin, Mail, Phone } from "lucide-react";
import { getOrders, type Order } from "@/lib/cart-store";

export const Route = createFileRoute("/receipt")({
  validateSearch: (s: Record<string, unknown>) => ({ orderId: s.orderId as string }),
  component: ReceiptPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

function ReceiptPage() {
  const navigate = useNavigate();
  const { orderId } = Route.useSearch();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders = getOrders();
    const found = orders.find((o) => o.id === orderId);
    if (!found) { navigate({ to: "/" }); return; }
    setOrder(found);
  }, [orderId]);

  if (!order) return null;

  const date = new Date(order.date);
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const formattedTime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  function printReceipt() { window.print(); }

  return (
    <div className="min-h-screen bg-secondary/30" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Success Banner */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Order Confirmed!</h1>
          <p className="mt-2 text-muted-foreground">Thank you, {order.customer.name}. Your order has been received.</p>
        </div>

        {/* Receipt Card */}
        <div id="receipt" className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          {/* Header */}
          <div className="px-8 py-6 text-cream" style={{ background: "var(--gradient-luxe)" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</div>
                <div className="mt-0.5 text-xs tracking-widest opacity-80">Italy · Dubai · Worldwide</div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-70 uppercase tracking-widest">Order Receipt</div>
                <div className="text-lg font-bold tracking-wider">{order.id}</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Order Info */}
            <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl bg-secondary/40 p-5 text-sm">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold">Order Date</div>
                <div className="mt-1 font-medium text-ink">{formattedDate}</div>
                <div className="text-xs text-muted-foreground">{formattedTime}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold">Payment Method</div>
                <div className="mt-1 font-medium text-ink">{order.paymentMethod}</div>
                <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                  <CheckCircle className="h-3 w-3" /> Confirmed
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="mb-6">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gold">Shipping To</h3>
              <div className="rounded-2xl border border-border p-4 text-sm space-y-2">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <MapPin className="h-4 w-4 text-burgundy" /> {order.customer.name}
                </div>
                <div className="text-muted-foreground pl-6">{order.customer.address}, {order.customer.city}, {order.customer.country}</div>
                <div className="flex items-center gap-2 text-muted-foreground pl-0">
                  <Mail className="h-3.5 w-3.5" /> {order.customer.email}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" /> {order.customer.phone}
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="mb-6">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gold">Items Ordered</h3>
              <div className="space-y-3">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl border border-border p-4">
                    <img src={item.img} alt={item.title} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gold">{item.tag}</div>
                      <div className="text-sm font-semibold text-ink line-clamp-2">{item.title}</div>
                      <div className="text-xs text-muted-foreground">Size: {item.size} · Qty: {item.quantity}</div>
                    </div>
                    <div className="text-sm font-bold text-burgundy shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="rounded-2xl border border-border p-5">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gold">Payment Summary</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span><span>{order.subtotal}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span><span>{order.shipping}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base font-bold">
                  <span className="text-ink">Total Paid</span>
                  <span className="text-burgundy">{order.total}</span>
                </div>
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="mt-5 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm">
              <div className="font-semibold text-ink mb-1">Payment Instructions</div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Please complete your {order.paymentMethod} payment and send us your payment screenshot via WhatsApp with your order ID <strong className="text-ink">{order.id}</strong>. Your order will be shipped within 2-3 business days after payment confirmation.
              </p>
            </div>

            {/* Footer note */}
            <div className="mt-6 border-t border-border pt-6 text-center text-xs text-muted-foreground">
              <p>Questions? Contact us on WhatsApp: <strong className="text-ink">+39 351 543 9347</strong></p>
              <p className="mt-1">Premium Designer Bags · Italy & Dubai · {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={printReceipt}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-burgundy py-3 text-sm font-semibold text-burgundy transition hover:bg-burgundy hover:text-cream"
          >
            <Download className="h-4 w-4" /> Save / Print Receipt
          </button>
          <a
            href={WHATSAPP_LINK}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-cream transition hover:opacity-90"
            style={{ background: "var(--gradient-luxe)" }}
          >
            <MessageCircle className="h-4 w-4" /> Send Payment via WhatsApp
          </a>
        </div>
        <button
          onClick={() => navigate({ to: "/" })}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm text-muted-foreground hover:text-foreground"
        >
          <ShoppingBag className="h-4 w-4" /> Continue Shopping
        </button>
      </div>

      <style>{`@media print { header, footer, button, a[href] { display: none !important; } body { background: white; } }`}</style>
    </div>
  );
}
