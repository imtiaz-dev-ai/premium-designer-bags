import { utf8Base64Encode, type CatalogProduct } from "@/lib/catalog";

export function ProductCard({ p, index }: { p: CatalogProduct; index: number }) {
  const id = utf8Base64Encode(JSON.stringify({ title: p.title, price: p.price, tag: p.tag ?? "Luxury", img: p.img, description: (p as any).description ?? "", imgIndex: index }));

  return (
    <a
      href={`/products/${id}`}
      className="group block overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden rounded-t-[1.5rem] bg-card">
        <img
          src={p.img}
          alt={p.title}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-4">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-cream">
            <span>{p.tag ?? "Designer"}</span>
            <span>{p.price}</span>
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-snug text-cream">{p.title}</h3>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink shadow-sm">
          {p.tag ?? "Luxury"}
        </span>
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
