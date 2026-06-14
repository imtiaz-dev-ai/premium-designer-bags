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
  BESTSELLERS, SHOES, JEWELRY, WATCHES, CLOTHES, HATS, SCARFS, SUNGLASSES, BELTS, COLLECTION,
} from "@/lib/catalog";
import { supabase } from "@/lib/supabase";
import {
  ShoppingBag, Settings, Plus, Pencil, Trash2,
  X, Check, Eye, Search, LogOut, KeyRound, Tag, Upload, Menu,
} from "lucide-react";
import logoImg from "@/assets/Logo.png";

const DEFAULT_BRANDS = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Dior",
  "Saint Laurent", "Celine", "Bottega Veneta", "Goyard", "Fendi",
  "Valentino", "Chloé", "Cartier", "Bvlgari", "Messika", "Burberry",
  "Loewe", "Rolex", "Omega", "Loro Piana", "Tiffany & Co",
  "Van Cleef & Arpels", "Patek Philippe", "Tag Heuer",
];

const CATEGORIES = [
  "bags", "shoes", "jewelry", "watches", "clothes",
  "hats", "scarfs", "sunglasses", "belts", "collection",
];

type Tab = "products" | "brands" | "settings" | "account";

export default function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate("/admin/login");
  }, []);

  function logout() { adminLogout(); navigate("/admin/login"); }

  const [tab, setTab] = useState<Tab>("products");
  const [menuOpen, setMenuOpen] = useState(false);
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

  async function handleFixTags() {
    const TAG_MAP: Record<string, string> = {
      "LV": "Louis Vuitton",
      "YSL": "Saint Laurent",
      "BV": "Bottega Veneta",
      "Tiffany": "Tiffany & Co",
      "Patek": "Patek Philippe",
      "VCA": "Van Cleef & Arpels",
    };
    const toFix = products.filter((p) => TAG_MAP[p.tag]);
    if (toFix.length === 0) {
      const uniqueTags = [...new Set(products.map((p) => p.tag).filter(Boolean))];
      alert("No products need tag fixing.\n\nExisting tags:\n" + uniqueTags.join("\n"));
      return;
    }
    if (!confirm(`Fix tags for ${toFix.length} products?`)) return;
    let fixed = 0;
    for (const p of toFix) {
      const newTag = TAG_MAP[p.tag];
      const { error } = await supabase.from("products").update({ tag: newTag }).eq("id", p.id);
      if (!error) fixed++;
    }
    const fresh = await getProducts();
    setProducts(fresh);
    alert(`✅ ${fixed} products fixed!`);
  }

  async function handlePurgeOldCatalog() {
    const oldTitles = [
      ...BESTSELLERS, ...SHOES, ...JEWELRY, ...WATCHES, ...CLOTHES,
      ...HATS, ...SCARFS, ...SUNGLASSES, ...BELTS, ...COLLECTION,
    ].map((p) => p.title.trim());

    const toDelete = products.filter((p) => oldTitles.includes(p.title.trim()));
    if (toDelete.length === 0) { alert("No old catalog products found."); return; }
    if (!confirm(`Delete ${toDelete.length} old catalog products?`)) return;

    const ids = toDelete.map((p) => p.id);
    const { error } = await supabase.from("products").delete().in("id", ids);
    if (error) { alert("Error: " + error.message); return; }
    setProducts((prev) => prev.filter((p) => !ids.includes(p.id)));
    alert(`✅ ${toDelete.length} old catalog products deleted!`);
  }

  async function handleMigrate() {
    if (!confirm("Migrate all catalog products to Supabase?")) return;
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
      ...COLLECTION.map((p) => ({ ...p, tag: p.tag ?? "", category: "collection", section: "collection", description: "" })),
    ];
    const { inserted, error } = await migrateCatalogToSupabase(allCatalog);
    if (error) { alert("Migration failed: " + error); return; }
    const fresh = await getProducts();
    setProducts(fresh);
    alert(`✅ ${inserted} products migrated!`);
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

  function switchTab(t: Tab) { setTab(t); setMenuOpen(false); }

  const TAB_ICONS = {
    products: <ShoppingBag className="h-4 w-4" />,
    brands: <Tag className="h-4 w-4" />,
    settings: <Settings className="h-4 w-4" />,
    account: <KeyRound className="h-4 w-4" />,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Logo" className="h-8 w-8 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold text-ink leading-none">Admin</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Premium Designer</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saved && (
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                <Check className="h-3 w-3" /> Saved
              </span>
            )}
            {/* Desktop actions */}
            <div className="hidden sm:flex items-center gap-2">
              <a href="/" target="_blank" className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-burgundy">
                <Eye className="h-3.5 w-3.5" /> View Site
              </a>
              <button onClick={handleFixTags} className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-600 hover:bg-blue-100">
                <Check className="h-3.5 w-3.5" /> Fix Tags
              </button>
              <button onClick={handleMigrate} className="flex items-center gap-1.5 rounded-lg border border-gold/50 bg-gold/10 px-3 py-2 text-xs font-medium text-burgundy hover:bg-gold/20">
                <Upload className="h-3.5 w-3.5" /> Migrate
              </button>
              <button onClick={handlePurgeOldCatalog} className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100">
                <Trash2 className="h-3.5 w-3.5" /> Purge Old
              </button>
              <button onClick={logout} className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50">
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>
            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-border p-2 sm:hidden">
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="border-t border-border bg-card px-4 py-3 space-y-2 sm:hidden">
            <a href="/" target="_blank" className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium">
              <Eye className="h-4 w-4" /> View Site
            </a>
            <button onClick={handleFixTags} className="flex w-full items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm font-medium text-blue-600">
              <Check className="h-4 w-4" /> Fix Brand Tags
            </button>
            <button onClick={handleMigrate} className="flex w-full items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-3 py-2.5 text-sm font-medium text-burgundy">
              <Upload className="h-4 w-4" /> Migrate Catalog
            </button>
            <button onClick={handlePurgeOldCatalog} className="flex w-full items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-medium text-red-600">
              <Trash2 className="h-4 w-4" /> Purge Old Catalog
            </button>
            <button onClick={logout} className="flex w-full items-center gap-2 rounded-lg border border-red-200 px-3 py-2.5 text-sm font-medium text-red-500">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        )}

        {/* Tab bar */}
        <div className="flex border-t border-border">
          {(["products", "brands", "settings", "account"] as Tab[]).map((t) => (
            <button key={t} onClick={() => switchTab(t)}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition sm:flex-row sm:justify-center sm:gap-1.5 sm:py-3 sm:text-xs ${tab === t ? "border-b-2 border-burgundy text-burgundy" : "border-b-2 border-transparent text-muted-foreground"}`}>
              {TAB_ICONS[t]}
              <span className="hidden xs:inline sm:inline">{t}</span>
              {t === "products" && <span className="rounded-full bg-burgundy/10 px-1 py-0.5 text-[9px] text-burgundy">{products.length}</span>}
              {t === "brands" && <span className="rounded-full bg-burgundy/10 px-1 py-0.5 text-[9px] text-burgundy">{brands.length}</span>}
            </button>
          ))}
        </div>
      </header>

      <main className="px-3 py-4 sm:px-6 sm:py-8 max-w-7xl mx-auto">
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
        {tab === "brands" && <BrandsTab brands={brands} onChange={handleBrandsChange} />}
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
      {/* Search + filters */}
      <div className="mb-4 space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search products..."
            className="w-full rounded-xl border border-border bg-background pl-9 pr-4 py-3 text-sm outline-none focus:border-burgundy" />
        </div>
        <div className="flex gap-2">
          <select value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setPage(1); }}
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filterBrand} onChange={(e) => { setFilterBrand(e.target.value); setPage(1); }}
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-burgundy">
            <option value="">All Brands</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      {/* Add button + count */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{filtered.length} products</span>
        <button onClick={onAdd}
          className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-cream shadow-lg active:scale-95 transition-transform"
          style={{ background: "var(--gradient-luxe)" }}>
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm text-muted-foreground">Loading products...</div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
          No products found.
        </div>
      ) : (
        <>
          {/* 2-col on mobile, up to 5-col on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {paginated.map((p) => (
              <div key={p.id} className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={p.img} alt={p.title} className="aspect-square w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image"; }} />
                {/* Always-visible action buttons on mobile */}
                <div className="absolute right-1.5 top-1.5 flex gap-1">
                  <button onClick={() => onEdit(p)}
                    className="rounded-lg bg-white/95 p-2 shadow-md active:scale-95 transition-transform">
                    <Pencil className="h-3.5 w-3.5 text-ink" />
                  </button>
                  <button onClick={() => onDelete(p.id)}
                    className="rounded-lg bg-white/95 p-2 shadow-md active:scale-95 transition-transform">
                    <Trash2 className="h-3.5 w-3.5 text-red-500" />
                  </button>
                </div>
                <div className="p-2">
                  <span className="mb-0.5 inline-block rounded-full bg-gold/15 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-burgundy">{p.tag || "—"}</span>
                  <p className="line-clamp-2 text-[11px] font-semibold text-ink leading-snug">{p.title}</p>
                  <p className="mt-0.5 text-xs font-bold text-burgundy">{p.price}</p>
                  <p className="text-[9px] text-muted-foreground capitalize">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length > page * PAGE && (
            <div className="mt-6 text-center">
              <button onClick={() => setPage((p) => p + 1)}
                className="rounded-xl border border-border px-6 py-3 text-sm font-medium active:scale-95 transition-transform">
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
    if (!confirm(`Delete "${brand}"?`)) return;
    onChange(brands.filter((b) => b !== brand));
  }

  return (
    <div>
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Manage Brands</h3>
          <button onClick={() => { if (confirm("Reset to default?")) onChange(DEFAULT_BRANDS); }}
            className="text-xs text-muted-foreground underline">Reset</button>
        </div>
        <div className="mb-3 flex gap-2">
          <input value={newBrand} onChange={(e) => { setNewBrand(e.target.value); setErr(""); }}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="New brand name..."
            className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy" />
          <button onClick={add}
            className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold text-cream active:scale-95 transition-transform"
            style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        {err && <p className="mb-3 text-xs text-red-500">{err}</p>}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
              <span className="text-sm font-medium text-ink">{brand}</span>
              <button onClick={() => remove(brand)} className="ml-2 rounded-lg p-2 text-red-400 active:scale-95 transition-transform hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        {brands.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">No brands.</p>}
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
    category: initial?.category ?? "",
    section: initial?.section ?? "",
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
    if (!form.title.trim() || !form.price.trim() || !form.category) return;
    onSave({ ...form, id: initial?.id ?? "", section: form.category });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <div
        className="w-full rounded-t-3xl border border-border bg-card shadow-2xl sm:max-w-md sm:rounded-3xl"
        style={{ maxHeight: "92dvh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar for mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-border" />
        </div>

        <div className="px-5 pb-6 pt-4 sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">{initial ? "Edit Product" : "Add Product"}</h2>
            <button onClick={onClose} className="rounded-full p-1.5 hover:bg-secondary"><X className="h-5 w-5" /></button>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <Field label="Title *" value={form.title} onChange={(v) => set("title", v)} placeholder="e.g. LV Neverfull MM" />
            <Field label="Price *" value={form.price} onChange={(v) => set("price", v)} placeholder="e.g. $369" />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Brand</label>
                <select value={form.tag} onChange={(e) => set("tag", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-burgundy">
                  <option value="">Brand</option>
                  {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Category *</label>
                <select value={form.category} onChange={(e) => { set("category", e.target.value); set("section", e.target.value); }}
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-burgundy">
                  <option value="">Select Category</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Image upload — big tap target on mobile */}
            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Image</label>
              <label className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-6 text-sm transition ${uploading ? "border-burgundy/50 opacity-60 pointer-events-none" : "border-border hover:border-burgundy"}`}>
                {form.img
                  ? <img src={form.img} alt="preview" className="h-28 w-full rounded-lg object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  : <Upload className="h-8 w-8 text-muted-foreground" />
                }
                <span className="text-muted-foreground">{uploading ? "Uploading..." : form.img ? "Tap to change image" : "Tap to upload image"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
              <input value={form.img} onChange={(e) => set("img", e.target.value)}
                placeholder="Or paste image URL..."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-burgundy" />
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Description</label>
              <textarea value={form.description} onChange={(e) => set("description", e.target.value)}
                placeholder="Product description..." rows={3}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy resize-none" />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="inStock" checked={form.inStock} onChange={(e) => set("inStock", e.target.checked)} className="h-5 w-5 accent-burgundy" />
              <label htmlFor="inStock" className="text-sm text-ink">In Stock</label>
            </div>

            <div className="flex gap-3 pt-1">
              <button type="button" onClick={onClose}
                className="flex-1 rounded-xl border border-border py-3.5 text-sm font-medium active:scale-95 transition-transform">
                Cancel
              </button>
              <button type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-cream active:scale-95 transition-transform"
                style={{ background: "var(--gradient-luxe)" }}>
                {initial ? "Update" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy" />
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
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Change Credentials</h3>
        <form onSubmit={save} className="space-y-4">
          <Field label="New Username" value={username} onChange={setUsername} placeholder="e.g. admin" />
          <Field label="New Password" value={password} onChange={setPassword} placeholder="Min 6 characters" />
          <Field label="Confirm Password" value={confirm} onChange={setConfirm} placeholder="Repeat password" />
          {err && <p className="text-xs text-red-500">{err}</p>}
          <button type="submit" className="w-full rounded-xl py-3.5 text-sm font-semibold text-cream active:scale-95 transition-transform" style={{ background: "var(--gradient-luxe)" }}>
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
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact & Social</h3>
        <Field label="WhatsApp Number" value={settings.whatsapp} onChange={(v) => set("whatsapp", v)} />
        <Field label="WhatsApp Link" value={settings.whatsappLink} onChange={(v) => set("whatsappLink", v)} />
        <Field label="Instagram URL" value={settings.instagram} onChange={(v) => set("instagram", v)} />
        <Field label="TikTok URL" value={settings.tiktok} onChange={(v) => set("tiktok", v)} />
        <Field label="Email" value={settings.email} onChange={(v) => set("email", v)} />
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Marquee Text</h3>
        <div className="flex flex-wrap gap-2">
          {settings.marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs">
              {item}
              <button onClick={() => setSettings({ ...settings, marqueeItems: settings.marqueeItems.filter((_, j) => j !== i) })}
                className="text-red-400"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && newItem.trim()) { e.preventDefault(); setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            placeholder="Add marquee item..."
            className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy" />
          <button onClick={() => { if (newItem.trim()) { setSettings({ ...settings, marqueeItems: [...settings.marqueeItems, newItem.trim()] }); setNewItem(""); } }}
            className="rounded-xl px-4 py-3 text-cream active:scale-95 transition-transform" style={{ background: "var(--gradient-luxe)" }}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button onClick={onSave}
        className="w-full rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-cream shadow active:scale-95 transition-transform sm:w-auto sm:px-10"
        style={{ background: "var(--gradient-luxe)" }}>
        Save Settings
      </button>
    </div>
  );
}
