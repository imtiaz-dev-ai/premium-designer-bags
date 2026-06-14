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

// ── Products (localStorage) ───────────────────────────────────────────────────

const PRODUCTS_KEY = "admin_products";

function loadProducts(): Product[] {
  if (!isBrowser) return [];
  try {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveProducts(products: Product[]) {
  if (!isBrowser) return;
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

export async function getProducts(): Promise<Product[]> {
  return loadProducts();
}

export async function addProduct(p: Omit<Product, "id">): Promise<Product | null> {
  const products = loadProducts();
  const newProduct: Product = { ...p, id: crypto.randomUUID() };
  saveProducts([newProduct, ...products]);
  return newProduct;
}

export async function updateProduct(p: Product): Promise<boolean> {
  const products = loadProducts();
  saveProducts(products.map((x) => (x.id === p.id ? p : x)));
  return true;
}

export async function bulkInsertProducts(products: Omit<Product, "id">[]): Promise<number> {
  const existing = loadProducts();
  const newProducts: Product[] = products.map((p) => ({ ...p, id: crypto.randomUUID() }));
  saveProducts([...newProducts, ...existing]);
  return newProducts.length;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = loadProducts();
  saveProducts(products.filter((p) => p.id !== id));
  return true;
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

export function getAdminPassword(): string {
  if (!isBrowser) return DEFAULT_PASSWORD;
  return localStorage.getItem(PASSWORD_KEY) ?? DEFAULT_PASSWORD;
}

export function changeAdminPassword(newPassword: string) {
  if (!isBrowser) return;
  localStorage.setItem(PASSWORD_KEY, newPassword);
}

export function isAdminLoggedIn(): boolean {
  if (!isBrowser) return false;
  return sessionStorage.getItem("admin_auth") === "true";
}

export function adminLogin(password: string): boolean {
  if (!isBrowser) return false;
  if (password === getAdminPassword()) {
    sessionStorage.setItem("admin_auth", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  if (!isBrowser) return;
  sessionStorage.removeItem("admin_auth");
}
