import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getCategoryBySlug, CATEGORY_BRANDS, BRANDS, brandToSlug, CATEGORY_BRAND_IMAGES } from "@/lib/catalog";
import { getProducts } from "@/lib/store";
import SiteHeader from "@/components/SiteHeader";

const WHATSAPP_LINK = "https://wa.me/393515439347";

export default function CategoryPage() {
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const slug = decodeURIComponent(category);
  const page = getCategoryBySlug(slug);
  const brandImages = CATEGORY_BRAND_IMAGES[slug] ?? {};

  // Merge hardcoded brands + brands from Supabase products for this category
  const [allBrands, setAllBrands] = useState<string[]>(CATEGORY_BRANDS[slug] ?? BRANDS.slice(0, 10));

  useEffect(() => {
    // Merge: hardcoded + localStorage admin brands + Supabase product tags
    const localCatBrands: Record<string, string[]> = (() => {
      try { return JSON.parse(localStorage.getItem("admin_category_brands") ?? "{}"); } catch { return {}; }
    })();

    getProducts().then((products) => {
      const fromDb = products.filter((p) => p.category === slug && p.tag).map((p) => p.tag);
      const hardcoded = CATEGORY_BRANDS[slug] ?? [];
      const fromLocal = localCatBrands[slug] ?? [];
      const merged = Array.from(new Set([...hardcoded, ...fromLocal, ...fromDb]));
      setAllBrands(merged);
    });
  }, [slug]);

  const categoryBrands = allBrands;

  if (!page) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">
          <p className="text-lg">Sorry, this category does not exist.</p>
          <button onClick={() => navigate("/")} className="mt-6 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
            Go Home
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-burgundy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink">{page.title}</span>
        </div>

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— {page.title}</p>
          <h1 className="mt-1 text-3xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {page.title}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{page.description}</p>
        </div>

        {categoryBrands.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
            <p className="text-base font-semibold text-ink">No brands available yet.</p>
            <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {categoryBrands.map((brand) => {
                const img = brandImages[brand];
                return (
                  <Link
                    key={brand}
                    to={`/brand/${brandToSlug(brand)}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                  >
                    {img ? (
                      <>
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={img}
                            alt={brand}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm font-semibold text-cream" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                            {brand}
                          </p>
                          <span className="mt-1 block h-px w-6 bg-gold transition-all duration-300 group-hover:w-10" />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 px-4 py-10 text-center">
                        <span className="text-base font-medium tracking-wide text-ink transition group-hover:text-burgundy" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                          {brand}
                        </span>
                        <span className="h-px w-6 bg-gold opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-card px-8 py-8 text-center">
              <p className="text-sm text-muted-foreground">Don't see what you're looking for?</p>
              <a href={WHATSAPP_LINK} className="mt-4 inline-flex items-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5 transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
