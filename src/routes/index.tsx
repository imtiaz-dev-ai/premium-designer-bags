import { createFileRoute } from "@tanstack/react-router";
import { getSettings, defaultSettings, getSiteBrands } from "@/lib/store";
import { CATEGORY_PAGES, BRANDS, FEATURED_BRANDS, brandToSlug } from "@/lib/catalog";
import { useState, useEffect } from "react";
import { getCartCount } from "@/lib/cart-store";
import { Menu, X, Search, ShoppingBag, MapPin, Phone, ChevronDown, Truck, ShieldCheck, MessageCircle, RotateCcw, Mail, Star, Sparkles } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import zelleQr from "@/assets/zelle-qr.jpeg";
import venmoQr from "@/assets/venmo-qr.jpeg";
import heroBag from "@/assets/hero-bag.jpg";
import logoImg from "@/assets/Logo.png";
import lvBag1 from "@/assets/bags/lv/1.jpeg";
import lvBag2 from "@/assets/bags/lv/2.jpeg";
import lvBag3 from "@/assets/bags/lv/3.jpeg";
import lvBag4 from "@/assets/bags/lv/4.jpeg";
import lvBag5 from "@/assets/bags/lv/5.jpeg";
import chanelBag1 from "@/assets/bags/Chanel/1.jpeg";
import chanelBag2 from "@/assets/bags/Chanel/2.jpeg";
import chanelBag3 from "@/assets/bags/Chanel/3.jpeg";
import gucciBag1 from "@/assets/bags/Gucci/1.jpeg";
import gucciBag2 from "@/assets/bags/Gucci/2.jpeg";
import yslBag1 from "@/assets/bags/Ysl/1.jpeg";
import yslBag2 from "@/assets/bags/Ysl/2.jpeg";
import hermesShoe1 from "@/assets/shoes/Hermes/1.jpeg";
import chanelShoe1 from "@/assets/shoes/Chanel/1.jpeg";
import lvShoe1 from "@/assets/shoes/Lv/1.jpeg";
import gucciShoe1 from "@/assets/shoes/Gucci/1.jpeg";
import diorShoe1 from "@/assets/shoes/Dior/1.jpeg";
import pradaShoe1 from "@/assets/shoes/Prada/1.jpeg";
import chanelSun1 from "@/assets/sunglasses/Chanel sunglasses/1.jpeg";
import pradaSun1 from "@/assets/sunglasses/Prada sunglasses/1.jpeg";
import hermesBelt1 from "@/assets/belts/Hermes belts/1.jpeg";
import lvBelt1 from "@/assets/belts/Lv belts/1.jpeg";
import lvScarf1 from "@/assets/Scarfs/Lv scarves/1.jpeg";
import lvHat1 from "@/assets/hats/Lv hats/1.jpeg";
import cartierWatch1 from "@/assets/watchs/Cartier watches women/1.jpeg";
import cartier1 from "@/assets/jewelry/Cartier/1.jpeg";
import bvlgari1 from "@/assets/jewelry/Bvlgari jewelry/1.jpeg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Designer Bags — Luxury Louis Vuitton, Chanel, Hermès from Italy & Dubai" },
      { name: "description", content: "Shop authentic luxury designer bags, shoes, jewelry and accessories. Louis Vuitton, Chanel, Hermès, Dior sourced from Italy & Dubai. WhatsApp ordering, worldwide delivery." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Premium Designer Bags — Luxury Fashion from Italy & Dubai" },
      { property: "og:description", content: "Authentic luxury bags, shoes, jewelry from Italy & Dubai. WhatsApp ordering, worldwide delivery." },
      { property: "og:url", content: "https://premiumdesignerbags.com" },
      { property: "og:image", content: "https://premiumdesignerbags.com/og-image.jpg" },
    ],
  }),
  component: Index,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

type Product = { title: string; price: string; tag?: string; img: string };


const SHOES: Product[] = [
  { title: "Hermès Oran Sandal — Gold Epsom Leather", price: "$389", tag: "Hermès", img: hermesShoe1 },
  { title: "Chanel Slingback Pump — Black & Beige Cap-Toe", price: "$329", tag: "Chanel", img: chanelShoe1 },
  { title: "Louis Vuitton Archlight 2.0 Sneaker — White", price: "$349", tag: "LV", img: lvShoe1 },
  { title: "Gucci Horsebit 1953 Loafer — Brown GG Canvas", price: "$289", tag: "Gucci", img: gucciShoe1 },
  { title: "Dior J'Adior Slingback Pump — Black Mesh", price: "$319", tag: "Dior", img: diorShoe1 },
  { title: "Prada Monolith Brushed Leather Boot — Black", price: "$429", tag: "Prada", img: pradaShoe1 },
  { title: "Bottega Veneta Stretch Flat Sandal — Cream", price: "$359", tag: "BV", img: heroBag },
  { title: "Celine Triomphe Ballet Flat — Tan Calfskin", price: "$279", tag: "Celine", img: heroBag },
  { title: "Loewe Toy Puffy Mule — Ivory Nappa", price: "$299", tag: "Loewe", img: heroBag },
  { title: "Fendi Baguette Sandal — FF Jacquard Strap", price: "$309", tag: "Fendi", img: heroBag },
  { title: "Coach Lowline Low Top Sneaker — Signature", price: "$189", tag: "Coach", img: heroBag },
  { title: "Goyard Artois Sneaker — White Goyardine", price: "$349", tag: "Goyard", img: heroBag },
];

const BESTSELLERS: Product[] = [
  { title: "LV Neverfull MM Tote M27358", price: "$369", tag: "LV", img: lvBag1 },
  { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1 },
  { title: "Hermès Birkin 30 — Chocolate Togo, Gold Hardware", price: "$849", tag: "Hermès", img: heroBag },
  { title: "Gucci GG Marmont Bag — Beige", price: "$490", tag: "Gucci", img: gucciBag1 },
  { title: "Chanel Maxi Flapbag AS6233 — Blush", price: "$539", tag: "Chanel", img: chanelBag2 },
  { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: yslBag1 },
  { title: "Bottega Veneta Cream Bucket Bag", price: "$329", tag: "BV", img: heroBag },
  { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4 },
];

const COLLECTION: Product[] = [
  { title: "LV Neverfull MM Tote M27358 — 47×28×14 cm", price: "$369", tag: "LV", img: lvBag1 },
  { title: "LV OnTheGo PM M28181", price: "$369", tag: "LV", img: lvBag2 },
  { title: "LV Speedy 30 Soft Celebration M28379", price: "$349", tag: "LV", img: lvBag3 },
  { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4 },
  { title: "LV Side Trunk PM M27436", price: "$349", tag: "LV", img: lvBag5 },
  { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1 },
  { title: "Chanel Classic Flap Medium — Black Caviar", price: "$780", tag: "Chanel", img: chanelBag3 },
  { title: "Gucci GG Marmont Bag — Beige", price: "$490", tag: "Gucci", img: gucciBag2 },
  { title: "Gucci Blondie Top Handle Bag", price: "$620", tag: "Gucci", img: gucciBag1 },
  { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: yslBag1 },
  { title: "Saint Laurent Lou Camera — Beige Quilted", price: "$258", tag: "YSL", img: yslBag2 },
  { title: "Cartier Ballon Bleu 33mm — Steel", price: "$6,900", tag: "Cartier", img: cartierWatch1 },
  { title: "Cartier Love Bracelet — Yellow Gold", price: "$6,200", tag: "Cartier", img: cartier1 },
  { title: "Bvlgari B.zero1 Ring — White Gold", price: "$2,200", tag: "Bvlgari", img: bvlgari1 },
  { title: "Chanel Round Sunglasses — Black", price: "$389", tag: "Chanel", img: chanelSun1 },
  { title: "Prada Symbole Sunglasses — Black", price: "$329", tag: "Prada", img: pradaSun1 },
  { title: "Hermès Constance Belt 32mm — Black", price: "$690", tag: "Hermès", img: hermesBelt1 },
  { title: "LV Initiales Belt 40mm — Monogram", price: "$480", tag: "LV", img: lvBelt1 },
  { title: "LV Monogram Silk Scarf", price: "$289", tag: "LV", img: lvScarf1 },
  { title: "LV Monogram Bucket Hat", price: "$389", tag: "LV", img: lvHat1 },
];

function Index() {
  const settings = getSettings();
  const wa = settings.whatsappLink || defaultSettings.whatsappLink;
  const activeBrands = getSiteBrands() ?? BRANDS;

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <TopBar settings={settings} />
      <Header />
      <Hero wa={wa} />
      <Marquee items={settings.marqueeItems} />
      <FeaturesStrip wa={settings.whatsapp} />
      <CategoriesGrid />
      <BrandsStrip brands={activeBrands} />
      <ValueProps />
      <Reviews />
      <CTASection wa={settings.whatsapp} waLink={settings.whatsappLink} />
      <Footer settings={settings} activeBrands={activeBrands} />
    </div>
  );
}

function TopBar({ settings }: { settings: ReturnType<typeof getSettings> }) {
  return (
    <div className="text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-gold" />
          <span>Italy · Dubai · UK · USA · Worldwide Delivery</span>
          <span className="hidden items-center gap-1.5 sm:flex ml-4"><Sparkles className="h-3 w-3 text-gold" /> Curated designer sourcing, real photos before shipping</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-1.5 hover:text-gold">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span className="hidden sm:inline">@the_diamond_lux</span>
          </a>
          <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-1.5 hover:text-gold">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            <span className="hidden sm:inline">@luxlovebags</span>
          </a>
          <a href={settings.whatsappLink} className="flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3 w-3 text-gold" /> {settings.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { href: "/categories/bags",       label: "Bags",       brands: ["Louis Vuitton", "Chanel", "Herm\u00e8s", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent", "Bottega Veneta", "Goyard"] },
  { href: "/categories/shoes",      label: "Shoes",      brands: ["Herm\u00e8s", "Chanel", "Louis Vuitton", "Fendi", "Gucci", "Dior", "Bottega Veneta", "Celine", "Loewe", "Prada"] },
  { href: "/categories/jewelry",    label: "Jewelry",    brands: ["Cartier", "Tiffany & Co", "Van Cleef & Arpels", "Herm\u00e8s", "Chanel", "Gucci"] },
  { href: "/categories/watches",    label: "Watches",    brands: ["Cartier", "Herm\u00e8s", "Rolex", "Omega", "Patek Philippe", "Tag Heuer"] },
  { href: "/categories/clothes",    label: "Clothes",    brands: ["Loro Piana", "Gucci", "Prada", "Burberry", "Valentino", "Saint Laurent"] },
  { href: "/categories/hats",       label: "Hats",       brands: ["Louis Vuitton", "Gucci", "Prada", "Burberry", "Fendi", "Chanel"] },
  { href: "/categories/scarfs",     label: "Scarfs",     brands: ["Herm\u00e8s", "Gucci", "Louis Vuitton", "Burberry", "Chanel", "Fendi"] },
  { href: "/categories/sunglasses", label: "Sunglasses", brands: ["Chanel", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent"] },
  { href: "/categories/belts",      label: "Belts",      brands: ["Louis Vuitton", "Gucci", "Herm\u00e8s", "Prada", "Fendi", "Bottega Veneta"] },
  { href: "/about",                  label: "About",      brands: [] },
  { href: "#contact",               label: "Contact",    brands: [] },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => { setCartCount(getCartCount()); }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Premium Designer Bags" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
            <span className="text-[10px] font-medium tracking-[0.45em] text-gold uppercase">Elevated.</span>
          </div>
        </a>
        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
          <a href="/" className="hover:text-burgundy">Home</a>
          {NAV_LINKS.map((l) => (
            l.brands.length === 0 ? (
              <a key={l.href} href={l.href} className="hover:text-burgundy">{l.label}</a>
            ) : (
              <div key={l.href} className="relative"
                onMouseEnter={() => setActiveDropdown(l.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={l.href} className="flex items-center gap-0.5 hover:text-burgundy">
                  {l.label} <ChevronDown className="h-3 w-3" />
                </a>
                {activeDropdown === l.label && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-44 rounded-xl border border-border bg-card py-2 shadow-2xl">
                    {l.brands.map((brand) => (
                      <a key={brand} href={`${l.href}?brand=${encodeURIComponent(brand)}`}
                        className="block px-4 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-burgundy"
                      >
                        {brand}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden p-2 hover:text-burgundy md:block"><Search className="h-5 w-5" /></button>
          <a href={WHATSAPP_LINK} className="hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90 md:inline-flex" style={{ background: "var(--gradient-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button aria-label="Cart" className="relative p-2 hover:text-burgundy" onClick={() => window.location.href = '/cart'}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">{cartCount}</span>}
          </button>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
            <a href="/" className="block border-b border-border py-3 text-sm font-semibold text-burgundy">Home</a>
            {NAV_LINKS.map((l, i) => (
              l.brands.length === 0 ? (
                <a key={l.href} href={l.href} className="block py-3 text-sm font-semibold text-muted-foreground">{l.label}</a>
              ) : (
                <details key={l.href} className={`border-b border-border py-1${i === NAV_LINKS.length - 1 ? "" : ""}`}>
                  <summary className="cursor-pointer py-2 text-sm font-semibold text-muted-foreground">{l.label}</summary>
                  <ul className="pl-4 pb-2 space-y-1">
                    {l.brands.map((brand) => (
                      <li key={brand}>
                        <a href={`${l.href}?brand=${encodeURIComponent(brand)}`} className="block py-1 text-xs text-muted-foreground hover:text-burgundy">{brand}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ wa }: { wa: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "radial-gradient(ellipse at top right, oklch(0.88 0.08 80 / 0.6), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 30 / 0.5), transparent 55%)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
            <Sparkles className="h-3 w-3" /> Italy & Dubai · Est. 2024
          </p>
          <h1 className="text-5xl font-medium tracking-tight text-ink md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Premium Designer Bags
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            A curated house of premium designer fashion — Louis Vuitton, Chanel, Hermès, Dior and more — hand-shipped from Italy & Dubai with real-photo confirmation.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/categories/bags" className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:opacity-90" style={{ background: "var(--gradient-luxe)" }}>
              Shop Collection
            </a>
            <a href={wa} className="inline-flex items-center gap-2 border-2 border-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="15K+" l="Happy Clients" />
            <Stat n="50+" l="Designer Brands" />
            <Stat n="98%" l="Satisfaction" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-gold lg:block" />
          <img src={heroModel} alt="Editorial fashion shot — woman holding burgundy designer handbag" width={1024} height={1280} className="relative aspect-[4/5] w-full object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-luxe)" }} />
          <div className="absolute -bottom-6 -left-6 hidden w-56 bg-card p-5 shadow-2xl md:block" style={{ boxShadow: "var(--shadow-luxe)" }}>
            <img src={heroBag} alt="Featured bag" width={1600} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold">Featured</p>
                <p className="text-xs font-semibold leading-tight">Neverfull MM</p>
              </div>
              <span className="text-sm font-bold text-burgundy">$369</span>
            </div>
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-1 bg-cream/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy backdrop-blur">
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

type PaymentMethod = {
  name: string;
  icon: React.ReactNode;
  details?: string[];
  qrUrl?: string;
  isScreenshot?: boolean;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: "PayPal",
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082H9.825l-1.48 9.354h3.53l.964-6.104h2.282c4.947 0 7.878-2.394 8.796-7.145a5.58 5.58 0 0 0-.695-1.9z"/></svg>,
    details: ["Email: romaboma242@gmail.com"],
  },
  { name: "Credit Card", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg> },
  {
    name: "Zelle",
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13.56 2H4.5L2 12.04h6.31L3.56 22H19.5l2.5-10.04h-6.31L20.44 2h-6.88z"/></svg>,
    details: ["Scan the QR code below using your bank app"],
    qrUrl: zelleQr,
    isScreenshot: true,
  },
  {
    name: "Venmo",
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.07 2c.8 1.32 1.16 2.68 1.16 4.4 0 5.48-4.68 12.6-8.48 17.6H4.93L2 2.96l6.32-.6 1.56 12.68C11.32 12.2 13.63 7.4 13.63 4c0-1.08-.16-1.92-.44-2.64L19.07 2z"/></svg>,
    details: ["Scan the QR code below in Venmo app"],
    qrUrl: venmoQr,
    isScreenshot: true,
  },
  {
    name: "Bank Transfer",
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>,
    details: [
      "Account: 20000043505429",
      "Holder: Haikou Weiyu Trading Co., Ltd.",
      "Bank: JPMorgan Chase Bank N.A. New York",
      "Address: 270 Park Ave. New York, NY 10017",
      "Account Type: Checking",
      "SWIFT/BIC: CHASUS33",
      "ACH Routing: 028000024",
      "Wire Routing: 021000021",
    ],
  },
  {
    name: "Cash App",
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25 2.84a9 9 0 1 0 0 18.32A9 9 0 0 0 14.25 2.84ZM12 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm.97 3.72-.3 1.06a3.17 3.17 0 0 1 1.96 1.03l-1.05.9a1.87 1.87 0 0 0-1.3-.56c-.48 0-.78.22-.78.55 0 .9 3.22.57 3.22 2.76 0 1.08-.8 1.87-2.05 2.06l-.3 1.08h-1.1l.3-1.1a3.6 3.6 0 0 1-2.24-1.2l1.07-.9c.4.5.96.82 1.6.82.56 0 .92-.25.92-.62 0-.94-3.22-.58-3.22-2.78 0-1.04.77-1.82 1.97-2.02l.3-1.08h1.0z"/></svg>,
    details: ["Cash App: $romabomaye242"],
  },
];

function CollectionToolbar() {
  const [inStock, setInStock] = useState(true);
  const [sort, setSort] = useState("Default");
  const [show, setShow] = useState("20");
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs">
      <label className="flex cursor-pointer items-center gap-2 border border-border bg-card px-3 py-2 hover:border-gold">
        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} className="accent-burgundy" />
        In stock only
      </label>
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-border bg-card px-3 py-2 text-xs font-medium text-foreground hover:border-gold focus:outline-none">
        <option>Default</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>
      <select value={show} onChange={(e) => setShow(e.target.value)} className="border border-border bg-card px-3 py-2 text-xs font-medium text-foreground hover:border-gold focus:outline-none">
        <option>20</option>
        <option>40</option>
        <option>All</option>
      </select>
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
    { icon: Truck, t: "Worldwide Delivery", d: "Fast shipping from Italy & Dubai" },
    { icon: ShieldCheck, t: "Authenticity Promise", d: "All products verified by our team" },
    { icon: MessageCircle, t: "WhatsApp Support", d: wa },
    { icon: RotateCcw, t: "Hassle-Free Service", d: "Personalized sourcing and follow-up" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
        {items.map((it) => (
          <div key={it.t} className="flex items-center gap-4 px-5 py-7 transition hover:bg-secondary/40">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-burgundy">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink">{it.t}</div>
              <div className="truncate text-xs text-muted-foreground">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function utf8Base64Encode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const id = utf8Base64Encode(JSON.stringify({ title: p.title, price: p.price, tag: p.tag ?? "Luxury", imgIndex: index }));
  return (
    <a href={`/products/${id}`} className="group block overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-t-[1.5rem] bg-card">
        <img src={p.img} alt={p.title} width={1024} height={1024} loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" />
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
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">Tap to enquire and reserve this product directly via WhatsApp.</p>
      </div>
    </a>
  );
}

function ProductSection({ id, title, subtitle, products, showToolbar }: { id: string; title: string; subtitle: string; products: Product[]; showToolbar?: boolean }) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— {title}</p>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>{subtitle}</h2>
          </div>
          {showToolbar && <CollectionToolbar />}
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => <ProductCard key={i} p={p} index={i} />)}
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-gold">✦ All products loaded ✦</p>
      </div>
    </section>
  );
}

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

function CategoriesGrid() {
  return (
    <section className="relative border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Categories</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {HOME_CATEGORIES.map((cat) => (
            <a key={cat.slug} href={`/categories/${cat.slug}`} className="group flex flex-col items-center gap-3">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-border shadow-lg transition duration-300 group-hover:border-gold group-hover:shadow-2xl md:h-36 md:w-36">
                <img src={cat.img} alt={cat.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-black/25 transition group-hover:bg-black/5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink transition group-hover:text-burgundy">{cat.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function brandLogoInitials(name: string) {
  const known: Record<string, string> = {
    "Louis Vuitton": "LV", "Bottega Veneta": "BV", "Saint Laurent": "SL",
    "Van Cleef & Arpels": "VA", "Tiffany & Co": "TC", "Hermès": "H",
    "Loro Piana": "LP", "The Row": "TR", "Balenciaga": "BB", "Patek Philippe": "PP",
    "Tag Heuer": "TH",
  };
  if (known[name]) return known[name];
  return name.split(/\s+/).filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function brandLogoColor(name: string) {
  const colors: Record<string, string> = {
    "Louis Vuitton": "#3c2a1a", "Chanel": "#000000", "Hermès": "#e78a00",
    "Dior": "#4f4f4f", "Gucci": "#18412f", "Prada": "#1c1f25",
    "Celine": "#0b0b0b", "Saint Laurent": "#101010", "Bottega Veneta": "#2f2d28",
    "Loewe": "#332d27", "Cartier": "#8b0000", "Bvlgari": "#1a1a6e",
    "Rolex": "#155724", "Omega": "#003366", "Burberry": "#8b6914",
    "Loro Piana": "#4a3728", "Fendi": "#8b7536", "Valentino": "#8b0000",
    "Chloé": "#c4956a", "Goyard": "#2d5a27", "Loewe": "#332d27",
    "Messika": "#b8860b", "Tiffany & Co": "#0abab5", "Van Cleef & Arpels": "#1a1a2e",
    "Patek Philippe": "#1a2744", "Tag Heuer": "#cc0000", "Dior": "#4f4f4f",
  };
  if (colors[name]) return colors[name];
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return `hsl(${hash % 360} 40% 30%)`;
}

function BrandsStrip({ brands: _brands }: { brands: string[] }) {
  return (
    <section id="brands" className="border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By Brand</p>
          <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Our Brands</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">Select a house to explore its full collection.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {FEATURED_BRANDS.map((brand) => (
            <a
              key={brand}
              href={`/brand/${brandToSlug(brand)}`}
              className="group flex flex-col items-center justify-center gap-3 bg-card px-4 py-8 text-center transition hover:bg-secondary"
            >
              <span
                className="text-base font-medium tracking-wide text-ink transition group-hover:text-burgundy"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                {brand}
              </span>
              <span className="h-px w-8 bg-gold opacity-0 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
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
      <img src={collectionBanner} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 20 / 0.92), oklch(0.18 0.018 35 / 0.88))" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Why Premium Designer Fashion</p>
          <h2 className="text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            A house built on <span className="italic text-gold">trust</span>, craft, and discretion.
          </h2>
        </div>
        <div className="grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {props.map((p, i) => (
            <div key={p.t} className="group p-8 backdrop-blur-sm transition hover:bg-gold/10" style={{ background: "oklch(0.18 0.018 35 / 0.6)" }}>
              <div className="mb-5 text-3xl font-medium text-gold" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
              <h3 className="mb-3 text-xl" style={{ fontFamily: "var(--font-display)" }}>{p.t}</h3>
              <p className="text-sm leading-relaxed opacity-75">{p.d}</p>
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
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Ready to Order?</p>
        <h2 className="mx-auto max-w-3xl text-5xl tracking-tight text-ink md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Request your luxury item with <span className="italic text-burgundy">private WhatsApp support.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          We accept orders exclusively via WhatsApp for the most personal, white-glove service.
        </p>
        <a href={waLink} className="mt-9 inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp — {wa}
        </a>
        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Accepted Payments</p>
        <div className="mx-auto mt-4 grid max-w-4xl gap-6 lg:grid-cols-2">
          {PAYMENT_METHODS.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-background p-6 text-center shadow-sm transition hover:border-gold hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-burgundy">{m.icon}</div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-foreground">{m.name}</div>
              {m.details && (
                <div className="mt-3 space-y-1 text-[11px] leading-5 text-muted-foreground">
                  {m.details.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              )}
              {m.qrUrl && (
                <img src={m.qrUrl} alt={`${m.name} QR code`} className={`mx-auto mt-4 rounded-3xl border border-border object-cover ${m.isScreenshot ? "w-full max-w-xs" : "h-40 w-40"}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Sarah M.", location: "New York, USA", rating: 5, text: "Absolutely love my Chanel bag! Real photos were sent before shipping and it arrived perfectly packed. 10/10 service.", item: "Chanel Classic Flap" },
  { name: "Fatima A.", location: "Dubai, UAE", rating: 5, text: "Fast response on WhatsApp, very professional. The Hermès Birkin I ordered is stunning. Will definitely order again.", item: "Hermès Birkin 30" },
  { name: "Emma L.", location: "London, UK", rating: 5, text: "I was skeptical at first but they sent real product photos before dispatch. Package arrived in 10 days. Highly recommend!", item: "LV Neverfull MM" },
  { name: "Priya K.", location: "Mumbai, India", rating: 5, text: "Best sourcing service I've used. Got my Dior bag at a great price with full photo confirmation. Super happy!", item: "Dior Lady D-Joy" },
  { name: "Jessica R.", location: "Toronto, Canada", rating: 5, text: "Communication was perfect throughout. My Gucci loafers arrived beautifully wrapped. Will be ordering more!", item: "Gucci Horsebit Loafer" },
  { name: "Nour H.", location: "Riyadh, KSA", rating: 5, text: "Trustworthy seller, quick replies and honest advice. My Saint Laurent bag is perfect. Couldn't be happier.", item: "Saint Laurent Lou Camera" },
];

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
                <div className="flex">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">{r.item}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-burgundy text-xs font-bold text-cream">
                  {r.name[0]}
                </div>
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

function Footer({ settings, activeBrands }: { settings: ReturnType<typeof getSettings>; activeBrands: string[] }) {
  return (
    <footer className="text-cream" style={{ background: "var(--gradient-luxe)" }}>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Premium Designer Bags" className="h-10 w-10 rounded-full object-cover" />
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-75">
              Curated designer fashion with premium sourcing, worldwide delivery, and fast support.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy-deep">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy-deep">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
              <a href={settings.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy-deep"><MessageCircle className="h-4 w-4" /></a>
              <a href={`mailto:${settings.email}`} aria-label="Email" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy-deep"><Mail className="h-4 w-4" /></a>
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
            <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-70">Payments: PayPal · Credit Card · Zelle · Venmo · Bank · Cash App</p>
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

