import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct, getSettings, saveSettings, getSiteBrands, saveSiteBrands, defaultSettings, isAdminLoggedIn, adminLogout, type Product, type SiteSettings } from "@/lib/store";
import { Plus, Trash2, Pencil, X, Check, ShoppingBag, Settings, Tag, Eye, Loader2, Search, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin/")({ component: AdminDashboard });

const CATEGORIES = ["bags", "shoes", "jewelry", "watches", "clothes", "hats", "scarfs", "sunglasses", "belts", "accessories", "collection"];
const BRANDS = ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Dior", "Saint Laurent", "Celine", "Bottega Veneta", "Goyard", "Fendi", "Valentino", "Chloé", "Loewe", "Cartier", "Bvlgari", "Messika", "Rolex", "Omega", "Burberry", "Loro Piana", "Tiffany & Co", "Van Cleef & Arpels"];
const SECTIONS = ["bestsellers", "shoes", "collection"] as const;
type Tab = "products" | "settings" | "brands";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [brands, setBrands] = useState<string[]>(BRANDS);

  useEffect(() => {
    if (!isAdminLoggedIn()) { navigate({ to: "/admin/login" }); return; }
    getProducts().then((p) => { setProducts(p); setLoading(false); });
    setSettings(getSettings());
    const b = getSiteBrands();
    if (b) setBrands(b);
  }, []);

  function flash() { setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function logout() { adminLogout(); navigate({ to: "/admin/login" }); }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-burgundy text-cream">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Admin Panel</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Premium Designer Bags</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
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
        <div className="mx-auto flex max-w-7xl gap-1 px-4">
          {(["products", "settings", "brands"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-widest transition ${tab === t ? "border-burgundy text-burgundy" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t === "products" && <ShoppingBag className="h-3.5 w-3.5" />}
              {t === "settings" && <Settings className="h-3.5 w-3.5" />}
              {t === "brands" && <Tag className="h-3.5 w-3.5" />}
              {t}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {tab === "products" && (
          loading
            ? <div className="flex items-center justify-center py-20 text-muted-foreground"><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Loading...</div>
            : <ProductsTab products={products} setProducts={setProducts} onFlash={flash} />
        )}
        {tab === "settings" && <SettingsTab settings={settings} setSettings={setSettings} onSave={() => { saveSettings(settings); flash(); }} />}
        {tab === "brands" && <BrandsTab brands={brands} onSave={(b) => { setBrands(b); saveSiteBrands(b); flash(); }} />}
      </main>
    </div>
  );
}

/* ── Products Tab ── */
function ProductsTab({ products, setProducts, onFlash }: { products: Product[]; setProducts: (p: Product[]) => void; onFlash: () => void }) {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE = 20;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q) || p.price.toLowerCase().includes(q);
      const matchCat = !filterCat || p.category === filterCat;
      const matchBrand = !filterBrand || p.tag === filterBrand;
      return matchSearch && matchCat && matchBrand;
    });
  }, [products, search, filterCat, filterBrand]);

  const paginated = filtered.slice(0, page * PAGE);

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return;
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
    onFlash();
  }

  async function handleSave(p: Product) {
    if (editing) {
      await updateProduct(p);
      setProducts(products.map((x) => (x.id === p.id ? p : x)));
    } else {
      const created = await addProduct(p);
      if (created) setProducts([created, ...products]);
    }
    setShowForm(false);
    onFlash();
  }

  return (
    <div>
      {/* Stats */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        {SECTIONS.map((s) => (
          <div key={s} className="rounded-2xl border border-border bg-card p-4">
            <div className="text-2xl font-bold text-ink">{products.filter((p) => p.section === s).length}</div>
            <div className="text-xs text-muted-foreground capitalize">{s}</div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search products..."
            className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2.5 text-sm outline-none focus:border-burgundy" />
        </div>

        <select value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setPage(1); }}
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
          <option value="">All Categories</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={filterBrand} onChange={(e) => { setFilterBrand(e.target.value); setPage(1); }}
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
          <option value="">All Brands</option>
          {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>

        <button onClick={() => { setEditing(null); setShowForm(true); }}
          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream"
          style={{ background: "var(--gradient-luxe)" }}>
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      {/* Count */}
      <div className="mb-3 text-xs text-muted-foreground">{filtered.length} products found</div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
          No products found.
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {paginated.map((p) => (
              <div key={p.id} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }} />
                <div className="p-3">
                  <span className="mb-1 inline-block rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-burgundy">{p.tag}</span>
                  <p className="line-clamp-2 text-xs font-semibold text-ink leading-snug">{p.title}</p>
                  <p className="mt-1 text-sm font-bold text-burgundy">{p.price}</p>
                  <p className="text-[10px] text-muted-foreground capitalize">{p.category}</p>
                </div>
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover:opacity-100">
                  <button onClick={() => { setEditing(p); setShowForm(true); }} className="rounded-lg bg-white/95 p-1.5 shadow hover:bg-gold/20"><Pencil className="h-3.5 w-3.5" /></button>
                  <button onClick={() => handleDelete(p.id)} className="rounded-lg bg-white/95 p-1.5 shadow hover:bg-red-100 text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length > page * PAGE && (
            <div className="mt-6 text-center">
              <button onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium hover:border-burgundy">
                Load More ({filtered.length - page * PAGE} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {showForm && <ProductForm initial={editing} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
}

/* ── Product Form Modal ── */
function ProductForm({ initial, onSave, onClose }: { initial: Product | null; onSave: (p: Product) => void; onClose: () => void }) {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: initial?.title ?? "",
    price: initial?.price ?? "",
    tag: initial?.tag ?? "",
    img: initial?.img ?? "",
    category: initial?.category ?? "bags",
    section: initial?.section ?? "bestsellers",
    description: initial?.description ?? "",
    inStock: initial?.inStock ?? true,
  });

  const set = (k: keyof typeof form, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.price) return;
    setSaving(true);
    await onSave({ ...form, id: initial?.id ?? "" });
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-8 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
            {initial ? "Edit Product" : "Add Product"}
          </h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-secondary"><X className="h-5 w-5" /></button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <Field label="Title *" value={form.title} onChange={(v) => set("title", v)} placeholder="e.g. Hermès Birkin 30" />
          <Field label="Price *" value={form.price} onChange={(v) => set("price", v)} placeholder="e.g. $849" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Brand / Tag</label>
              <select value={form.tag} onChange={(e) => set("tag", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
                <option value="">Select Brand</option>
                {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Category</label>
              <select value={form.category} onChange={(e) => set("category", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Section</label>
            <select value={form.section} onChange={(e) => set("section", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
              {SECTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <Field label="Image URL" value={form.img} onChange={(v) => set("img", v)} placeholder="https://..." />
          {form.img && (
            <img src={form.img} alt="preview" className="h-32 w-full rounded-xl object-cover border border-border"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          )}

          <Field label="Description" value={form.description ?? ""} onChange={(v) => set("description", v)} placeholder="Optional description..." />

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.inStock} onChange={(e) => set("inStock", e.target.checked)} className="rounded" />
            In Stock
          </label>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-border py-2.5 text-sm font-medium hover:bg-secondary">Cancel</button>
            <button type="submit" disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-cream disabled:opacity-60"
              style={{ background: "var(--gradient-luxe)" }}>
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
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy" />
    </div>
  );
}

/* ── Settings Tab ── */
function SettingsTab({ settings, setSettings, onSave }: { settings: SiteSettings; setSettings: (s: SiteSettings) => void; onSave: () => void }) {
  const set = (k: keyof SiteSettings, v: string) => setSettings({ ...settings, [k]: v });
  const [newItem, setNewItem] = useState("");

  return (
    <div className="max-w-2xl space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact & Social</h3>
        <Field label="WhatsApp Number" value={settings.whatsapp} onChange={(v) => set("whatsapp", v)} />
        <Field label="WhatsApp Link" value={settings.whatsappLink} onChange={(v) => set("whatsappLink", v)} />
        <Field label="Instagram URL" value={settings.instagram} onChange={(v) => set("instagram", v)} />
        <Field label="TikTok URL" value={settings.tiktok} onChange={(v) => set("tiktok", v)} />
        <Field label="Email" value={settings.email} onChange={(v) => set("email", v)} />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Marquee Text</h3>
        <div className="flex flex-wrap gap-2">
          {settings.marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs">
              {item}
              <button onClick={() => setSettings({ ...settings, marqueeItems: settings.marqueeItems.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-600"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && newItem.trim()) { e.preventDefault(); setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            placeholder="Add marquee item..." className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-burgundy" />
          <button onClick={() => { if (newItem.trim()) { setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            className="rounded-lg px-4 py-2 text-cream" style={{ background: "var(--gradient-luxe)" }}><Plus className="h-4 w-4" /></button>
        </div>
      </div>

      <button onClick={onSave} className="rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow"
        style={{ background: "var(--gradient-luxe)" }}>Save Settings</button>
    </div>
  );
}

/* ── Brands Tab ── */
function BrandsTab({ brands, onSave }: { brands: string[]; onSave: (b: string[]) => void }) {
  const [list, setList] = useState(brands);
  const [newBrand, setNewBrand] = useState("");

  function add() {
    const t = newBrand.trim();
    if (!t || list.includes(t)) return;
    setList([...list, t]);
    setNewBrand("");
  }

  return (
    <div className="max-w-2xl">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Featured Brands</h3>
        <div className="flex flex-wrap gap-2">
          {list.map((b) => (
            <span key={b} className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
              {b}
              <button onClick={() => setList(list.filter((x) => x !== b))} className="text-red-400 hover:text-red-600"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
            placeholder="Add brand..." className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-burgundy" />
          <button onClick={add} className="rounded-lg px-4 py-2 text-cream" style={{ background: "var(--gradient-luxe)" }}><Plus className="h-4 w-4" /></button>
        </div>
      </div>
      <button onClick={() => onSave(list)} className="mt-4 rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow"
        style={{ background: "var(--gradient-luxe)" }}>Save Brands</button>
    </div>
  );
}
