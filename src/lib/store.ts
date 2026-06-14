import { supabase } from "./supabase";

export type Product = {
  id: string;
  title: string;
  price: string;
  tag: string;
  img: string;
  category: string;
  description?: string;
  inStock: boolean;
  section: string;
};

export type SiteSettings = {
  whatsapp: string;
  whatsappLink: string;
  instagram: string;
  tiktok: string;
  email: string;
  marqueeItems: string[];
};

const isBrowser = typeof window !== "undefined";

const SETTINGS_KEY = "admin_settings";
const CREDENTIALS_KEY = "admin_credentials";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "designer2024";

export const defaultSettings: SiteSettings = {
  whatsapp: "+39 351 543 9347",
  whatsappLink: "https://wa.me/393515439347",
  instagram: "https://www.instagram.com/the_diamond_bags",
  tiktok: "https://www.tiktok.com/@luxlovebags?_r=1&_t=ZN-96xGItIiqj0",
  email: "t33899153@gmail.com",
  marqueeItems: ["Free Worldwide Shipping", "Master Quality", "WhatsApp Only Ordering", "Real Photos Before Dispatch", "Worldwide Delivery"],
};

// ── Products (Supabase) ───────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return (data ?? []).map((r) => ({
    id: r.id,
    title: r.title,
    price: r.price,
    tag: r.tag ?? "",
    img: r.img ?? "",
    category: r.category ?? "",
    description: r.description ?? "",
    inStock: r.in_stock ?? true,
    section: r.section ?? "bestsellers",
  }));
}

export async function addProduct(p: Omit<Product, "id">): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .insert([{ title: p.title, price: p.price, tag: p.tag, img: p.img, category: p.category, description: p.description, in_stock: p.inStock, section: p.section }])
    .select()
    .single();
  if (error) { console.error(error); return null; }
  return { ...p, id: data.id };
}

export async function updateProduct(p: Product): Promise<void> {
  const { error } = await supabase
    .from("products")
    .update({ title: p.title, price: p.price, tag: p.tag, img: p.img, category: p.category, description: p.description, in_stock: p.inStock, section: p.section })
    .eq("id", p.id);
  if (error) console.error(error);
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) console.error(error);
}

// ── Settings (localStorage) ───────────────────────────────────────────────────


export function getSettings(): SiteSettings {
  if (!isBrowser) return defaultSettings;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch { return defaultSettings; }
}

export function saveSettings(s: SiteSettings) {
  if (!isBrowser) return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

// ── Brands (localStorage) ────────────────────────────────────────────────────

const BRANDS_KEY = "admin_brands";

export function getSiteBrands(): string[] | null {
  if (!isBrowser) return null;
  try {
    const raw = localStorage.getItem(BRANDS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function saveSiteBrands(brands: string[]) {
  if (!isBrowser) return;
  localStorage.setItem(BRANDS_KEY, JSON.stringify(brands));
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export function isAdminLoggedIn(): boolean {
  if (!isBrowser) return false;
  return sessionStorage.getItem("admin_auth") === "true";
}

export function adminLogin(username: string, password: string): boolean {
  if (!isBrowser) return false;
  const stored = localStorage.getItem(CREDENTIALS_KEY);
  const creds = stored ? JSON.parse(stored) : { username: DEFAULT_USERNAME, password: DEFAULT_PASSWORD };
  if (username === creds.username && password === creds.password) {
    sessionStorage.setItem("admin_auth", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  if (!isBrowser) return;
  sessionStorage.removeItem("admin_auth");
}

export function changeCredentials(username: string, password: string) {
  if (!isBrowser) return;
  localStorage.setItem(CREDENTIALS_KEY, JSON.stringify({ username, password }));
}
