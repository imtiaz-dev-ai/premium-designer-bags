import { MessageCircle, Star, ShieldCheck, Truck, CheckCircle2, Sparkles, MapPin, Zap, Video, CreditCard, Package, ScrollText, Box, Globe, Lock } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import heroBag from "@/assets/hero-bag.jpg";
import logoImg from "@/assets/Logo.png";


const WA = "https://wa.me/393515439347";
const WA_MSG = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const STYLES = [
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/6a4108ad-1f4f-4123-b56d-dd1a1bd0e7ca.jpg", brand: "Chanel", label: "Chanel metal CC necklace in gold", price: "159$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/db9d9685-ffbd-4ac2-ae36-f7b39d99eaf2.jpg", brand: "Chanel", label: "Chanel 25 Handbag — Timeless", price: "330$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/708178e1-7540-4221-aec4-1e6766b757c4.jpg", brand: "Celine", label: "Triomphe Buckle Reversible Strap 25MM", price: "149$", tag: "Celine" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/76359526-8939-4258-a1ef-1150b5016ee2.jpg", brand: "Chanel", label: "Square Sunglasses Gold/Brown Gradient", price: "159$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/c6a2e301-a3ed-4aca-8f06-b706503d24cb.jpg", brand: "Chanel", label: "Chanel Metal Quilted CC Necklace Gold", price: "159$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/b65bf8ce-c76e-482f-828e-d8cf3a9334dc.jpg", brand: "Celine", label: "Celine Triomphe Belt 25MM Taurillon Leather", price: "150$", tag: "Celine" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/ca1685d0-d53b-484a-9795-7d96e5015429.jpg", brand: "Chanel", label: "CHANEL Hobo Handbag Calfskin Gold Tone Metal", price: "370$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/6fe17796-7a90-4ff9-ba38-66a1bd59c423.jpg", brand: "Chanel", label: "Chanel Butterfly Sunglasses", price: "150$", tag: "Chanel" },
  { img: "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products/bfa5f11e-76ad-44f1-941a-c317a3defb0b.jpg", brand: "Gucci", label: "Gucci GG Dark Green Leather Sandals", price: "249$", tag: "Gucci" },
];

const GUARANTEES = [
  { Icon: ScrollText, t: "Authenticity Card" },
  { Icon: Box, t: "Branded Packaging" },
  { Icon: Video, t: "Video Before Shipping" },
  { Icon: Globe, t: "Ships Worldwide" },
  { Icon: Lock, t: "100% Secure Payment" },
  { Icon: MessageCircle, t: "WhatsApp Support 7/7" },
];

const STEPS = [
  { n: "01", Icon: MessageCircle, t: "WhatsApp Us", d: "Message us the style you want. We'll share live stock, colours & sizes." },
  { n: "02", Icon: Video, t: "Live Video", d: "We send a WhatsApp video of your exact piece — stitching, serial, hardware." },
  { n: "03", Icon: CreditCard, t: "Secure Pay", d: "Pay via PayPal, card, Zelle, Venmo, or bank transfer. Fully protected." },
  { n: "04", Icon: Package, t: "Express Delivery", d: "Insured, tracked delivery worldwide in 7–18 days. Straight to your door." },
];

const REVIEWS = [
  { name: "Sophie M.", loc: "London, UK", text: "The WhatsApp video call put my mind at ease. Arrived with authenticity card, perfectly packed. Couldn't be happier.", item: "Chanel Classic Flap" },
  { name: "Fatima A.", loc: "Dubai, UAE", text: "Price was way lower than the boutique. Authenticity card matched perfectly. Fast shipping — incredible service.", item: "LV Neverfull MM" },
  { name: "Priya K.", loc: "Singapore", text: "Found my dream bag that was sold out everywhere. Sourced from Italy in under a week. Exceptional.", item: "Hermès Birkin 30" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>

      {/* Announcement bar */}
      <div className="text-center py-2 px-4 text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Sparkles className="h-3 w-3 text-gold shrink-0" />
          Authentic Luxury · Sourced from Italy & Dubai · Worldwide Delivery · WhatsApp for Instant Availability
          <Sparkles className="h-3 w-3 text-gold shrink-0" />
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Italy · Dubai · Est. 2024</div>
            </div>
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream transition hover:opacity-90"
            style={{ background: "var(--gradient-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(ellipse at top right, oklch(0.88 0.08 80 / 0.6), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 30 / 0.5), transparent 55%)" }} />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
              <Sparkles className="h-3 w-3" /> 5,000+ Happy Clients Worldwide
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Luxury Designer Bags,<br />
              <span className="italic text-burgundy">Directly Sourced</span><br />
              from Italy & Dubai
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              100% authentic Chanel, Louis Vuitton, Hermès, Dior & more — with original packaging, authenticity cards, and live video verification before you pay.
            </p>
            <ul className="mt-5 space-y-2">
              {["Authenticity card & original packaging included", "Live WhatsApp video of your exact piece", "Insured & tracked worldwide delivery", "Replies in under 10 minutes · 7 days a week"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_MSG("Hi! I'd like to check availability and pricing for a designer bag.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream shadow-xl transition hover:-translate-y-0.5"
                style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
                <MessageCircle className="h-4 w-4" /> WhatsApp for Availability
              </a>
              <a href="/categories/bags"
                className="inline-flex items-center gap-2 border-2 border-burgundy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream">
                Browse Collection
              </a>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-gold" /> Typically replies in under 10 minutes · Available 7 days a week
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[{ n: "100%", l: "Authentic" }, { n: "5,000+", l: "Happy Clients" }, { n: "60+", l: "Countries" }].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-medium tracking-tight text-burgundy md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-gold lg:block" />
            <img src={heroModel} alt="Luxury designer bag" className="relative aspect-[4/5] w-full object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-luxe)" }} />
            <div className="absolute right-3 top-3 flex items-center gap-1 bg-cream/95 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-burgundy backdrop-blur">
              <Star className="h-3 w-3 fill-gold text-gold" /> Authentic Luxury
            </div>
            <div className="absolute -bottom-5 -left-5 hidden w-44 bg-card p-4 shadow-2xl md:block" style={{ boxShadow: "var(--shadow-luxe)" }}>
              <img src={heroBag} alt="Featured bag" className="aspect-square w-full object-cover" />
              <div className="mt-2 text-[10px] uppercase tracking-widest text-gold">Featured</div>
              <div className="text-xs font-semibold">Chanel 25 Handbag · 330$</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee badges */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {GUARANTEES.map((g) => (
              <div key={g.t} className="flex items-center gap-2 text-sm font-medium text-ink">
                <g.Icon className="h-4 w-4 shrink-0 text-gold" /> {g.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection grid */}
      <section className="border-b border-border py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— In Stock Now</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Iconic Styles, Available Now</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">Every piece sourced from verified Italian & Dubai suppliers. WhatsApp for exact availability.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STYLES.map((s) => (
              <a key={s.label} href={WA_MSG(`Hi! I'm interested in the ${s.brand} ${s.label}. Can you check availability?`)} target="_blank" rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-gold hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img src={s.img} alt={s.label} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">{s.tag}</span>
                </div>
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{s.brand}</div>
                  <div className="mt-1 text-base font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.label}</div>
                  <div className="mt-1 text-sm font-bold text-burgundy">{s.price} · Free Worldwide Shipping</div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground group-hover:text-burgundy transition">
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp →
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_MSG("Hi! I'd like to see your full collection. What do you have available?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-burgundy px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream">
              <MessageCircle className="h-4 w-4" /> See Full Collection on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border py-16 px-4" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Simple Process</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Your Bag, Delivered in 4 Steps</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-burgundy">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{s.n}</div>
                <div className="mb-2 text-base font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.t}</div>
                <div className="text-sm leading-relaxed text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border bg-card py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Client Stories</p>
            <h2 className="text-4xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>5,000+ Clients Trust Us</h2>
            <div className="mt-3 flex justify-center gap-1">
              {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              <span className="ml-2 text-sm font-semibold">4.9 / 5</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-background p-6 transition hover:border-gold">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 border-t border-border pt-4 flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-burgundy text-xs font-bold text-cream">{r.name[0]}</div>
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

      {/* Final CTA */}
      <section className="relative overflow-hidden border-b border-border py-20 px-4 text-cream">
        <img src={heroModel} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 20 / 0.93), oklch(0.18 0.018 35 / 0.9))" }} />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">✦ Limited Availability · Act Now ✦</p>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Ready for Your<br /><span className="italic text-gold">Luxury Moment?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed opacity-80">
            Stock moves fast. WhatsApp us now to check live availability, see real photos and videos, and reserve yours before it sells.
          </p>
          <a href={WA_MSG("Hi! I'm ready to order. Can you show me what's available right now?")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-burgundy shadow-2xl transition hover:-translate-y-0.5">
            <MessageCircle className="h-4 w-4" /> WhatsApp for Availability
          </a>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs opacity-70">
            <Zap className="h-3.5 w-3.5 text-gold" /> Replies in under 10 minutes · Open 7 days · 100% Confidential
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Chanel", "Louis Vuitton", "Hermès", "Dior", "Gucci", "Other Style"].map((b) => (
              <a key={b} href={WA_MSG(`Hi! I'm looking for a ${b} bag. What do you have available?`)} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-cream/90 transition hover:border-gold hover:text-gold">
                {b}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--gradient-luxe)" }} className="text-cream">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</div>
                  <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Italy · Dubai · Est. 2024</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed opacity-70">Authentic luxury designer bags sourced directly from Italy & Dubai. Real photos, original packaging, worldwide delivery.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold hover:opacity-80">
                <MessageCircle className="h-3.5 w-3.5" /> +39 351 543 9347
              </a>
            </div>
            {/* Links */}
            <div>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Navigate</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/" className="hover:text-gold transition">Home</a></li>
                <li><a href="/categories/bags" className="hover:text-gold transition">Designer Bags</a></li>
                <li><a href="/categories/shoes" className="hover:text-gold transition">Luxury Shoes</a></li>
                <li><a href="/about" className="hover:text-gold transition">About Us</a></li>
                <li><a href="/policy" className="hover:text-gold transition">Return Policy</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Contact</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Italy & Dubai · Worldwide Shipping</li>
                <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> WhatsApp: +39 351 543 9347</li>
                <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Ships to 60+ countries</li>
              </ul>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] opacity-60">PayPal · Zelle · Venmo · Card · Bank</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-[11px] opacity-50 sm:flex-row">
            <span>© {new Date().getFullYear()} Premium Designer Bags · All Rights Reserved</span>
            <span>Italy · Dubai · Worldwide</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
