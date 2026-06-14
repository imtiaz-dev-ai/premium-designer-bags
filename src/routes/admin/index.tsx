import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  isAdminLoggedIn, adminLogout,
  getProducts, addProduct, updateProduct, deleteProduct, bulkInsertProducts,
  getSettings, saveSettings, getSiteBrands, saveSiteBrands,
  defaultSettings,
  type Product, type SiteSettings,
} from "@/lib/store";
import {
  BESTSELLERS, SHOES, COLLECTION, JEWELRY, WATCHES,
  HATS, SCARFS, SUNGLASSES, BELTS, ACCESSORIES,
  BRAND_PRODUCTS,
} from "@/lib/catalog";
import {
  Plus, Trash2, Pencil, LogOut, ShoppingBag,
  Settings, Tag, X, Check, GripVertical, Eye, Loader2, Database,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({ component: AdminDashboard });

type Tab = "products" | "settings" | "brands" | "migrate";
type Section = "bestsellers" | "shoes" | "collection";

const SECTION_LABELS: Record<Section, string> = {
  bestsellers: "Bestsellers",
  shoes: "Designer Shoes",
  collection: "LV Blue Collection & New Arrivals",
};

const DEFAULT_BRANDS = ["Hermès","Chanel","Louis Vuitton","Fendi","Gucci","Dior","Bottega Veneta","Goyard","Celine","Loewe","Coach","Prada"];

function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [brands, setBrands] = useState<string[]>(DEFAULT_BRANDS);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdminLoggedIn()) { navigate({ to: "/admin/login" }); return; }
    setSettings(getSettings());
    const stored = getSiteBrands();
    if (stored) setBrands(stored);
    getProducts().then((p) => { setProducts(p); setLoading(false); });
  }, []);

  function logout() { adminLogout(); navigate({ to: "/admin/login" }); }
  function flash() { setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function saveAllSettings() { saveSettings(settings); flash(); }
  function saveBrands(b: string[]) {
    setBrands(b);
    saveSiteBrands(b);
    flash();
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-burgundy text-cream">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Admin Panel</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Premium Designer Bags</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <Check className="h-3 w-3" /> Saved
              </span>
            )}
            <a href="/" target="_blank" className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-burgundy">
              <Eye className="h-3.5 w-3.5" /> View Site
            </a>
            <button onClick={logout} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-red-500 hover:border-red-300">
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl gap-1 px-4 pb-0">
          {(["products", "settings", "brands", "migrate"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-widest transition ${tab === t ? "border-burgundy text-burgundy" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {t === "products" && <ShoppingBag className="h-3.5 w-3.5" />}
              {t === "settings" && <Settings className="h-3.5 w-3.5" />}
              {t === "brands" && <Tag className="h-3.5 w-3.5" />}
              {t === "migrate" && <Database className="h-3.5 w-3.5" />}
              {t}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {tab === "products" && (
          loading ? (
            <div className="flex items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin mr-2" /> Loading products...
            </div>
          ) : (
            <ProductsTab
              products={products}
              setProducts={setProducts}
              onFlash={flash}
            />
          )
        )}
        {tab === "settings" && (
          <SettingsTab settings={settings} setSettings={setSettings} onSave={saveAllSettings} />
        )}
        {tab === "brands" && (
          <BrandsTab brands={brands} onSave={saveBrands} />
        )}
        {tab === "migrate" && <MigrateTab />}
      </main>
    </div>
  );
}

/* ─── Products Tab ─── */
function ProductsTab({ products, setProducts, onFlash }: {
  products: Product[];
  setProducts: (p: Product[]) => void;
  onFlash: () => void;
}) {
  const [section, setSection] = useState<Section>("bestsellers");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filtered = products.filter((p) => p.section === section);

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return;
    const ok = await deleteProduct(id);
    if (ok) { setProducts(products.filter((p) => p.id !== id)); onFlash(); }
  }

  async function handleSave(p: Product) {
    if (editing) {
      const ok = await updateProduct(p);
      if (ok) { setProducts(products.map((x) => (x.id === p.id ? p : x))); onFlash(); }
    } else {
      const created = await addProduct(p);
      if (created) { setProducts([created, ...products]); onFlash(); }
    }
    setShowForm(false);
  }

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {(Object.keys(SECTION_LABELS) as Section[]).map((s) => (
          <div key={s} className="rounded-2xl border border-border bg-card p-5">
            <div className="text-2xl font-semibold text-ink">{products.filter((p) => p.section === s).length}</div>
            <div className="mt-1 text-xs text-muted-foreground">{SECTION_LABELS[s]}</div>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(Object.entries(SECTION_LABELS) as [Section, string][]).map(([s, label]) => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${section === s ? "border-burgundy bg-burgundy text-cream" : "border-border bg-card hover:border-burgundy"}`}
            >
              {label} ({products.filter((p) => p.section === s).length})
            </button>
          ))}
        </div>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream shadow"
          style={{ background: "var(--gradient-luxe)" }}
        >
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
          No products yet. Click "Add Product" to get started.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img
                src={p.img}
                alt={p.title}
                className="h-48 w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }}
              />
              <div className="p-4">
                <span className="mb-1 inline-block rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-burgundy">{p.tag}</span>
                <p className="line-clamp-2 text-sm font-semibold text-ink">{p.title}</p>
                <p className="mt-1 text-sm font-bold text-burgundy">{p.price}</p>
              </div>
              <div className="absolute right-2 top-2 flex gap-1.5 opacity-0 transition group-hover:opacity-100">
                <button onClick={() => { setEditing(p); setShowForm(true); }} className="rounded-lg bg-white/95 p-1.5 shadow hover:bg-gold/20"><Pencil className="h-3.5 w-3.5" /></button>
                <button onClick={() => handleDelete(p.id)} className="rounded-lg bg-white/95 p-1.5 shadow hover:bg-red-100 text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <ProductForm
          initial={editing}
          defaultSection={section}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

function ProductForm({ initial, defaultSection, onSave, onClose }: {
  initial: Product | null;
  defaultSection: Section;
  onSave: (p: Product) => void;
  onClose: () => void;
}) {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<Omit<Product, "id">>({
    title: initial?.title ?? "",
    price: initial?.price ?? "",
    tag: initial?.tag ?? "",
    img: initial?.img ?? "",
    category: initial?.category ?? "",
    description: initial?.description ?? "",
    inStock: initial?.inStock ?? true,
    section: initial?.section ?? defaultSection,
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.price) return;
    setSaving(true);
    await onSave({ ...form, id: initial?.id ?? "" });
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
            {initial ? "Edit Product" : "Add Product"}
          </h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-secondary"><X className="h-5 w-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Title *" value={form.title} onChange={(v) => set("title", v)} placeholder="e.g. Hermès Birkin 30" />
          <Field label="Price *" value={form.price} onChange={(v) => set("price", v)} placeholder="e.g. $849" />
          <Field label="Brand / Tag" value={form.tag} onChange={(v) => set("tag", v)} placeholder="e.g. Hermès" />
          <Field label="Image URL" value={form.img} onChange={(v) => set("img", v)} placeholder="https://..." />
          {form.img && (
            <img src={form.img} alt="preview" className="h-32 w-full rounded-xl object-cover border border-border"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          )}
          <div>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Section *</label>
            <select
              value={form.section}
              onChange={(e) => set("section", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy"
            >
              {(Object.entries(SECTION_LABELS) as [Section, string][]).map(([s, l]) => (
                <option key={s} value={s}>{l}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-border py-2.5 text-sm font-medium hover:bg-secondary">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-cream transition hover:opacity-90 disabled:opacity-60" style={{ background: "var(--gradient-luxe)" }}>
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              {initial ? "Update" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy"
      />
    </div>
  );
}

/* ─── Settings Tab ─── */
function SettingsTab({ settings, setSettings, onSave }: { settings: SiteSettings; setSettings: (s: SiteSettings) => void; onSave: () => void }) {
  const set = (k: keyof SiteSettings, v: string) => setSettings({ ...settings, [k]: v });
  const [newMarquee, setNewMarquee] = useState("");

  function addMarquee() {
    if (!newMarquee.trim()) return;
    setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newMarquee.trim()] });
    setNewMarquee("");
  }

  function removeMarquee(i: number) {
    setSettings({ ...settings, marqueeItems: settings.marqueeItems.filter((_, idx) => idx !== i) });
  }

  return (
    <div className="max-w-2xl space-y-8">
      <SectionBox title="Contact & Social">
        <Field label="WhatsApp Number (display)" value={settings.whatsapp} onChange={(v) => set("whatsapp", v)} placeholder="+39 351 543 9347" />
        <Field label="WhatsApp Link" value={settings.whatsappLink} onChange={(v) => set("whatsappLink", v)} placeholder="https://wa.me/..." />
        <Field label="Instagram URL" value={settings.instagram} onChange={(v) => set("instagram", v)} />
        <Field label="TikTok URL" value={settings.tiktok} onChange={(v) => set("tiktok", v)} />
        <Field label="Email" value={settings.email} onChange={(v) => set("email", v)} />
      </SectionBox>

      <SectionBox title="Marquee / Ticker Text">
        <div className="flex flex-wrap gap-2 mb-3">
          {settings.marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs">
              {item}
              <button onClick={() => removeMarquee(i)} className="text-red-400 hover:text-red-600"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newMarquee}
            onChange={(e) => setNewMarquee(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addMarquee(); } }}
            placeholder="Add new marquee item..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-burgundy"
          />
          <button onClick={addMarquee} className="rounded-lg px-4 py-2 text-xs font-semibold text-cream" style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </SectionBox>

      <button onClick={onSave} className="rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow transition hover:opacity-90" style={{ background: "var(--gradient-luxe)" }}>
        Save Settings
      </button>
    </div>
  );
}

function SectionBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

/* ─── Brands Tab ─── */
/* ─── Migrate Tab ─── */
function MigrateTab() {
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [log, setLog] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  async function migrate() {
    setStatus("running");
    setLog([]);
    setTotal(0);

    const allProducts: Omit<Product, "id">[] = [];

    const catalogSections: { name: string; slug: string; items: typeof BESTSELLERS }[] = [
      { name: "Bags / Bestsellers", slug: "bags", items: BESTSELLERS },
      { name: "Shoes", slug: "shoes", items: SHOES },
      { name: "Collection", slug: "collection", items: COLLECTION },
      { name: "Jewelry", slug: "jewelry", items: JEWELRY },
      { name: "Watches", slug: "watches", items: WATCHES },
      { name: "Hats", slug: "hats", items: HATS },
      { name: "Scarfs", slug: "scarfs", items: SCARFS },
      { name: "Sunglasses", slug: "sunglasses", items: SUNGLASSES },
      { name: "Belts", slug: "belts", items: BELTS },
      { name: "Accessories", slug: "accessories", items: ACCESSORIES },
    ];

    for (const sec of catalogSections) {
      for (const p of sec.items) {
        allProducts.push({
          title: p.title,
          price: p.price,
          tag: p.tag ?? "",
          img: p.img,
          category: sec.slug,
          description: "",
          inStock: true,
          section: "bestsellers",
        });
      }
    }

    for (const [brand, items] of Object.entries(BRAND_PRODUCTS)) {
      for (const p of items) {
        allProducts.push({
          title: p.title,
          price: p.price,
          tag: p.tag ?? brand,
          img: p.img,
          category: "brand",
          description: "",
          inStock: true,
          section: "bestsellers",
        });
      }
    }

    const CHUNK = 50;
    let inserted = 0;
    try {
      for (let i = 0; i < allProducts.length; i += CHUNK) {
        const chunk = allProducts.slice(i, i + CHUNK);
        const count = await bulkInsertProducts(chunk);
        inserted += count;
        setLog((l) => [...l, `✅ Inserted ${inserted} / ${allProducts.length}`]);
        setTotal(inserted);
      }
      setStatus("done");
      setLog((l) => [...l, `🎉 Done! ${inserted} products migrated to Supabase.`]);
    } catch (e) {
      setStatus("error");
      setLog((l) => [...l, `❌ Error: ${String(e)}`]);
    }
  }

  return (
    <div className="max-w-xl">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-gold">One-Time Migration</h3>
        <p className="mb-5 text-sm text-muted-foreground">
          Ye button ek baar press karo — catalog ke saare products Supabase database mein chale jayenge. Phir admin panel se edit/delete kar sako ge.
        </p>
        <button
          onClick={migrate}
          disabled={status === "running" || status === "done"}
          className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-cream disabled:opacity-50"
          style={{ background: "var(--gradient-luxe)" }}
        >
          {status === "running" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "done" ? "✅ Migration Complete" : status === "running" ? "Migrating..." : "Migrate All Products to Supabase"}
        </button>

        {log.length > 0 && (
          <div className="mt-5 rounded-xl bg-secondary p-4 text-xs font-mono space-y-1 max-h-48 overflow-y-auto">
            {log.map((l, i) => <div key={i}>{l}</div>)}
          </div>
        )}

        {status === "done" && (
          <p className="mt-4 text-sm font-semibold text-green-600">
            {total} products Supabase mein save ho gaye. Ab Products tab mein dikhen ge.
          </p>
        )}
      </div>
    </div>
  );
}

function BrandsTab({ brands, onSave }: { brands: string[]; onSave: (b: string[]) => void }) {
  const [list, setList] = useState(brands);
  const [newBrand, setNewBrand] = useState("");

  function add() {
    const trimmed = newBrand.trim();
    if (!trimmed || list.includes(trimmed)) return;
    setList([...list, trimmed]);
    setNewBrand("");
  }

  return (
    <div className="max-w-2xl">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Featured Bag Brands</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {list.map((b) => (
            <span key={b} className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
              <GripVertical className="h-3 w-3 text-muted-foreground" />
              {b}
              <button onClick={() => setList(list.filter((x) => x !== b))} className="text-red-400 hover:text-red-600"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newBrand}
            onChange={(e) => setNewBrand(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
            placeholder="Add brand name..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-burgundy"
          />
          <button onClick={add} className="rounded-lg px-4 py-2 text-xs font-semibold text-cream" style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button onClick={() => onSave(list)} className="mt-4 rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow transition hover:opacity-90" style={{ background: "var(--gradient-luxe)" }}>
        Save Brands
      </button>
    </div>
  );
}
