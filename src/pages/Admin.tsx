import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProducts, addProduct, updateProduct, deleteProduct,
  getSettings, saveSettings, isAdminLoggedIn, adminLogout, changeCredentials,
  getSiteBrands, saveSiteBrands,
  type Product, type SiteSettings,
} from "@/lib/store";
import { migrateCatalogToSupabase } from "@/lib/migrate";
import {
  BESTSELLERS, SHOES, JEWELRY, WATCHES, CLOTHES, HATS, SCARFS, SUNGLASSES, BELTS, ACCESSORIES, COLLECTION,
} from "@/lib/catalog";
import {
  ShoppingBag, Settings, Plus, Pencil, Trash2,
  X, Check, Eye, Search, LogOut, KeyRound, Tag, Upload,
} from "lucide-react";
import logoImg from "@/assets/Logo.png";

const DEFAULT_BRANDS = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Dior",
  "Saint Laurent", "Celine", "Bottega Veneta", "Goyard", "Fendi",
  "Valentino", "Chloé", "Cartier", "Bvlgari", "Messika", "Burberry",
  "Loewe", "Rolex", "Omega",
];

const CATEGORIES = [
  "bags", "shoes", "jewelry", "watches", "clothes",
  "hats", "scarfs", "sunglasses", "belts", "accessories", "collection",
];

type Tab = "products" | "brands" | "settings" | "account";

export default function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate("/admin/login");
  }, []);

  function logout() { adminLogout(); navigate("/admin/login"); }

  const [tab, setTab] = useState<Tab>("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<string[]>(() => getSiteBrands() ?? DEFAULT_BRANDS);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(() => getSettings());
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then((data) => { setProducts(data); setLoading(false); });
  }, []);

  function flash() { setSaved(true); setTimeout(() => setSaved(false), 2000); }

  async function handleMigrate() {
    if (!confirm("Migrate all catalog products to Supabase? This will add them to the database.")) return;
    const allCatalog = [
      ...BESTSELLERS.map((p) => ({ ...p, tag: p.tag ?? "", category: "bags", section: "bestsellers", description: "" })),
      ...SHOES.map((p) => ({ ...p, tag: p.tag ?? "", category: "shoes", section: "shoes", description: "" })),
      ...JEWELRY.map((p) => ({ ...p, tag: p.tag ?? "", category: "jewelry", section: "jewelry", description: "" })),
      ...WATCHES.map((p) => ({ ...p, tag: p.tag ?? "", category: "watches", section: "watches", description: "" })),
      ...CLOTHES.map((p) => ({ ...p, tag: p.tag ?? "", category: "clothes", section: "clothes", description: "" })),
      ...HATS.map((p) => ({ ...p, tag: p.tag ?? "", category: "hats", section: "hats", description: "" })),
      ...SCARFS.map((p) => ({ ...p, tag: p.tag ?? "", category: "scarfs", section: "scarfs", description: "" })),
      ...SUNGLASSES.map((p) => ({ ...p, tag: p.tag ?? "", category: "sunglasses", section: "sunglasses", description: "" })),
      ...BELTS.map((p) => ({ ...p, tag: p.tag ?? "", category: "belts", section: "belts", description: "" })),
      ...ACCESSORIES.map((p) => ({ ...p, tag: p.tag ?? "", category: "accessories", section: "accessories", description: "" })),
      ...COLLECTION.map((p) => ({ ...p, tag: p.tag ?? "", category: "collection", section: "collection", description: "" })),
    ];
    const { inserted, error } = await migrateCatalogToSupabase(allCatalog);
    if (error) { alert("Migration failed: " + error); return; }
    const fresh = await getProducts();
    setProducts(fresh);
    alert(`✅ ${inserted} products migrated to Supabase!`);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return;
    await deleteProduct(id);
    setProducts((p) => p.filter((x) => x.id !== id));
    flash();
  }

  async function handleSave(p: Product) {
    if (editing) {
      await updateProduct(p);
      setProducts((prev) => prev.map((x) => (x.id === p.id ? p : x)));
    } else {
      const created = await addProduct(p);
      if (created) setProducts((prev) => [created, ...prev]);
    }
    setShowForm(false);
    setEditing(null);
    flash();
  }

  function handleBrandsChange(newBrands: string[]) {
    setBrands(newBrands);
    saveSiteBrands(newBrands);
    flash();
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-9 w-9 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold text-ink">Admin Panel</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Premium Designer</div>
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
            <button onClick={handleMigrate} className="flex items-center gap-1.5 rounded-lg border border-gold/50 bg-gold/10 px-3 py-2 text-xs font-medium text-burgundy hover:bg-gold/20">
              <Upload className="h-3.5 w-3.5" /> Migrate Catalog
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50">
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl gap-1 px-4">
          {(["products", "brands", "settings", "account"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-widest transition ${tab === t ? "border-burgundy text-burgundy" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t === "products" && <ShoppingBag className="h-3.5 w-3.5" />}
              {t === "brands" && <Tag className="h-3.5 w-3.5" />}
              {t === "settings" && <Settings className="h-3.5 w-3.5" />}
              {t === "account" && <KeyRound className="h-3.5 w-3.5" />}
              {t}
              {t === "products" && <span className="ml-1 rounded-full bg-burgundy/10 px-1.5 py-0.5 text-[10px] text-burgundy">{products.length}</span>}
              {t === "brands" && <span className="ml-1 rounded-full bg-burgundy/10 px-1.5 py-0.5 text-[10px] text-burgundy">{brands.length}</span>}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {tab === "products" && (
          <ProductsTab
            products={products}
            loading={loading}
            brands={brands}
            onAdd={() => { setEditing(null); setShowForm(true); }}
            onEdit={(p) => { setEditing(p); setShowForm(true); }}
            onDelete={handleDelete}
          />
        )}
        {tab === "brands" && (
          <BrandsTab brands={brands} onChange={handleBrandsChange} />
        )}
        {tab === "settings" && (
          <SettingsTab settings={settings} setSettings={setSettings} onSave={() => { saveSettings(settings); flash(); }} />
        )}
        {tab === "account" && <AccountTab onFlash={flash} />}
      </main>

      {showForm && (
        <ProductForm
          initial={editing}
          brands={brands}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditing(null); }}
        />
      )}
    </div>
  );
}

/* ── Products Tab ── */
function ProductsTab({ products, loading, brands, onAdd, onEdit, onDelete }: {
  products: Product[];
  loading: boolean;
  brands: string[];
  onAdd: () => void;
  onEdit: (p: Product) => void;
  onDelete: (id: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [page, setPage] = useState(1);
  const PAGE = 20;

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return products.filter((p) =>
      (!q || p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)) &&
      (!filterCat || p.category === filterCat) &&
      (!filterBrand || p.tag === filterBrand)
    );
  }, [products, search, filterCat, filterBrand]);

  const paginated = useMemo(() => filtered.slice(0, page * PAGE), [filtered, page]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search by title or brand..."
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
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <button onClick={onAdd}
          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream"
          style={{ background: "var(--gradient-luxe)" }}>
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      <div className="mb-3 text-xs text-muted-foreground">{filtered.length} products</div>

      {loading ? (
        <div className="py-20 text-center text-sm text-muted-foreground">Loading products...</div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
          No products found.
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {paginated.map((p) => (
              <div key={p.id} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover" loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }} />
                <div className="p-3">
                  <span className="mb-1 inline-block rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-burgundy">{p.tag || "—"}</span>
                  <p className="line-clamp-2 text-xs font-semibold text-ink leading-snug">{p.title}</p>
                  <p className="mt-1 text-sm font-bold text-burgundy">{p.price}</p>
                  <p className="text-[10px] text-muted-foreground capitalize">{p.category}</p>
                </div>
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover:opacity-100">
                  <button onClick={() => onEdit(p)} className="rounded-lg bg-white/90 p-1.5 shadow hover:bg-gold/20"><Pencil className="h-3.5 w-3.5" /></button>
                  <button onClick={() => onDelete(p.id)} className="rounded-lg bg-white/90 p-1.5 shadow hover:bg-red-100 text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
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
    </div>
  );
}

/* ── Brands Tab ── */
function BrandsTab({ brands, onChange }: { brands: string[]; onChange: (b: string[]) => void }) {
  const [newBrand, setNewBrand] = useState("");
  const [err, setErr] = useState("");

  function add() {
    const name = newBrand.trim();
    if (!name) return;
    if (brands.includes(name)) { setErr("Brand already exists."); return; }
    onChange([...brands, name]);
    setNewBrand("");
    setErr("");
  }

  function remove(brand: string) {
    if (!confirm(`Delete brand "${brand}"?`)) return;
    onChange(brands.filter((b) => b !== brand));
  }

  function resetToDefault() {
    if (!confirm("Reset brands to default list?")) return;
    onChange(DEFAULT_BRANDS);
  }

  return (
    <div className="max-w-2xl">
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Manage Brands</h3>
          <button onClick={resetToDefault} className="text-xs text-muted-foreground underline hover:text-foreground">Reset to default</button>
        </div>

        <div className="mb-4 flex gap-2">
          <input
            value={newBrand}
            onChange={(e) => { setNewBrand(e.target.value); setErr(""); }}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="New brand name..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy"
          />
          <button onClick={add}
            className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-cream"
            style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
        {err && <p className="mb-3 text-xs text-red-500">{err}</p>}

        <div className="grid gap-2 sm:grid-cols-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2.5">
              <span className="text-sm font-medium text-ink">{brand}</span>
              <button onClick={() => remove(brand)} className="ml-2 rounded-lg p-1 text-red-400 hover:bg-red-50 hover:text-red-600">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {brands.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">No brands. Add one above.</p>
        )}
      </div>
    </div>
  );
}

/* ── Product Form Modal ── */
function ProductForm({ initial, brands, onSave, onClose }: {
  initial: Product | null;
  brands: string[];
  onSave: (p: Product) => void;
  onClose: () => void;
}) {
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
  const [uploading, setUploading] = useState(false);

  const set = (k: keyof typeof form, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const { supabase } = await import("@/lib/supabase");
    const { error } = await supabase.storage.from("products").upload(fileName, file, { upsert: true });
    if (error) { alert("Upload failed: " + error.message); setUploading(false); return; }
    const { data } = supabase.storage.from("products").getPublicUrl(fileName);
    set("img", data.publicUrl);
    setUploading(false);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.price.trim()) return;
    onSave({ ...form, id: initial?.id ?? "" });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
            {initial ? "Edit Product" : "Add Product"}
          </h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-secondary"><X className="h-5 w-5" /></button>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Title *" value={form.title} onChange={(v) => set("title", v)} placeholder="e.g. LV Neverfull MM" />
          <Field label="Price *" value={form.price} onChange={(v) => set("price", v)} placeholder="e.g. $369" />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Brand</label>
              <select value={form.tag} onChange={(e) => set("tag", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
                <option value="">Select Brand</option>
                {brands.map((b) => <option key={b} value={b}>{b}</option>)}
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
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Image</label>
            <div className="space-y-2">
              <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-4 text-sm text-muted-foreground transition hover:border-burgundy hover:text-burgundy ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
                <Upload className="h-4 w-4" />
                {uploading ? "Uploading..." : "Click to upload image"}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
              <Field label="Or paste image URL" value={form.img} onChange={(v) => set("img", v)} placeholder="https://..." />
            </div>
          </div>
          {form.img && (
            <img src={form.img} alt="preview" className="h-32 w-full rounded-xl object-cover border border-border"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          )}

          <div>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Product description..."
              rows={3}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy resize-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-1">
            <input type="checkbox" id="inStock" checked={form.inStock} onChange={(e) => set("inStock", e.target.checked)} className="h-4 w-4 accent-burgundy" />
            <label htmlFor="inStock" className="text-sm text-ink">In Stock</label>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-border py-2.5 text-sm font-medium hover:bg-secondary">Cancel</button>
            <button type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-cream"
              style={{ background: "var(--gradient-luxe)" }}>
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

/* ── Account Tab ── */
function AccountTab({ onFlash }: { onFlash: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [err, setErr] = useState("");

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim() || !password.trim()) { setErr("Both fields required."); return; }
    if (password !== confirm) { setErr("Passwords do not match."); return; }
    changeCredentials(username.trim(), password);
    setUsername(""); setPassword(""); setConfirm(""); setErr("");
    onFlash();
  }

  return (
    <div className="max-w-sm">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Change Credentials</h3>
        <form onSubmit={save} className="space-y-4">
          <Field label="New Username" value={username} onChange={setUsername} placeholder="e.g. admin" />
          <Field label="New Password" value={password} onChange={setPassword} placeholder="Min 6 characters" />
          <Field label="Confirm Password" value={confirm} onChange={setConfirm} placeholder="Repeat password" />
          {err && <p className="text-xs text-red-500">{err}</p>}
          <button type="submit" className="w-full rounded-lg py-2.5 text-sm font-semibold text-cream" style={{ background: "var(--gradient-luxe)" }}>
            Update Credentials
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Settings Tab ── */
function SettingsTab({ settings, setSettings, onSave }: { settings: SiteSettings; setSettings: (s: SiteSettings) => void; onSave: () => void }) {
  const [newItem, setNewItem] = useState("");
  const set = (k: keyof SiteSettings, v: string) => setSettings({ ...settings, [k]: v });

  return (
    <div className="max-w-2xl space-y-5">
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
              <button onClick={() => setSettings({ ...settings, marqueeItems: settings.marqueeItems.filter((_, j) => j !== i) })}
                className="text-red-400 hover:text-red-600"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && newItem.trim()) { e.preventDefault(); setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            placeholder="Add marquee item..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-burgundy" />
          <button onClick={() => { if (newItem.trim()) { setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            className="rounded-lg px-4 py-2 text-cream" style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button onClick={onSave} className="rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream shadow"
        style={{ background: "var(--gradient-luxe)" }}>
        Save Settings
      </button>
    </div>
  );
}
