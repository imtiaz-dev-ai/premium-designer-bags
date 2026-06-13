import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MessageCircle, ChevronLeft, ShoppingBag, Menu, X, Search, ChevronDown, MapPin, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { getCategoryBySlug, utf8Base64Encode, CATEGORY_BRANDS, BRAND_PRODUCTS, BRANDS } from "@/lib/catalog";
import { getSettings } from "@/lib/store";
import logoImg from "@/assets/Logo.png";
import brandLv from "@/assets/brand/Lv.jpeg";
import brandChanel from "@/assets/brand/Chanel.jpeg";
import brandHermes from "@/assets/brand/Hermes.jpeg";
import brandGucci from "@/assets/brand/Gucci.jpeg";
import brandPrada from "@/assets/brand/Prada.jpeg";
import brandCeline from "@/assets/brand/Celine.jpeg";
import brandBottega from "@/assets/brand/Bottega bag.jpeg";
import brandGoyard from "@/assets/brand/Goyard.jpeg";
import brandFendi from "@/assets/brand/Fendi.jpeg";
import brandYsl from "@/assets/brand/Ysl.jpeg";
import brandValentino from "@/assets/brand/Valentino.jpeg";
import brandChloe from "@/assets/brand/Chloe brand .jpeg";

export const Route = createFileRoute("/categories/$category")({
  component: CategoryPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

const BRAND_IMAGES: Record<string, string> = {
  "Louis Vuitton": brandLv,
  "Chanel": brandChanel,
  "Hermès": brandHermes,
  "Gucci": brandGucci,
  "Prada": brandPrada,
  "Celine": brandCeline,
  "Bottega Veneta": brandBottega,
  "Goyard": brandGoyard,
  "Fendi": brandFendi,
  "Saint Laurent": brandYsl,
  "Valentino": brandValentino,
  "Chloé": brandChloe,
};

const NAV_LINKS = [
  { href: "/categories/bags",       label: "Bags",       brands: ["Louis Vuitton", "Chanel", "Hermès", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent", "Bottega Veneta", "Goyard"] },
  { href: "/categories/shoes",      label: "Shoes",      brands: ["Hermès", "Chanel", "Louis Vuitton", "Fendi", "Gucci", "Dior", "Bottega Veneta", "Celine", "Loewe", "Prada"] },
  { href: "/categories/jewelry",    label: "Jewelry",    brands: ["Cartier", "Tiffany & Co", "Van Cleef & Arpels", "Hermès", "Chanel", "Gucci"] },
  { href: "/categories/watches",    label: "Watches",    brands: ["Cartier", "Hermès", "Rolex", "Omega", "Patek Philippe", "Tag Heuer"] },
  { href: "/categories/clothes",    label: "Clothes",    brands: ["Loro Piana", "Gucci", "Prada", "Burberry", "Valentino", "Saint Laurent"] },
  { href: "/categories/hats",       label: "Hats",       brands: ["Louis Vuitton", "Gucci", "Prada", "Burberry", "Fendi", "Chanel"] },
  { href: "/categories/scarfs",     label: "Scarfs",     brands: ["Hermès", "Gucci", "Louis Vuitton", "Burberry", "Chanel", "Fendi"] },
  { href: "/categories/sunglasses", label: "Sunglasses", brands: ["Chanel", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent"] },
  { href: "/categories/belts",      label: "Belts",      brands: ["Louis Vuitton", "Gucci", "Hermès", "Prada", "Fendi", "Bottega Veneta"] },
  { href: "#contact",               label: "Contact",    brands: [] },
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
              {NAV_LINKS.map((l) => (
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
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function brandLogoColor(name: string) {
  const colors: Record<string, string> = {
    "Louis Vuitton": "#3c2a1a", "Chanel": "#000000", "Hermès": "#e78a00",
    "Dior": "#4f4f4f", "Gucci": "#18412f", "Prada": "#1c1f25",
    "Celine": "#0b0b0b", "Saint Laurent": "#101010", "Bottega Veneta": "#2f2d28",
  };
  if (colors[name]) return colors[name];
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return `hsl(${hash % 360} 50% 40%)`;
}

function brandInitials(name: string) {
  const known: Record<string, string> = {
    "Louis Vuitton": "LV", "Bottega Veneta": "BV", "Saint Laurent": "SL",
    "Hermès": "H", "Loro Piana": "LP", "The Row": "TR",
    "Van Cleef & Arpels": "VA", "Tiffany & Co": "TC",
  };
  if (known[name]) return known[name];
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function CategoryPage() {
  const { category } = Route.useParams();
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const slug = decodeURIComponent(category);
  const page = getCategoryBySlug(slug);
  const categoryBrands = CATEGORY_BRANDS[slug] ?? BRANDS.slice(0, 10);

  const normalizeBrandKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const brandProductTagMatches = (tag: string, brand: string) => {
    const normalizedTag = normalizeBrandKey(tag);
    const normalizedBrand = normalizeBrandKey(brand);
    if (normalizedTag === normalizedBrand) return true;
    const aliases: Record<string, string[]> = {
      louisvuitton: ["lv"],
      saintlaurent: ["ysl"],
      bottegaveneta: ["bv"],
    };
    return aliases[normalizedBrand]?.includes(normalizedTag) ?? false;
  };

  const availableBrands = categoryBrands.filter((brand) =>
    (BRAND_PRODUCTS[brand]?.length ?? 0) > 0 || page.products.some((p) => p.tag && brandProductTagMatches(p.tag, brand))
  );

  if (!page) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">
          <p className="text-lg">Sorry, this category does not exist.</p>
          <button onClick={() => navigate({ to: "/" })} className="mt-6 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
            Go Home
          </button>
        </main>
      </div>
    );
  }

  const selectedProducts = selectedBrand
    ? page.products.filter((p) => p.tag ? brandProductTagMatches(p.tag, selectedBrand) : false)
    : [];

  const products = selectedBrand
    ? (selectedProducts.length > 0 ? selectedProducts : BRAND_PRODUCTS[selectedBrand] ?? [])
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb / back */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-burgundy">Home</a>
          <span>/</span>
          <button onClick={() => { setSelectedBrand(null); }} className="hover:text-burgundy">{page.title}</button>
          {selectedBrand && (
            <>
              <span>/</span>
              <span className="text-ink">{selectedBrand}</span>
            </>
          )}
        </div>

        {!selectedBrand ? (
          <>
            <div className="mb-8 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Select a Brand</p>
              <h2 className="mt-1 text-3xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>{page.title}</h2>
            </div>
            {availableBrands.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
                <p className="text-base font-semibold text-ink">No brands available for this category yet.</p>
                <p className="mt-3 text-sm">Please contact us on WhatsApp for the latest products and stock updates.</p>
                <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-burgundy hover:bg-burgundy/5">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {availableBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl text-left"
                  >
                    {BRAND_IMAGES[brand] ? (
                      <img src={BRAND_IMAGES[brand]} alt={brand} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-40 w-full items-center justify-center" style={{ background: brandLogoColor(brand) }}>
                        <span className="text-4xl font-semibold text-cream" style={{ fontFamily: "var(--font-display)" }}>{brandInitials(brand)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 w-full px-4 py-3">
                      <span className="text-sm font-semibold text-cream" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mb-8 flex items-center gap-4">
              <button onClick={() => setSelectedBrand(null)} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-burgundy">
                <ChevronLeft className="h-4 w-4" /> Back to brands
              </button>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">{selectedBrand}</p>
                <h2 className="text-2xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>Products</h2>
              </div>
            </div>
            {products.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground">
                <p>No products found for {selectedBrand}.</p>
                <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
                  <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => {
                  const productId = utf8Base64Encode(JSON.stringify({ title: product.title, price: product.price, tag: product.tag, img: product.img }));
                  return (
                    <div key={productId} className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
                      <a href={`/products/${productId}`}>
                        <img src={product.img} alt={product.title} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
                      </a>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-gold">{product.tag}</span>
                          <span className="text-xl font-bold text-burgundy">{product.price}</span>
                        </div>
                        <h2 className="text-base font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>{product.title}</h2>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                          <a href={`/products/${productId}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-burgundy px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-burgundy/90">
                            View product
                          </a>
                          <a href={WHATSAPP_LINK} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-burgundy hover:text-burgundy">
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
