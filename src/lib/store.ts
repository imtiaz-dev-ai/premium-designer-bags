import { supabase } from "@/lib/supabase";

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

const SETTINGS_KEY = "admin_settings";
const PASSWORD_KEY = "admin_password";
const DEFAULT_PASSWORD = "diamond2024";

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
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
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
  const { data, error } = await supabase.from("products").insert([{
    title: p.title,
    price: p.price,
    tag: p.tag,
    img: p.img,
    category: p.category,
    description: p.description,
    in_stock: p.inStock,
    section: p.section,
  }]).select().single();
  if (error) { console.error(error); return null; }
  return { ...p, id: data.id };
}

export async function updateProduct(p: Product): Promise<boolean> {
  const { error } = await supabase.from("products").update({
    title: p.title,
    price: p.price,
    tag: p.tag,
    img: p.img,
    category: p.category,
    description: p.description,
    in_stock: p.inStock,
    section: p.section,
  }).eq("id", p.id);
  if (error) { console.error(error); return false; }
  return true;
}

export async function bulkInsertProducts(products: Omit<Product, "id">[]): Promise<number> {
  const rows = products.map((p) => ({
    title: p.title,
    price: p.price,
    tag: p.tag,
    img: p.img,
    category: p.category,
    description: p.description,
    in_stock: p.inStock,
    section: p.section,
  }));
  const { data, error } = await supabase.from("products").insert(rows).select();
  if (error) { console.error(error); return 0; }
  return data?.length ?? 0;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) { console.error(error); return false; }
  return true;
}

// ── Settings (localStorage) ───────────────────────────────────────────────────

export function getSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch { return defaultSettings; }
}

export function saveSettings(s: SiteSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export function getAdminPassword(): string {
  return localStorage.getItem(PASSWORD_KEY) ?? DEFAULT_PASSWORD;
}

export function changeAdminPassword(newPassword: string) {
  localStorage.setItem(PASSWORD_KEY, newPassword);
}

export function isAdminLoggedIn(): boolean {
  return sessionStorage.getItem("admin_auth") === "true";
}

export function adminLogin(password: string): boolean {
  if (password === getAdminPassword()) {
    sessionStorage.setItem("admin_auth", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  sessionStorage.removeItem("admin_auth");
}
