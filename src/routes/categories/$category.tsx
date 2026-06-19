import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, Menu, X, Search, ChevronDown, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { getCategoryBySlug, CATEGORY_BRAND_IMAGES, brandToSlug } from "@/lib/catalog";
import { getSettings, getProducts, type Product } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/categories/$category")({
  head: ({ params }) => {
    const slug = decodeURIComponent(params.category);
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);
    return {
      meta: [
        { title: `${title} — Luxury Designer ${title} | Premium Designer Bags` },
        { name: "description", content: `Shop authentic luxury designer ${slug} from Louis Vuitton, Chanel, Hermès, Dior, Gucci and more. Sourced from Italy & Dubai. WhatsApp ordering, worldwide delivery.` },
        { name: "keywords", content: `luxury designer ${slug}, buy designer ${slug} online, ${slug} Italy Dubai, authentic ${slug} worldwide shipping` },
        { property: "og:title", content: `${title} — Luxury Designer ${title} | Premium Designer Bags` },
        { property: "og:description", content: `Authentic luxury designer ${slug} from Italy & Dubai. WhatsApp ordering, worldwide delivery.` },
        { property: "og:url", content: `https://premiumdesignerbags.com/categories/${slug}` },
        { property: "og:image", content: "https://premiumdesignerbags.com/og-image.jpg" },
        { rel: "canonical", href: `https://premiumdesignerbags.com/categories/${slug}` } as never,
      ],
    };
  },
  component: CategoryPage,
});

const WHATSAPP_LINK = "https://wa.me/393515439347";

// Brand images are now loaded from CATEGORY_BRAND_IMAGES per category

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

function CategoryPage() {
  const { category } = Route.useParams();

  const slug = decodeURIComponent(category);
  const page = getCategoryBySlug(slug);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = () =>
      getProducts().then((data) => {
        setDbProducts(data.filter((p) => p.category === slug && p.inStock !== false));
        setLoading(false);
      });
    load();
    window.addEventListener("focus", load);
    const channel = supabase
      .channel(`cat-route-${slug}-${Date.now()}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "products" }, load)
      .subscribe();
    return () => {
      window.removeEventListener("focus", load);
      supabase.removeChannel(channel);
    };
  }, [slug]);

  // Only show brands that have DB products in this category
  const allBrands = Array.from(new Set(dbProducts.map((p) => p.tag).filter(Boolean)));

  function getBrandImage(brand: string): string | null {
    return CATEGORY_BRAND_IMAGES[slug]?.[brand] ?? null;
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">
          <p className="text-lg">Sorry, this category does not exist.</p>
          <a href="/" className="mt-6 inline-block rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">Go Home</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-burgundy">Home</a>
          <span>/</span>
          <span className="text-ink">{page.title}</span>
        </div>

        <div className="mb-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Select a Brand</p>
          <h2 className="mt-1 text-3xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>{page.title}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{page.description}</p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm text-muted-foreground">Loading...</div>
        ) : allBrands.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
            <p className="text-base font-semibold text-ink">No brands available for this category yet.</p>
            <p className="mt-3 text-sm">Please contact us on WhatsApp for the latest products and stock updates.</p>
            <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-burgundy hover:bg-burgundy/5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {allBrands.map((brand) => {
                const img = getBrandImage(brand);
                return (
                  <a
                    key={brand}
                    href={`/brand/${brandToSlug(brand)}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {img ? (
                      <div className="relative overflow-hidden">
                        <img src={img} alt={brand} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium tracking-wide text-cream" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</span>
                      </div>
                    ) : (
                      <div className="flex h-48 flex-col items-center justify-center gap-2 px-4">
                        <span className="text-base font-medium tracking-wide text-ink transition group-hover:text-burgundy" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</span>
                        <span className="h-px w-6 bg-gold opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
                      </div>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-card px-8 py-8 text-center">
              <p className="text-sm text-muted-foreground">Don't see what you're looking for? Ask us directly.</p>
              <a href={WHATSAPP_LINK} className="mt-4 inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
