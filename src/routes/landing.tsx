import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Star, ShieldCheck, Truck, RotateCcw, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import heroBag from "@/assets/hero-bag.jpg";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Buy Luxury Designer Bags Online — Premium Quality | Free Worldwide Shipping" },
      { name: "description", content: "Shop premium designer bags, luxury handbags, shoes & accessories from Italy & Dubai. Louis Vuitton, Chanel, Hermès & more. Real photos before shipping. Order via WhatsApp today." },
      { name: "keywords", content: "buy designer bags online, luxury handbags, premium designer bags, Louis Vuitton handbags, Chanel bags, Hermes Birkin, Gucci bags, designer shoes women, luxury accessories worldwide shipping" },
      { name: "robots", content: "index, follow" },
      { rel: "canonical", href: "https://premiumdesignerbags.com/landing" },
      { property: "og:title", content: "Buy Luxury Designer Bags Online — Premium Designer Bags" },
      { property: "og:description", content: "Authentic luxury bags, shoes & accessories from Italy & Dubai. Real photos, worldwide shipping, WhatsApp ordering." },
      { property: "og:url", content: "https://premiumdesignerbags.com/landing" },
      { property: "og:image", content: "https://premiumdesignerbags.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const WA = "https://wa.me/393515439347";
const WA_NUM = "+39 351 543 9347";

const FEATURES = [
  { icon: ShieldCheck, title: "Authentic Quality", desc: "Every item personally verified before shipping." },
  { icon: Truck, title: "Worldwide Delivery", desc: "Fast, tracked shipping from Italy & Dubai to your door." },
  { icon: Star, title: "Real Photo Confirmation", desc: "We send actual photos of your item before dispatch." },
  { icon: RotateCcw, title: "Easy Returns", desc: "14-day hassle-free return policy." },
];

const BRANDS = ["Louis Vuitton", "Chanel", "Hermès", "Dior", "Gucci", "Prada", "Celine", "Bottega Veneta", "Saint Laurent", "Cartier"];

const REVIEWS = [
  { name: "Sarah M.", loc: "New York, USA", text: "My Chanel bag arrived perfectly. Real photos were sent before shipping — exactly as described!", item: "Chanel Classic Flap" },
  { name: "Fatima A.", loc: "Dubai, UAE", text: "Super fast WhatsApp replies, very professional. The Hermès Birkin is stunning. Will order again.", item: "Hermès Birkin 30" },
  { name: "Emma L.", loc: "London, UK", text: "Sent product photos before dispatch. Package arrived in 10 days. Highly recommend!", item: "LV Neverfull MM" },
];

const CATEGORIES = [
  { label: "Designer Bags", href: "/categories/bags" },
  { label: "Luxury Shoes", href: "/categories/shoes" },
  { label: "Jewelry", href: "/categories/jewelry" },
  { label: "Watches", href: "/categories/watches" },
  { label: "Clothes", href: "/categories/clothes" },
  { label: "Sunglasses", href: "/categories/sunglasses" },
  { label: "Belts", href: "/categories/belts" },
  { label: "Scarfs", href: "/categories/scarfs" },
];

const STATIC_PRODUCTS = [
  { title: "Chanel metal CC necklace in gold", price: "159$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/6a4108ad-1f4f-4123-b56d-dd1a1bd0e7ca.jpg" },
  { title: "Chanel 25 Handbag — Timeless", price: "330$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/db9d9685-ffbd-4ac2-ae36-f7b39d99eaf2.jpg" },
  { title: "Triomphe Buckle Reversible Strap 25MM", price: "149$", tag: "Celine", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/708178e1-7540-4221-aec4-1e6766b757c4.jpg" },
  { title: "Square Sunglasses Gold/Brown Gradient", price: "159$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/76359526-8939-4258-a1ef-1150b5016ee2.jpg" },
  { title: "Chanel Metal Quilted CC Necklace Gold", price: "159$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/c6a2e301-a3ed-4aca-8f06-b706503d24cb.jpg" },
  { title: "Celine Triomphe Belt 25MM Taurillon Leather", price: "150$", tag: "Celine", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/b65bf8ce-c76e-482f-828e-d8cf3a9334dc.jpg" },
  { title: "CHANEL Hobo Handbag Calfskin Gold Tone Metal", price: "370$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/ca1685d0-d53b-484a-9795-7d96e5015429.jpg" },
  { title: "Chanel Butterfly Sunglasses", price: "150$", tag: "Chanel", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/6fe17796-7a90-4ff9-ba38-66a1bd59c423.jpg" },
  { title: "Gucci GG Dark Green Leather Sandals", price: "249$", tag: "Gucci", img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/bfa5f11e-76ad-44f1-941a-c317a3defb0b.jpg" },
];

function LandingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top bar */}
      <div className="text-xs text-cream text-center py-2 px-4" style={{ background: "var(--gradient-luxe)" }}>
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-gold" />
          Free Worldwide Shipping · Real Photos Before Dispatch · WhatsApp Support
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-11 w-11 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
              <span className="text-[10px] font-medium tracking-[0.4em] text-gold uppercase">Italy · Dubai</span>
            </div>
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90"
            style={{ background: "var(--gradient-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> Order Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 opacity-50"
          style={{ background: "radial-gradient(ellipse at top right, oklch(0.88 0.08 80 / 0.6), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 30 / 0.5), transparent 55%)" }} />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
              <Sparkles className="h-3 w-3" /> Trusted by 15,000+ Customers Worldwide
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Premium Designer Bags, Shoes & Accessories
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Authentic luxury fashion — Louis Vuitton, Chanel, Hermès, Dior & more — sourced directly from <strong className="text-ink">Italy & Dubai</strong>. Real photos sent before shipping. Worldwide delivery.
            </p>
            <ul className="mt-6 space-y-2">
              {["100% authentic, quality-verified products", "Real photos sent before shipping", "Fast worldwide delivery with tracking", "Personal WhatsApp support on every order"].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" /> {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-xl transition hover:-translate-y-0.5"
                style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </a>
              <a href="/categories/bags"
                className="inline-flex items-center gap-2 border-2 border-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream">
                Browse Collection
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[{ n: "15K+", l: "Happy Clients" }, { n: "50+", l: "Designer Brands" }, { n: "98%", l: "Satisfaction" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-medium tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-gold lg:block" />
            <img src={heroModel} alt="Luxury designer handbag fashion editorial" width={900} height={1100}
              className="relative aspect-[4/5] w-full object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-luxe)" }} />
            <div className="absolute right-4 top-4 flex items-center gap-1 bg-cream/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy backdrop-blur">
              <Star className="h-3 w-3 fill-gold text-gold" /> Premium Quality
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 bg-card p-4 shadow-2xl md:block" style={{ boxShadow: "var(--shadow-luxe)" }}>
              <img src={heroBag} alt="Featured luxury designer bag" width={400} height={400} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="mt-3">
                <p className="text-[10px] uppercase tracking-widest text-gold">Featured</p>
                <p className="text-xs font-semibold">Neverfull MM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-3 px-5 py-6">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-burgundy">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{f.title}</div>
                <div className="text-xs text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In Stock Now */}
      <section className="border-b border-border py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— In Stock Now</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Iconic Styles, Available Now</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">Every piece sourced from verified Italian & Dubai suppliers. WhatsApp for exact availability.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STATIC_PRODUCTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition hover:border-gold hover:shadow-lg">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="h-56 w-full object-cover" loading="lazy" />
                  {p.tag && <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">{p.tag}</span>}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{p.tag}</p>
                  <h3 className="mt-1 text-lg font-medium text-ink" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.price} · Free Worldwide Shipping</p>
                  <a
                    href={`https://wa.me/393515439347?text=${encodeURIComponent(`Hi! I'm interested in: ${p.title} (${p.price})`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy hover:text-gold transition"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={`https://wa.me/393515439347?text=${encodeURIComponent("Hi! I'd like to see your full collection.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-cream transition hover:opacity-90"
              style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> See Full Collection on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="border-b border-border py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Explore</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Shop by Category</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              From designer handbags to luxury shoes, jewelry and accessories — we carry everything for the modern fashion woman.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <a key={cat.href} href={cat.href}
                className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4 text-sm font-semibold text-ink transition hover:border-gold hover:text-burgundy">
                {cat.label}
                <span className="text-gold opacity-0 transition group-hover:opacity-100">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-border py-14 px-4" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Top Houses</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>50+ Designer Brands</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map((b) => (
              <a key={b} href={`/brand/${b.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-ink transition hover:border-gold hover:text-burgundy"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                {b}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border bg-card py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Customer Reviews</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
              Loved by <span className="italic text-burgundy">15,000+</span> clients
            </h2>
            <div className="mt-3 flex justify-center gap-1">
              {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              <span className="ml-2 text-sm font-semibold text-ink">4.9/5</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-background p-6 transition hover:border-gold">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 border-t border-border pt-4 flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-burgundy text-xs font-bold text-cream">{r.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{r.name}</div>
                    <div className="text-[10px] text-muted-foreground">{r.loc} · {r.item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="border-b border-border px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-gold/40 bg-card p-10 text-center transition hover:border-gold" style={{ background: "linear-gradient(135deg, oklch(0.97 0.02 80 / 0.5), oklch(0.96 0.015 30 / 0.4))" }}>
            <div className="mb-4 text-5xl">⭐</div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">Don't See Yours?</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Custom Request
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Looking for a specific colour, size, or hardware? We source on request from our Italy and Dubai network. Tell us what you're after — we'll find it.
            </p>
            <div className="mt-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm font-semibold text-burgundy">
              Price on Request
            </div>
            <div className="mt-6">
              <a
                href={`https://wa.me/393515439347?text=${encodeURIComponent("Hi, I have a custom request. I'm looking for a specific designer item and would like your help sourcing it.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:-translate-y-0.5"
                style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}
              >
                <MessageCircle className="h-4 w-4" /> Send a Custom Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Ready to Shop?</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Get your perfect luxury piece with <span className="italic text-burgundy">personal WhatsApp support.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Message us on WhatsApp and we'll help you find exactly what you're looking for — real photos, honest pricing, worldwide delivery.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:-translate-y-0.5"
            style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp — {WA_NUM}
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> Italy · Dubai · Worldwide Delivery
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="border-t border-border px-4 py-12 text-sm leading-relaxed text-muted-foreground">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Buy Premium Designer Bags & Luxury Fashion Online</h2>
          <p className="mb-3">Welcome to Premium Designer Bags — your trusted online destination for authentic luxury designer bags, handbags, shoes, and fashion accessories sourced directly from <strong className="text-ink">Italy & Dubai</strong>. We specialize in premium fashion products for style-conscious women who value quality, elegance, and everyday luxury.</p>
          <p className="mb-3">Our curated collection features top designer brands including Louis Vuitton, Chanel, Hermès, Dior, Gucci, Prada, Celine, Bottega Veneta, Saint Laurent, and many more. Whether you're looking for an iconic handbag, a pair of designer shoes, fine jewelry, or fashion accessories, we have the perfect piece for every occasion.</p>
          <p>We offer <strong className="text-ink">worldwide shipping</strong> with fast, secure, and reliable delivery. Every order comes with real photo confirmation before shipping and personal WhatsApp support from order to delivery. Shop with confidence — premium quality, authentic products, and customer satisfaction guaranteed.</p>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Premium Designer Bags · Italy & Dubai ·{" "}
        <a href="/about" className="hover:text-burgundy">About</a> ·{" "}
        <a href="/policy" className="hover:text-burgundy">Policy</a> ·{" "}
        <a href="/" className="hover:text-burgundy">Shop</a>
      </footer>
    </div>
  );
}
