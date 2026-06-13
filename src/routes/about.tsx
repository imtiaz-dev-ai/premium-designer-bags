import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, ShieldCheck, Truck, Star, Sparkles } from "lucide-react";
import logoImg from "@/assets/Logo.png";
import heroModel from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Premium Designer Bags" },
      { name: "description", content: "Learn about Premium Designer Bags — luxury fashion sourced from Italy & Dubai with real photos, worldwide delivery, and WhatsApp support." },
    ],
  }),
  component: AboutPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

function AboutPage() {
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
            <a href="/policy" className="hover:text-burgundy">Policy</a>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroModel} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
            <Sparkles className="h-3 w-3" /> Italy & Dubai · Est. 2024
          </p>
          <h1 className="text-5xl tracking-tight text-ink md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            About <span className="italic text-burgundy">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We are a curated luxury fashion house sourcing authentic designer items directly from Italy & Dubai — with real-photo confirmation, worldwide shipping, and personal WhatsApp support on every order.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Our Story</p>
          <h2 className="mb-6 text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
            Built on trust, not just style.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Premium Designer Bags was founded by a passionate fashion sourcer based between Italy and Dubai — two of the world's most important fashion capitals. Our mission is simple: bring you access to authentic designer pieces at honest prices, with no middlemen and no guesswork.
            </p>
            <p>
              Every item in our collection is personally sourced and verified. Before we ship anything to you, we send real photos so you can approve what you're getting. We follow up every single order until it reaches your door.
            </p>
            <p>
              We operate exclusively via WhatsApp because we believe luxury deserves a personal touch — not an anonymous checkout flow. You speak directly with us, and we handle everything from sourcing to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Why Choose Us</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Our Promises</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Authentic Products", desc: "Every item is verified and sourced directly from trusted suppliers in Italy & Dubai." },
              { icon: Truck, title: "Worldwide Delivery", desc: "We ship to every country. Tracking number provided after dispatch." },
              { icon: Star, title: "Real Photo Confirmation", desc: "We send actual photos of your item before shipping — no surprises." },
              { icon: MessageCircle, title: "Personal WhatsApp Support", desc: "You talk directly with us. Fast replies, honest answers, zero bots." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-burgundy">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { n: "15K+", l: "Happy Clients" },
              { n: "50+", l: "Designer Brands" },
              { n: "98%", l: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl font-medium tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Start Shopping</p>
          <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
            Ready to find your <span className="italic text-burgundy">perfect piece?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Message us on WhatsApp and we'll help you find exactly what you're looking for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:-translate-y-0.5" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href="/" className="inline-flex items-center gap-2 border-2 border-burgundy px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy transition hover:bg-burgundy hover:text-cream">
              Browse Collection
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> Italy · Dubai · Worldwide Delivery
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-border bg-background px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Premium Designer Bags · <a href="/policy" className="hover:text-burgundy">Return Policy</a> · <a href="/" className="hover:text-burgundy">Shop</a>
      </footer>
    </div>
  );
}
