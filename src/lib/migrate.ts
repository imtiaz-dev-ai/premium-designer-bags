import { supabase } from "./supabase";

// All catalog products with their data — images will be resolved at runtime from Vite imports
export async function migrateCatalogToSupabase(
  allProducts: Array<{
    title: string;
    price: string;
    tag: string;
    img: string;
    category: string;
    section: string;
    description: string;
  }>
): Promise<{ inserted: number; error: string | null }> {
  const rows = allProducts.map((p) => ({
    title: p.title,
    price: p.price,
    tag: p.tag ?? "",
    img: p.img ?? "",
    category: p.category,
    section: p.section ?? "bestsellers",
    description: p.description ?? "",
    in_stock: true,
  }));

  const { error } = await supabase.from("products").insert(rows);
  if (error) return { inserted: 0, error: error.message };
  return { inserted: rows.length, error: null };
}
