import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Truck, RotateCcw, ShieldCheck, Clock, MapPin } from "lucide-react";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Return & Refund Policy — Premium Designer Bags" },
      { name: "description", content: "Read our return, refund, and shipping policies. We offer 14-day returns and worldwide delivery from Italy & Dubai." },
    ],
  }),
  component: PolicyPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

const SECTIONS = [
  {
    icon: RotateCcw,
    title: "Return Policy",
    items: [
      "Returns accepted within 14 days of delivery.",
      "Item must be unused, unworn, and in original packaging.",
      "Contact us via WhatsApp with photos of the item before returning.",
      "Return shipping cost is the responsibility of the buyer unless the item is defective or incorrect.",
      "Customised or final-sale items are non-returnable.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Refund Policy",
    items: [
      "Refunds are processed within 5–7 business days after we receive and inspect the returned item.",
      "Refunds are issued via the original payment method (PayPal, bank transfer, etc.).",
      "If an item arrives damaged or incorrect, we offer a full refund or free replacement — contact us immediately with photos.",
      "Shipping fees are non-refundable unless the error is on our side.",
    ],
  },
  {
    icon: Truck,
    title: "Shipping Policy",
    items: [
      "We ship worldwide from Italy & Dubai.",
      "Estimated delivery: 7–18 business days depending on destination.",
      "A tracking number is provided after dispatch.",
      "We send real photos of your item before shipping for your approval.",
      "Customs duties and import taxes (if any) are the buyer's responsibility.",
      "Express shipping available — ask via WhatsApp for pricing.",
    ],
  },
  {
    icon: Clock,
    title: "Order Processing",
    items: [
      "Orders are processed within 1–3 business days.",
      "We confirm every order personally via WhatsApp.",
      "You will receive photo confirmation before we ship.",
      "Orders are placed exclusively via WhatsApp for personalised service.",
    ],
  },
];

function PolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
              <span className="text-[10px] font-medium tracking-[0.45em] text-gold uppercase">Elevated.</span>
            </div>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-burgundy">Home</a>
            <a href="/about" className="hover:text-burgundy">About</a>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Policies</p>
          <h1 className="text-5xl tracking-tight text-ink md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Returns, Refunds &<br /><span className="italic text-burgundy">Shipping</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            We keep it simple and transparent. If something isn't right, we make it right. Contact us any time via WhatsApp.
          </p>
        </div>
      </section>

      {/* Policy sections */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 space-y-16">
          {SECTIONS.map((s) => (
            <div key={s.title} className="flex gap-8">
              <div className="shrink-0">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-burgundy">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h2 className="mb-5 text-2xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h2>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-3xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
            Have a question about your order?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            We respond fast on WhatsApp. Message us directly — no forms, no bots, just real support.
          </p>
          <a href={WHATSAPP_LINK} className="mt-8 inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:-translate-y-0.5" style={{ background: "var(--gradient-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> Italy · Dubai · Worldwide
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Premium Designer Bags · <a href="/about" className="hover:text-burgundy">About Us</a> · <a href="/" className="hover:text-burgundy">Shop</a>
      </footer>
    </div>
  );
}
