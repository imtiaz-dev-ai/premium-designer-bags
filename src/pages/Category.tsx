import { useParams, useNavigate, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { getCategoryBySlug, CATEGORY_BRANDS, BRANDS, brandToSlug, utf8Base64Encode } from "@/lib/catalog";
import { getProducts, type Product } from "@/lib/store";
import SiteHeader from "@/components/SiteHeader";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/393515439347";

export default function CategoryPage() {
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const slug = decodeURIComponent(category);
  const page = getCategoryBySlug(slug);
  const categoryBrands = CATEGORY_BRANDS[slug] ?? BRANDS.slice(0, 10);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setDbProducts(data.filter((p) => p.category === slug && p.inStock !== false));
    });
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">
          <p className="text-lg">Sorry, this category does not exist.</p>
          <button onClick={() => navigate("/")} className="mt-6 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">Go Home</button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-ink">{page.title}</span>
        </div>
        <div className="mb-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— {page.title}</p>
          <h2 className="mt-1 text-3xl tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>{page.title}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{page.description}</p>
        </div>

        {/* Admin-added products from Supabase */}
        {dbProducts.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {dbProducts.map((p) => {
                const id = utf8Base64Encode(JSON.stringify({ title: p.title, price: p.price, tag: p.tag ?? "Luxury", imgIndex: 0 }));
                return (
                  <a key={p.id} href={`/products/${id}`} className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <img src={p.img} alt={p.title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }} />
                    <div className="p-3">
                      <span className="mb-1 inline-block rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-burgundy">{p.tag || "—"}</span>
                      <p className="line-clamp-2 text-xs font-semibold text-ink leading-snug">{p.title}</p>
                      <p className="mt-1 text-sm font-bold text-burgundy">{p.price}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Brand grid — always show */}
        {categoryBrands.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
            <p className="text-base font-semibold text-ink">No brands available yet.</p>
            <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy/5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4">
              {categoryBrands.map((brand) => (
                <Link key={brand} to={`/brand/${brandToSlug(brand)}`}
                  className="group flex flex-col items-center justify-center gap-3 bg-card px-4 py-10 text-center transition hover:bg-secondary">
                  <span className="text-base font-medium tracking-wide text-ink transition group-hover:text-burgundy" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{brand}</span>
                  <span className="h-px w-6 bg-gold opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-border bg-card px-8 py-8 text-center">
              <p className="text-sm text-muted-foreground">Don't see what you're looking for?</p>
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
