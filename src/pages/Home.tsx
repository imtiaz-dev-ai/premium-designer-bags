import { getSettings, defaultSettings, getSiteBrands, getProducts, type Product } from "@/lib/store";
import { CATEGORY_PAGES, BRANDS, FEATURED_BRANDS, brandToSlug } from "@/lib/catalog";
import { useState, useEffect } from "react";
import { MapPin, Truck, ShieldCheck, MessageCircle, RotateCcw, Mail, Star, Sparkles } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import zelleQr from "@/assets/zelle-qr.jpeg";
import venmoQr from "@/assets/venmo-qr.jpeg";
import heroBag from "@/assets/hero-bag.jpg";
import SiteHeader from "@/components/SiteHeader";
import logoImg from "@/assets/Logo.png";
import brandBottega from "@/assets/bags/brands/Bottega bag.jpeg";
import brandShoes from "@/assets/brand/Shoes.jfif";
import brandJewellery from "@/assets/brand/Jewellery.jpeg";
import brandWatch from "@/assets/brand/watch.jfif";
import brandCloth from "@/assets/brand/cloth.jfif";
import brandBelt from "@/assets/brand/belt.jpeg";
import brandSunglasses from "@/assets/brand/sunglasses.jpeg";
import brandScarf from "@/assets/brand/scarf.jpg";
import brandHats from "@/assets/brand/hats.jfif";
import collectionBanner from "@/assets/hero-model.jpg";

const WHATSAPP_LINK = "https://wa.me/393515439347";

type Product = { title: string; price: string; tag?: string; img: string };

const PAYMENT_METHODS = [
  { name: "PayPal", details: ["Email: romaboma242@gmail.com"] },
  { name: "Credit Card", details: ["Secure card payment"] },
  { name: "Zelle", details: ["Scan QR code using your bank app"], qrUrl: zelleQr },
  { name: "Venmo", details: ["Scan QR code in Venmo app"], qrUrl: venmoQr },
  { name: "Bank Transfer", details: ["Account: 20000043505429", "Holder: Haikou Weiyu Trading Co., Ltd.", "Bank: JPMorgan Chase Bank N.A.", "SWIFT: CHASUS33", "ACH: 028000024"] },
  { name: "Cash App", details: ["Cash App: $romabomaye242"] },
];

const REVIEWS = [
  { name: "Sarah M.", location: "New York, USA", rating: 5, text: "Absolutely love my Chanel bag! Real photos were sent before shipping and it arrived perfectly packed. 10/10 service.", item: "Chanel Classic Flap" },
  { name: "Fatima A.", location: "Dubai, UAE", rating: 5, text: "Fast response on WhatsApp, very professional. The Hermès Birkin I ordered is stunning. Will definitely order again.", item: "Hermès Birkin 30" },
  { name: "Emma L.", location: "London, UK", rating: 5, text: "I was skeptical at first but they sent real product photos before dispatch. Package arrived in 10 days. Highly recommend!", item: "LV Neverfull MM" },
  { name: "Priya K.", location: "Mumbai, India", rating: 5, text: "Best sourcing service I've used. Got my Dior bag at a great price with full photo confirmation. Super happy!", item: "Dior Lady D-Joy" },
  { name: "Jessica R.", location: "Toronto, Canada", rating: 5, text: "Communication was perfect throughout. My Gucci loafers arrived beautifully wrapped. Will be ordering more!", item: "Gucci Horsebit Loafer" },
  { name: "Nour H.", location: "Riyadh, KSA", rating: 5, text: "Trustworthy seller, quick replies and honest advice. My Saint Laurent bag is perfect. Couldn't be happier.", item: "Saint Laurent Lou Camera" },
];

const HOME_CATEGORIES = [
  { slug: "bags",        title: "Bags",        img: brandBottega },
  { slug: "shoes",       title: "Shoes",       img: brandShoes },
  { slug: "jewelry",     title: "Jewelry",     img: brandJewellery },
  { slug: "watches",     title: "Watches",     img: brandWatch },
  { slug: "clothes",     title: "Clothes",     img: brandCloth },
  { slug: "hats",        title: "Hats",        img: brandHats },
  { slug: "scarfs",      title: "Scarfs",      img: brandScarf },
  { slug: "sunglasses",  title: "Sunglasses",  img: brandSunglasses },
  { slug: "belts",       title: "Belts",       img: brandBelt },
];

function utf8Base64Encode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export default function HomePage() {
  const settings = getSettings();
  const wa = settings.whatsappLink || defaultSettings.whatsappLink;
  const activeBrands = getSiteBrands() ?? BRANDS;
  const [bestsellers, setBestsellers] = useState<Product[]>([]);
  const [shoes, setShoes] = useState<Product[]>([]);

  useEffect(() => {
    document.title = "Premium Designer Bags — Luxury Handbags, Shoes & Accessories from Italy & Dubai";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Shop authentic luxury designer bags, shoes, jewelry and accessories. Louis Vuitton, Chanel, Hermès, Dior sourced from Italy & Dubai. WhatsApp ordering, worldwide delivery.");
    setMeta("keywords", "luxury designer bags, buy designer bags online, Louis Vuitton bags, Chanel bags, Hermès Birkin, Dior bags, Gucci bags, luxury handbags Italy, designer fashion Dubai");
    setMeta("og:title", "Premium Designer Bags — Luxury Fashion from Italy & Dubai", true);
    setMeta("og:description", "Authentic luxury bags, shoes, jewelry from Italy & Dubai. WhatsApp ordering, worldwide delivery.", true);
    setMeta("og:url", "https://premiumdesignerbags.com", true);
  }, []);

  useEffect(() => {
    getProducts().then((all) => {
      setBestsellers(all.filter((p) => p.category === "bags" || p.category === "collection").slice(0, 8));
      setShoes(all.filter((p) => p.category === "shoes").slice(0, 8));
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />
      <Hero wa={wa} />
      <Marquee items={settings.marqueeItems} />
      <FeaturesStrip wa={settings.whatsapp} />
      <CategoriesGrid />
      <BrandsStrip brands={activeBrands} />
      <ProductSection id="bestsellers" title="Bestsellers" subtitle="Client Favourites" products={bestsellers} />
      <ProductSection id="shoes" title="Shoes" subtitle="Designer Footwear" products={shoes} />
      <ValueProps />
      <Reviews />
      <CustomRequestSection wa={settings.whatsappLink} />
      <FAQ />
      <CTASection wa={settings.whatsapp} waLink={settings.whatsappLink} />
      <SeoContent />
      <Footer settings={settings} activeBrands={activeBrands} />
    </div>
  );
}

function Hero({ wa }: { wa: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at top right, oklch(0.88 0.08 80 / 0.6), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 30 / 0.5), transparent 55%)" }} />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
            <Sparkles className="h-3 w-3" /> Italy & Dubai · Est. 2024
          </p>
          <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Premium Designer Bags
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:mt-7 md:text-base">
            A curated house of premium designer fashion — Louis Vuitton, Chanel, Hermès, Dior and more — hand-shipped from Italy & Dubai with real-photo confirmation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-9">
            <a href="/categories/bags" className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:opacity-90 md:px-8 md:py-4" style={{ background: "var(--gradient-luxe)" }}>
              Shop Collection
            </a>
            <a href={wa} className="inline-flex items-center gap-2 border-2 border-burgundy px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream md:px-8 md:py-4">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 md:mt-14 md:gap-6 md:pt-8">
            <Stat n="15K+" l="Happy Clients" />
            <Stat n="50+" l="Designer Brands" />
            <Stat n="98%" l="Satisfaction" />
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-gold lg:block" />
          <img src={heroModel} alt="Editorial fashion shot" width={1024} height={1280} className="relative aspect-[4/5] w-full object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-luxe)" }} />
          <div className="absolute -bottom-6 -left-6 hidden w-48 bg-card p-4 shadow-2xl md:block" style={{ boxShadow: "var(--shadow-luxe)" }}>
            <img src={heroBag} alt="Featured bag" loading="lazy" className="aspect-square w-full object-cover" />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold">Featured</p>
                <p className="text-xs font-semibold leading-tight">Neverfull MM</p>
              </div>
              <span className="text-sm font-bold text-burgundy">$369</span>
            </div>
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-1 bg-cream/95 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy backdrop-blur">
            <Star className="h-3 w-3 fill-gold text-gold" /> Master Quality
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-4xl font-medium tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>{n}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-border py-3" style={{ background: "var(--gradient-luxe)", color: "var(--cream)" }}>
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 text-xs font-medium uppercase tracking-[0.35em]"><span className="text-gold">✦</span> {t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from {transform:translateX(0)} to {transform:translateX(-50%)} }`}</style>
    </div>
  );
}

function FeaturesStrip({ wa }: { wa: string }) {
  const items = [
    { icon: Truck, t: "Worldwide Delivery", d: "Italy & Dubai" },
    { icon: ShieldCheck, t: "Authentic", d: "Verified products" },
    { icon: MessageCircle, t: "WhatsApp", d: wa },
    { icon: RotateCcw, t: "Easy Returns", d: "Hassle-free" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {items.map((it) => (
          <div key={it.t} className="flex items-center gap-3 px-4 py-5 transition hover:bg-secondary/40 md:gap-4 md:px-5 md:py-7">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-burgundy md:h-12 md:w-12">
              <it.icon className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-ink md:text-sm">{it.t}</div>
              <div className="truncate text-[10px] text-muted-foreground md:text-xs">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  const id = utf8Base64Encode(JSON.stringify({ title: p.title, price: p.price, tag: p.tag ?? "Luxury", img: p.img, description: (p as any).description ?? "" }));
  return (
    <a href={`/products/${id}`} className="group block overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-t-[1.5rem] bg-card">
        <img src={p.img} alt={p.title} width={1024} height={1024} loading="lazy" className="h-56 w-full object-contain bg-white transition duration-700 group-hover:scale-105 sm:h-80" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-4">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-cream">
            <span>{p.tag ?? "Designer"}</span>
            <span>{p.price}</span>
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-snug text-cream">{p.title}</h3>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink shadow-sm">{p.tag ?? "Luxury"}</span>
      </div>
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>{p.tag ? `${p.tag} Piece` : "Premium"}</span>
          <span className="text-gold">WhatsApp</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">Tap to enquire and reserve this product via WhatsApp.</p>
      </div>
    </a>
  );
}

function ProductSection({ id, title, subtitle, products }: { id: string; title: string; subtitle: string; products: Product[] }) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— {title}</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>{subtitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-gold">✦ All products loaded ✦</p>
      </div>
    </section>
  );
}

function CategoriesGrid() {
  return (
    <section className="relative border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By</p>
          <h2 className="text-3xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Categories</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-16">
          {HOME_CATEGORIES.map((cat) => (
            <a key={cat.slug} href={`/categories/${cat.slug}`} className="group flex flex-col items-center gap-2 md:gap-3">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-border shadow-lg transition duration-300 group-hover:border-gold group-hover:shadow-2xl sm:h-28 sm:w-28 md:h-36 md:w-36">
                <img src={cat.img} alt={cat.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-black/25 transition group-hover:bg-black/5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition group-hover:text-burgundy md:text-xs md:tracking-[0.25em]">{cat.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsStrip({ brands: _brands }: { brands: string[] }) {
  return (
    <section id="brands" className="border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By Brand</p>
          <h2 className="text-3xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Our Brands</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Select a house to explore its full collection.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {FEATURED_BRANDS.map((brand) => (
            <a key={brand} href={`/brand/${brandToSlug(brand)}`}
              className="group flex flex-col items-center justify-center gap-2 bg-card px-3 py-6 text-center transition hover:bg-secondary md:gap-3 md:px-4 md:py-8"
            >
              <span className="text-sm font-medium tracking-wide text-ink transition group-hover:text-burgundy md:text-base" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</span>
              <span className="h-px w-6 bg-gold opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    { t: "Reliable Shipping", d: "Stable shipping methods with real photo confirmation before dispatch. We follow up every order until delivery." },
    { t: "Dedicated Service", d: "Professional customer support before and after shipping, with continuous communication throughout the process." },
    { t: "Secure Payment", d: "Secure merchant payment with buyer protection, offering a safer experience compared to private sellers." },
    { t: "VIP Benefits", d: "VIP customers enjoy better pricing, priority support, and responsible solutions for any quality-related issues." },
  ];
  return (
    <section id="about" className="relative overflow-hidden border-b border-border text-cream">
      <img src={collectionBanner} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 20 / 0.92), oklch(0.18 0.018 35 / 0.88))" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-24">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Why Premium Designer Fashion</p>
          <h2 className="text-3xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            A house built on <span className="italic text-gold">trust</span>, craft, and discretion.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((p, i) => (
            <div key={p.t} className="group p-6 backdrop-blur-sm transition hover:bg-gold/10 md:p-8" style={{ background: "oklch(0.18 0.018 35 / 0.6)" }}>
              <div className="mb-4 text-2xl font-medium text-gold md:mb-5 md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
              <h3 className="mb-2 text-lg md:mb-3 md:text-xl" style={{ fontFamily: "var(--font-display)" }}>{p.t}</h3>
              <p className="text-sm leading-relaxed opacity-75">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— What Clients Say</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Loved by <span className="italic text-burgundy">15,000+</span> customers
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[1,2,3,4,5].map((s) => <Star key={s} className="h-5 w-5 fill-gold text-gold" />)}
            <span className="ml-2 text-sm font-semibold text-ink">4.9/5</span>
            <span className="text-sm text-muted-foreground">· 15,000+ orders</span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:border-gold hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">{r.item}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-burgundy text-xs font-bold text-cream">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomRequestSection({ wa }: { wa: string }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-gold text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Don't see yours?</span>
          </div>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Custom Request</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Looking for a specific colour, size, or hardware? We source on request from our Italy and Dubai network. Tell us what you're after — we'll find it.
          </p>
          <p className="mt-6 text-xl font-semibold text-burgundy">Price on Request</p>
          <a
            href={wa}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Send a Custom Request
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const FAQS = [
    {
      q: "Are the products authentic / original?",
      a: "Yes. Every item we sell is sourced directly from verified suppliers in Italy and Dubai. We send real photos of the actual product before shipping so you can confirm authenticity yourself.",
    },
    {
      q: "How do I place an order?",
      a: "All orders are placed via WhatsApp. Simply message us with the product you want, and we'll guide you through the process personally — from photos to payment to delivery.",
    },
    {
      q: "Which countries do you ship to?",
      a: "We ship worldwide — USA, UK, Europe, Middle East, Asia, and beyond. Delivery typically takes 7–18 business days depending on your location. Express shipping is also available on request.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept PayPal, Zelle, Venmo, Cash App, Bank Transfer, and Credit Card. All payment details are shared securely via WhatsApp after you confirm your order.",
    },
    {
      q: "Can I return or get a refund?",
      a: "Yes. Returns are accepted within 14 days of delivery if the item is unused and in original condition. If an item arrives damaged or incorrect, we offer a full refund or free replacement.",
    },
    {
      q: "Do you send photos before shipping?",
      a: "Absolutely — this is standard for every order. We send real photos of your exact item before dispatch so you can approve it. No surprises, no stock images.",
    },
    {
      q: "How long does delivery take?",
      a: "Standard delivery is 7–18 business days. Express shipping is available — ask us on WhatsApp for pricing and estimated delivery time to your country.",
    },
    {
      q: "Can I request a specific item not listed on the site?",
      a: "Yes! Just message us on WhatsApp with the brand, model, colour, and size. We source directly, so we can often find pieces not shown online.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— FAQs</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked <span className="italic text-burgundy">Questions</span>
          </h2>
        </div>
        <div className="divide-y divide-border">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm font-semibold text-ink md:text-base">{faq.q}</span>
                <span className={`shrink-0 text-xl font-light text-burgundy transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ wa, waLink }: { wa: string; waLink: string }) {
  return (
    <section id="contact" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-24">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Ready to Order?</p>
        <h2 className="mx-auto max-w-3xl text-3xl tracking-tight text-ink sm:text-4xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Request your luxury item with <span className="italic text-burgundy">private WhatsApp support.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:mt-5">
          We accept orders exclusively via WhatsApp for the most personal, white-glove service.
        </p>
        <a href={waLink} className="mt-7 inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:translate-y-[-1px] md:mt-9 md:px-10" style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Accepted Payments</p>
        <div className="mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAYMENT_METHODS.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm transition hover:border-gold hover:shadow-lg">
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground">{m.name}</div>
              <div className="mt-3 space-y-1 text-[11px] leading-5 text-muted-foreground">
                {m.details.map((line) => <div key={line}>{line}</div>)}
              </div>
              {m.qrUrl && (
                <img src={m.qrUrl} alt={`${m.name} QR`} className="mx-auto mt-4 w-full max-w-xs rounded-2xl border border-border object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoContent() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-14 text-sm leading-relaxed text-muted-foreground">
        <p className="mb-4">
          Welcome to <strong className="text-ink">Premium Designer Bags</strong> — your ultimate destination for premium designer bags, luxury handbags, shoes, and accessories. We specialize in offering high-quality, stylish, and authentic luxury fashion designed to elevate your personal style.
        </p>
        <p className="mb-4">
          Our curated collection includes <strong className="text-ink">designer shoulder bags, crossbody bags, shoes, jewelry, watches, scarves, belts, sunglasses, and women's fashion accessories</strong> that suit every occasion. Whether you are looking for something elegant for formal events or a timeless piece for everyday use, we have the perfect selection for you.
        </p>
        <h2 className="mb-3 mt-6 text-base font-semibold uppercase tracking-widest text-ink">Why Choose Us?</h2>
        <p className="mb-4">
          We are committed to delivering excellence in both product quality and customer experience. Every piece in our collection is carefully sourced to ensure <strong className="text-ink">premium quality, durability, and modern design</strong>. Each product reflects sophistication and luxury, making it ideal for fashion-conscious individuals worldwide.
        </p>
        <ul className="mb-4 space-y-1 pl-4 list-disc">
          <li>100% quality assurance on every order</li>
          <li>Trendy and timeless luxury designs</li>
          <li>Real photo confirmation before every shipment</li>
          <li>Customer satisfaction guaranteed</li>
        </ul>
        <h2 className="mb-3 mt-6 text-base font-semibold uppercase tracking-widest text-ink">Worldwide Shipping & Delivery</h2>
        <p className="mb-4">
          We offer <strong className="text-ink">worldwide shipping</strong> from Italy and Dubai, ensuring customers from every region can enjoy our premium collection. Our delivery process is fast, secure, and fully tracked — with a tracking number provided after every dispatch.
        </p>
        <h2 className="mb-3 mt-6 text-base font-semibold uppercase tracking-widest text-ink">Authenticity & Quality</h2>
        <p className="mb-4">
          All our products are sourced with a focus on <strong className="text-ink">quality craftsmanship and premium materials</strong>, hand-selected from trusted suppliers in Italy and Dubai. We send real photos of your item before shipping so you can verify quality yourself — no guesswork, no surprises.
        </p>
        <p className="mt-6">
          Upgrade your style with our exclusive collection and experience the perfect blend of <strong className="text-ink">fashion, quality, and authentic luxury</strong> — all available via personal WhatsApp ordering.
        </p>
      </div>
    </section>
  );
}

function Footer({ settings, activeBrands: _activeBrands }: { settings: ReturnType<typeof getSettings>; activeBrands: string[] }) {
  return (
    <footer className="text-cream" style={{ background: "var(--gradient-luxe)" }}>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-75">Curated designer fashion with premium sourcing, worldwide delivery, and fast support.</p>
            <div className="mt-5 flex gap-3">
              <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="border border-gold/40 p-2 transition hover:bg-gold">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={settings.whatsappLink} className="border border-gold/40 p-2 transition hover:bg-gold"><MessageCircle className="h-4 w-4" /></a>
              <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" className="border border-gold/40 p-2 transition hover:bg-gold">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
              </a>
              <a href={`mailto:${settings.email}`} className="border border-gold/40 p-2 transition hover:bg-gold"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {CATEGORY_PAGES.map((page) => (
                <li key={page.slug}><a href={`/categories/${page.slug}`} className="hover:text-gold">{page.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Top Brands</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {FEATURED_BRANDS.map((l) => (
                <li key={l}><a href={`/brand/${brandToSlug(l)}`} className="hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Info</h4>
            <ul className="mb-4 space-y-2 text-sm opacity-80">
              <li><a href="/about" className="hover:text-gold">About Us</a></li>
              <li><a href="/policy" className="hover:text-gold">Return & Refund Policy</a></li>
              <li><a href="/policy" className="hover:text-gold">Shipping Policy</a></li>
            </ul>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Premium Designer — Italy & Dubai</li>
              <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> WhatsApp only: {settings.whatsapp}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {settings.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-xs opacity-70 sm:flex-row">
          <span>© {new Date().getFullYear()} Premium Designer. All rights reserved.</span>
          <span>Italy · Dubai · UK · USA · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
