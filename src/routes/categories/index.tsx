import { createFileRoute } from "@tanstack/react-router";
import { CATEGORY_PAGES } from "@/lib/catalog";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/categories/")({
  component: CategoriesIndexPage,
});

function CategoriesIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— All Categories</p>
          <h1 className="text-5xl tracking-tight text-ink md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Browse categories</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Choose any category to explore luxury products sourced from Italy & Dubai.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_PAGES.map((page) => {
            const product = page.products[0];
            return (
              <a
                key={page.slug}
                href={`/categories/${page.slug}`}
                className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden bg-card">
                  <img src={product.img} alt={product.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-cream">{page.title}</p>
                    <h2 className="mt-2 text-lg font-semibold text-cream">{page.subtitle}</h2>
                  </div>
                </div>
                <div className="space-y-2 p-6">
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-gold">2 products</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-burgundy">View →</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-border bg-card px-8 py-10 text-center shadow-xl">
          <h2 className="text-3xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Need help choosing?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Message us on WhatsApp and we'll help you select the perfect piece from any category.</p>
          <a href="https://wa.me/393515439347" className="mt-8 inline-flex items-center gap-2 rounded-full border border-burgundy bg-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream transition hover:bg-burgundy/90">
            <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
