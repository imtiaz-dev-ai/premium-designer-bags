import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ChevronLeft, Menu, X, Search, ChevronDown, MapPin, Phone, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { FEATURED_BRANDS, BRAND_CATEGORY_ORDER, getBrandProductsByCategory, slugToBrand, brandToSlug, utf8Base64Encode } from "@/lib/catalog";
import { getProducts, type Product } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { getSettings } from "@/lib/store";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/brand/$brand")({
  component: BrandPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

const NAV_LINKS = [
  { href: "/categories/bags",       label: "Bags",       brands: ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Celine", "Saint Laurent", "Bottega Veneta", "Goyard"] },
  { href: "/categories/shoes",      label: "Shoes",      brands: ["Hermès", "Chanel", "Louis Vuitton", "Gucci", "Dior", "Prada", "Valentino", "Fendi"] },
  { href: "/categories/jewelry",    label: "Jewelry",    brands: ["Cartier", "Tiffany & Co", "Van Cleef & Arpels", "Hermès", "Chanel"] },
  { href: "/categories/watches",    label: "Watches",    brands: ["Cartier", "Hermès", "Rolex", "Omega"] },
  { href: "/categories/belts",      label: "Belts",      brands: ["Louis Vuitton", "Gucci", "Hermès", "Prada", "Fendi", "Bottega Veneta"] },
  { href: "/categories/sunglasses", label: "Sunglasses", brands: ["Chanel", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent"] },
  { href: "/about",                  label: "About",      brands: [] },
];

function SiteHeader() {
  const settings = getSettings();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <>
      <div className="text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" />
            <span>Italy · Dubai · UK · USA · Worldwide Delivery</span>
          </div>
          <a href={settings.whatsappLink} className="flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3 w-3 text-gold" /> {settings.whatsapp}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-11 w-11 rounded-full object-cover" />
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
              <span className="text-[10px] font-medium tracking-[0.45em] text-gold uppercase">Elevated.</span>
            </div>
          </a>
          <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
            <a href="/" className="hover:text-burgundy">Home</a>
            {NAV_LINKS.map((l) =>
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
            )}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden p-2 hover:text-burgundy md:block"><Search className="h-5 w-5" /></button>
            <a href={WHATSAPP_LINK} className="hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90 md:inline-flex" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button aria-label="Cart" className="relative p-2 hover:text-burgundy" onClick={() => window.location.href = '/cart'}>
              <ShoppingBag className="h-5 w-5" />
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
              {NAV_LINKS.map((l) =>
                l.brands.length === 0 ? (
                  <a key={l.href} href={l.href} className="block py-3 text-sm font-semibold text-muted-foreground">{l.label}</a>
                ) : (
                  <details key={l.href} className="border-b border-border py-1">
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
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function BrandPage() {
  const { brand: brandSlug } = Route.useParams();
  const resolvedBrand = slugToBrand(decodeURIComponent(brandSlug));
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [dbBrandName, setDbBrandName] = useState<string | null>(null);

  useEffect(() => {
    const load = () =>
      getProducts().then((data) => {
        // Find products whose tag slugifies to this brandSlug
        const matched = data.filter(
          (p) => p.inStock !== false && brandToSlug(p.tag) === brandSlug
        );
        setDbProducts(matched);
        if (matched.length > 0 && !resolvedBrand) setDbBrandName(matched[0].tag);
      });
    load();
    const channel = supabase
      .channel(`brand-${brandSlug}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "products" }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [brandSlug, resolvedBrand]);

  const brand = resolvedBrand ?? dbBrandName;

  // Group DB products by category
  const dbByCategory = dbProducts.reduce<Record<string, Product[]>>((acc, p) => {
    const cat = p.category ? p.category.charAt(0).toUpperCase() + p.category.slice(1) : "Other";
    (acc[cat] ??= []).push(p);
    return acc;
  }, {});

  // Catalog static products grouped by category
  const catalogByCategory = brand ? getBrandProductsByCategory(brand) : {};

  // Merge: DB products take priority; fill remaining from catalog for any category not covered by DB
  const allCategories = Array.from(
    new Set([
      ...BRAND_CATEGORY_ORDER.filter((c) => catalogByCategory[c]?.length || dbByCategory[c]?.length),
      ...Object.keys(dbByCategory),
    ])
  );

  if (!brand) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Brand not found.</p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
            <ChevronLeft className="h-4 w-4" /> Go Home
          </a>
        </main>
      </div>
    );
  }

  const hasProducts = allCategories.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />

      {/* Hero banner */}
      <div className="border-b border-border" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-cream">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-gold">— Luxury House</p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</h1>
          <p className="mt-4 text-sm opacity-70 tracking-wide">Curated pieces sourced from Italy & Dubai</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-burgundy">Home</a>
          <span>/</span>
          <a href="/#brands" className="hover:text-burgundy">Brands</a>
          <span>/</span>
          <span className="text-ink font-medium">{brand}</span>
        </nav>

        {/* Brand nav pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FEATURED_BRANDS.map((b) => (
            <a
              key={b}
              href={`/brand/${brandToSlug(b)}`}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                b === brand
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-border text-muted-foreground hover:border-gold hover:text-burgundy"
              }`}
            >
              {b}
            </a>
          ))}
        </div>

        {!hasProducts ? (
          <div className="rounded-3xl border border-border bg-card py-20 text-center text-muted-foreground">
            <p className="text-base font-semibold text-ink mb-2">No products listed yet for {brand}.</p>
            <p className="text-sm mb-6">Contact us on WhatsApp for current stock.</p>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        ) : (
          <div className="space-y-16">
            {allCategories.map((cat) => {
              const dbItems = dbByCategory[cat] ?? [];
              const catalogItems = dbItems.length === 0 ? (catalogByCategory[cat] ?? []) : [];
              return (
                <section key={cat}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-xs font-bold uppercase tracking-[0.45em] text-gold">{cat}</h2>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* DB products for this brand+category */}
                    {dbItems.map((p) => {
                      const productId = utf8Base64Encode(JSON.stringify({ title: p.title, price: p.price, tag: p.tag, img: p.img, description: p.description ?? "" }));
                      return (
                        <div key={p.id} className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                          <a href={`/products/${productId}`}>
                            <div className="relative overflow-hidden">
                              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }} />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{cat}</span>
                              </div>
                            </div>
                          </a>
                          <div className="p-5">
                            <h3 className="text-sm font-semibold text-ink leading-snug" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                            {p.description && <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.description}</p>}
                            <div className="mt-4 flex items-center justify-between">
                              <span className="text-lg font-bold text-burgundy">{p.price}</span>
                              <a href={WHATSAPP_LINK} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-burgundy hover:text-burgundy">
                                <MessageCircle className="h-3.5 w-3.5" /> Order
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* Catalog fallback products */}
                    {catalogItems.map((product) => {
                      const productId = utf8Base64Encode(JSON.stringify({ title: product.name, price: product.price, tag: product.brand, imgs: product.images, description: product.description }));
                      return (
                        <div key={product.id} className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                          <a href={`/products/${productId}`}>
                            <div className="relative overflow-hidden">
                              <img src={product.images[0]} alt={product.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{cat}</span>
                              </div>
                            </div>
                          </a>
                          <div className="p-5">
                            <h3 className="text-sm font-semibold text-ink leading-snug" style={{ fontFamily: "var(--font-display)" }}>{product.name}</h3>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="text-lg font-bold text-burgundy">{product.price}</span>
                              <a href={WHATSAPP_LINK} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-burgundy hover:text-burgundy">
                                <MessageCircle className="h-3.5 w-3.5" /> Order
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <div className="mt-16 rounded-3xl border border-border bg-card px-8 py-10 text-center">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Need Something Specific?</p>
          <h3 className="text-2xl font-medium text-ink" style={{ fontFamily: "var(--font-display)" }}>Request any {brand} piece via WhatsApp</h3>
          <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:-translate-y-0.5" style={{ background: "var(--gradient-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
