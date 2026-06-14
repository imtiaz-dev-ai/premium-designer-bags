import { useParams, useNavigate } from "react-router-dom";
import { MessageCircle, ChevronLeft } from "lucide-react";
import { FEATURED_BRANDS, BRAND_CATEGORY_ORDER, getBrandProductsByCategory, slugToBrand, brandToSlug, utf8Base64Encode } from "@/lib/catalog";
import SiteHeader from "@/components/SiteHeader";

const WHATSAPP_LINK = "https://wa.me/393515439347";

export default function BrandPage() {
  const { brand: brandSlug = "" } = useParams();
  const navigate = useNavigate();
  const brand = slugToBrand(decodeURIComponent(brandSlug));

  if (!brand) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Brand not found.</p>
          <button onClick={() => navigate("/")} className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
            <ChevronLeft className="h-4 w-4" /> Go Home
          </button>
        </main>
      </div>
    );
  }

  const byCategory = getBrandProductsByCategory(brand);
  const categories = BRAND_CATEGORY_ORDER.filter((cat) => byCategory[cat]?.length);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />

      <div className="border-b border-border" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-cream">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-gold">— Luxury House</p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</h1>
          <p className="mt-4 text-sm opacity-70 tracking-wide">Curated pieces sourced from Italy & Dubai</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-burgundy">Home</a>
          <span>/</span>
          <a href="/#brands" className="hover:text-burgundy">Brands</a>
          <span>/</span>
          <span className="text-ink font-medium">{brand}</span>
        </nav>

        <div className="mb-10 flex flex-wrap gap-2">
          {FEATURED_BRANDS.map((b) => (
            <a key={b} href={`/brand/${brandToSlug(b)}`}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                b === brand ? "border-burgundy bg-burgundy text-cream" : "border-border text-muted-foreground hover:border-gold hover:text-burgundy"
              }`}
            >{b}</a>
          ))}
        </div>

        {categories.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card py-20 text-center text-muted-foreground">
            <p className="text-base font-semibold text-ink mb-2">No products listed yet for {brand}.</p>
            <p className="text-sm mb-6">Contact us on WhatsApp for current stock.</p>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map((cat) => (
              <section key={cat}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.45em] text-gold">{cat}</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {byCategory[cat].map((product) => {
                    const productId = utf8Base64Encode(JSON.stringify({ title: product.name, price: product.price, tag: product.brand, img: product.images[0] }));
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
            ))}
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
