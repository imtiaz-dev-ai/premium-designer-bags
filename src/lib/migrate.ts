import { supabase } from "./supabase";

const STORAGE_BASE = "https://scvmpyvznndwvqobxwwe.supabase.co/storage/v1/object/public/products";

// Map of local asset paths to Supabase Storage URLs
const IMG_MAP: Record<string, string> = {
  // bags
  "bags/lv/1": `${STORAGE_BASE}/bags/lv/1.jpeg`,
  "bags/lv/2": `${STORAGE_BASE}/bags/lv/2.jpeg`,
  "bags/lv/3": `${STORAGE_BASE}/bags/lv/3.jpeg`,
  "bags/lv/4": `${STORAGE_BASE}/bags/lv/4.jpeg`,
  "bags/lv/5": `${STORAGE_BASE}/bags/lv/5.jpeg`,
  "bags/Chanel/1": `${STORAGE_BASE}/bags/Chanel/1.jpeg`,
  "bags/Chanel/2": `${STORAGE_BASE}/bags/Chanel/2.jpeg`,
  "bags/Chanel/3": `${STORAGE_BASE}/bags/Chanel/3.jpeg`,
  "bags/Chanel/6": `${STORAGE_BASE}/bags/Chanel/6.jpeg`,
  "bags/Chanel/Chanel": `${STORAGE_BASE}/bags/Chanel/Chanel.jpeg`,
  "bags/Chanel/Chanel5": `${STORAGE_BASE}/bags/Chanel/Chanel5.jpeg`,
  "bags/Gucci/1": `${STORAGE_BASE}/bags/Gucci/1.jpeg`,
  "bags/Gucci/2": `${STORAGE_BASE}/bags/Gucci/2.jpeg`,
  "bags/Gucci/3": `${STORAGE_BASE}/bags/Gucci/3.jpeg`,
  "bags/Gucci/4": `${STORAGE_BASE}/bags/Gucci/4.jpeg`,
  "bags/Gucci/5": `${STORAGE_BASE}/bags/Gucci/5.jpeg`,
  "bags/Ysl/1": `${STORAGE_BASE}/bags/Ysl/1.jpeg`,
  "bags/Ysl/2": `${STORAGE_BASE}/bags/Ysl/2.jpeg`,
  "bags/Ysl/3": `${STORAGE_BASE}/bags/Ysl/3.jpeg`,
  "bags/Ysl/4": `${STORAGE_BASE}/bags/Ysl/4.jpeg`,
  "bags/Ysl/5": `${STORAGE_BASE}/bags/Ysl/5.jpeg`,
  // shoes
  "shoes/Hermes/1": `${STORAGE_BASE}/shoes/Hermes/1.jpeg`,
  "shoes/Hermes/2": `${STORAGE_BASE}/shoes/Hermes/2.jpeg`,
  "shoes/Hermes/3": `${STORAGE_BASE}/shoes/Hermes/3.jpeg`,
  "shoes/Hermes/4": `${STORAGE_BASE}/shoes/Hermes/4.jpeg`,
  "shoes/Chanel/1": `${STORAGE_BASE}/shoes/Chanel/1.jpeg`,
  "shoes/Chanel/2": `${STORAGE_BASE}/shoes/Chanel/2.jpeg`,
  "shoes/Chanel/3": `${STORAGE_BASE}/shoes/Chanel/3.jpeg`,
  "shoes/Chanel/4": `${STORAGE_BASE}/shoes/Chanel/4.jpeg`,
  "shoes/Lv/1": `${STORAGE_BASE}/shoes/Lv/1.jpeg`,
  "shoes/Lv/2": `${STORAGE_BASE}/shoes/Lv/2.jpeg`,
  "shoes/Lv/3": `${STORAGE_BASE}/shoes/Lv/3.jpeg`,
  "shoes/Lv/4": `${STORAGE_BASE}/shoes/Lv/4.jpeg`,
  "shoes/Gucci/1": `${STORAGE_BASE}/shoes/Gucci/1.jpeg`,
  "shoes/Gucci/2": `${STORAGE_BASE}/shoes/Gucci/2.jpeg`,
  "shoes/Gucci/3": `${STORAGE_BASE}/shoes/Gucci/3.jpeg`,
  "shoes/Gucci/4": `${STORAGE_BASE}/shoes/Gucci/4.jpeg`,
  "shoes/Gucci/5": `${STORAGE_BASE}/shoes/Gucci/5.jpeg`,
  "shoes/Gucci/6": `${STORAGE_BASE}/shoes/Gucci/6.jpeg`,
  "shoes/Gucci/7": `${STORAGE_BASE}/shoes/Gucci/7.jpeg`,
  "shoes/Gucci/8": `${STORAGE_BASE}/shoes/Gucci/8.jpeg`,
  "shoes/Dior/1": `${STORAGE_BASE}/shoes/Dior/1.jpeg`,
  "shoes/Dior/2": `${STORAGE_BASE}/shoes/Dior/2.jpeg`,
  "shoes/Dior/3": `${STORAGE_BASE}/shoes/Dior/3.jpeg`,
  "shoes/Prada/1": `${STORAGE_BASE}/shoes/Prada/1.jpeg`,
  "shoes/Prada/2": `${STORAGE_BASE}/shoes/Prada/2.jpeg`,
  "shoes/Prada/3": `${STORAGE_BASE}/shoes/Prada/3.jpeg`,
  "shoes/Valentino shoe/1": `${STORAGE_BASE}/shoes/Valentino%20shoe/1.jpeg`,
  "shoes/Valentino shoe/2": `${STORAGE_BASE}/shoes/Valentino%20shoe/2.jpeg`,
  "shoes/brands/fendi": `${STORAGE_BASE}/shoes/brands/fendi.jfif`,
  "shoes/brands/Bottega Veneta": `${STORAGE_BASE}/shoes/brands/Bottega%20Veneta.jfif`,
  "shoes/brands/Loewe": `${STORAGE_BASE}/shoes/brands/Loewe.jfif`,
  // jewelry
  "jewelry/Cartier/1": `${STORAGE_BASE}/jewelry/Cartier/1.jpeg`,
  "jewelry/Cartier/2": `${STORAGE_BASE}/jewelry/Cartier/2.jpeg`,
  "jewelry/Cartier/3": `${STORAGE_BASE}/jewelry/Cartier/3.jpeg`,
  "jewelry/Cartier/4": `${STORAGE_BASE}/jewelry/Cartier/4.jpeg`,
  "jewelry/Cartier/5": `${STORAGE_BASE}/jewelry/Cartier/5.jpeg`,
  "jewelry/Cartier/6": `${STORAGE_BASE}/jewelry/Cartier/6.jpeg`,
  "jewelry/Cartier/7": `${STORAGE_BASE}/jewelry/Cartier/7.jpeg`,
  "jewelry/Bvlgari jewelry/1": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/1.jpeg`,
  "jewelry/Bvlgari jewelry/2": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/2.jpeg`,
  "jewelry/Bvlgari jewelry/3": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/3.jpeg`,
  "jewelry/Bvlgari jewelry/4": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/4.jpeg`,
  "jewelry/Bvlgari jewelry/5": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/5.jpeg`,
  "jewelry/Bvlgari jewelry/6": `${STORAGE_BASE}/jewelry/Bvlgari%20jewelry/6.jpeg`,
  "jewelry/Messika jewelry/1": `${STORAGE_BASE}/jewelry/Messika%20jewelry/1.jpeg`,
  "jewelry/Messika jewelry/2": `${STORAGE_BASE}/jewelry/Messika%20jewelry/2.jpeg`,
  "jewelry/Messika jewelry/3": `${STORAGE_BASE}/jewelry/Messika%20jewelry/3.jpeg`,
  "jewelry/Messika jewelry/4": `${STORAGE_BASE}/jewelry/Messika%20jewelry/4.jpeg`,
  "jewelry/Messika jewelry/5": `${STORAGE_BASE}/jewelry/Messika%20jewelry/5.jpeg`,
  // watches
  "watchs/Cartier watches women/1": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/1.jpeg`,
  "watchs/Cartier watches women/2": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/2.jpeg`,
  "watchs/Cartier watches women/3": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/3.jpeg`,
  "watchs/Cartier watches women/4": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/4.jpeg`,
  "watchs/Cartier watches women/5": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/5.jpeg`,
  "watchs/Cartier watches women/6": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/6.jpeg`,
  "watchs/Cartier watches women/Couple": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/Couple.jpeg`,
  "watchs/Cartier watches women/Couple2": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/Couple2.jpeg`,
  "watchs/Cartier watches women/Couple3": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/Couple3.jpeg`,
  "watchs/Cartier watches women/couple4": `${STORAGE_BASE}/watchs/Cartier%20watches%20women/couple4.jpeg`,
  // belts
  "belts/Hermes belts/1": `${STORAGE_BASE}/belts/Hermes%20belts/1.jpeg`,
  "belts/Hermes belts/2": `${STORAGE_BASE}/belts/Hermes%20belts/2.jpeg`,
  "belts/Hermes belts/3": `${STORAGE_BASE}/belts/Hermes%20belts/3.jpeg`,
  "belts/Hermes belts/4": `${STORAGE_BASE}/belts/Hermes%20belts/4.jpeg`,
  "belts/Hermes belts/5": `${STORAGE_BASE}/belts/Hermes%20belts/5.jpeg`,
  "belts/Hermes belts/6": `${STORAGE_BASE}/belts/Hermes%20belts/6.jpeg`,
  "belts/Hermes belts/7": `${STORAGE_BASE}/belts/Hermes%20belts/7.jpeg`,
  "belts/Hermes belts/8": `${STORAGE_BASE}/belts/Hermes%20belts/8.jpeg`,
  "belts/Hermes belts/9": `${STORAGE_BASE}/belts/Hermes%20belts/9.jpeg`,
  "belts/Hermes belts/10": `${STORAGE_BASE}/belts/Hermes%20belts/10.jpeg`,
  "belts/Lv belts/1": `${STORAGE_BASE}/belts/Lv%20belts/1.jpeg`,
  "belts/Lv belts/2": `${STORAGE_BASE}/belts/Lv%20belts/2.jpeg`,
  "belts/Lv belts/3": `${STORAGE_BASE}/belts/Lv%20belts/3.jpeg`,
  "belts/Lv belts/4": `${STORAGE_BASE}/belts/Lv%20belts/4.jpeg`,
  "belts/Lv belts/5": `${STORAGE_BASE}/belts/Lv%20belts/5.jpeg`,
  "belts/Lv belts/6": `${STORAGE_BASE}/belts/Lv%20belts/6.jpeg`,
  "belts/Lv belts/7": `${STORAGE_BASE}/belts/Lv%20belts/7.jpeg`,
  "belts/Lv belts/8": `${STORAGE_BASE}/belts/Lv%20belts/8.jpeg`,
  "belts/Lv belts/9": `${STORAGE_BASE}/belts/Lv%20belts/9.jpeg`,
  "belts/Lv belts/10": `${STORAGE_BASE}/belts/Lv%20belts/10.jpeg`,
  "belts/Lv belts/11": `${STORAGE_BASE}/belts/Lv%20belts/11.jpeg`,
  "belts/Lv belts/12": `${STORAGE_BASE}/belts/Lv%20belts/12.jpeg`,
  // scarfs
  "Scarfs/Lv scarves/1": `${STORAGE_BASE}/Scarfs/Lv%20scarves/1.jpeg`,
  "Scarfs/Lv scarves/2": `${STORAGE_BASE}/Scarfs/Lv%20scarves/2.jpeg`,
  "Scarfs/Lv scarves/3": `${STORAGE_BASE}/Scarfs/Lv%20scarves/3.jpeg`,
  "Scarfs/Lv scarves/4": `${STORAGE_BASE}/Scarfs/Lv%20scarves/4.jpeg`,
  "Scarfs/Lv scarves/5": `${STORAGE_BASE}/Scarfs/Lv%20scarves/5.jpeg`,
  "Scarfs/Lv scarves/6": `${STORAGE_BASE}/Scarfs/Lv%20scarves/6.jpeg`,
  "Scarfs/Lv scarves/7": `${STORAGE_BASE}/Scarfs/Lv%20scarves/7.jpeg`,
  "Scarfs/Lv scarves/8": `${STORAGE_BASE}/Scarfs/Lv%20scarves/8.jpeg`,
  "Scarfs/Scarves/1": `${STORAGE_BASE}/Scarfs/Scarves/1.jpeg`,
  "Scarfs/Scarves/2": `${STORAGE_BASE}/Scarfs/Scarves/2.jpeg`,
  "Scarfs/Scarves/3": `${STORAGE_BASE}/Scarfs/Scarves/3.jpeg`,
  "Scarfs/Scarves/4": `${STORAGE_BASE}/Scarfs/Scarves/4.jpeg`,
  "Scarfs/Scarves/5": `${STORAGE_BASE}/Scarfs/Scarves/5.jpeg`,
  "Scarfs/Scarves/6": `${STORAGE_BASE}/Scarfs/Scarves/6.jpeg`,
  "Scarfs/Scarves/7": `${STORAGE_BASE}/Scarfs/Scarves/7.jpeg`,
  // sunglasses
  "sunglasses/Chanel sunglasses/1": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/1.jpeg`,
  "sunglasses/Chanel sunglasses/2": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/2.jpeg`,
  "sunglasses/Chanel sunglasses/3": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/3.jpeg`,
  "sunglasses/Chanel sunglasses/4": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/4.jpeg`,
  "sunglasses/Chanel sunglasses/5": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/5.jpeg`,
  "sunglasses/Chanel sunglasses/6": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/6.jpeg`,
  "sunglasses/Chanel sunglasses/7": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/7.jpeg`,
  "sunglasses/Chanel sunglasses/8": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/8.jpeg`,
  "sunglasses/Chanel sunglasses/9": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/9.jpeg`,
  "sunglasses/Chanel sunglasses/10": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/10.jpeg`,
  "sunglasses/Chanel sunglasses/11": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/11.jpeg`,
  "sunglasses/Chanel sunglasses/12": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/12.jpeg`,
  "sunglasses/Chanel sunglasses/13": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/13.jpeg`,
  "sunglasses/Chanel sunglasses/14": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/14.jpeg`,
  "sunglasses/Chanel sunglasses/15": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/15.jpeg`,
  "sunglasses/Chanel sunglasses/16": `${STORAGE_BASE}/sunglasses/Chanel%20sunglasses/16.jpeg`,
  "sunglasses/Prada sunglasses/1": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/1.jpeg`,
  "sunglasses/Prada sunglasses/2": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/2.jpeg`,
  "sunglasses/Prada sunglasses/3": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/3.jpeg`,
  "sunglasses/Prada sunglasses/4": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/4.jpeg`,
  "sunglasses/Prada sunglasses/5": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/5.jpeg`,
  "sunglasses/Prada sunglasses/6": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/6.jpeg`,
  "sunglasses/Prada sunglasses/7": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/7.jpeg`,
  "sunglasses/Prada sunglasses/8": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/8.jpeg`,
  "sunglasses/Prada sunglasses/9": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/9.jpeg`,
  "sunglasses/Prada sunglasses/10": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/10.jpeg`,
  "sunglasses/Prada sunglasses/11": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/11.jpeg`,
  "sunglasses/Prada sunglasses/12": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/12.jpeg`,
  "sunglasses/Prada sunglasses/13": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/13.jpeg`,
  "sunglasses/Prada sunglasses/14": `${STORAGE_BASE}/sunglasses/Prada%20sunglasses/14.jpeg`,
  // clothes
  "Clothes/Chanel/1": `${STORAGE_BASE}/Clothes/Chanel/1.jpeg`,
  "Clothes/Chanel/2": `${STORAGE_BASE}/Clothes/Chanel/2.jpeg`,
  "Clothes/Chanel/3": `${STORAGE_BASE}/Clothes/Chanel/3.jpeg`,
  "Clothes/Chanel/4": `${STORAGE_BASE}/Clothes/Chanel/4.jpeg`,
  "Clothes/Dior/1": `${STORAGE_BASE}/Clothes/Dior/1.jpeg`,
  "Clothes/Dior/2": `${STORAGE_BASE}/Clothes/Dior/2.jpeg`,
  "Clothes/Dior/3": `${STORAGE_BASE}/Clothes/Dior/3.jpeg`,
  "Clothes/Dior/4": `${STORAGE_BASE}/Clothes/Dior/4.jpeg`,
  "Clothes/Dior/5": `${STORAGE_BASE}/Clothes/Dior/5.jpeg`,
  "Clothes/Dior/6": `${STORAGE_BASE}/Clothes/Dior/6.jpeg`,
  "Clothes/Dior/7": `${STORAGE_BASE}/Clothes/Dior/7.jpeg`,
  "Clothes/Dior/8": `${STORAGE_BASE}/Clothes/Dior/8.jpeg`,
  // hats
  "hats/Lv hats/1": `${STORAGE_BASE}/hats/Lv%20hats/1.jpeg`,
  "hats/Lv hats/2": `${STORAGE_BASE}/hats/Lv%20hats/2.jpeg`,
  "hats/Lv hats/3": `${STORAGE_BASE}/hats/Lv%20hats/3.jpeg`,
  // brand images
  "bags/brands/Bottega bag": `${STORAGE_BASE}/bags/brands/Bottega%20bag.jpeg`,
  "bags/brands/Celine": `${STORAGE_BASE}/bags/brands/Celine.jpeg`,
  "bags/brands/Chanel": `${STORAGE_BASE}/bags/brands/Chanel.jpeg`,
  "bags/brands/Goyard": `${STORAGE_BASE}/bags/brands/Goyard.jpeg`,
  "bags/brands/Fendi": `${STORAGE_BASE}/bags/brands/Fendi.jpeg`,
  "bags/brands/Chloe brand": `${STORAGE_BASE}/bags/brands/Chloe%20brand%20.jpeg`,
  "bags/brands/Ysl": `${STORAGE_BASE}/bags/brands/Ysl.jpeg`,
  "shoes/brands/Bottega Veneta": `${STORAGE_BASE}/shoes/brands/Bottega%20Veneta.jfif`,
  "Scarfs/Brands/Hermes": `${STORAGE_BASE}/Scarfs/Brands/Hermes.jfif`,
  "Scarfs/Brands/Gucci": `${STORAGE_BASE}/Scarfs/Brands/Gucci.jfif`,
  "Scarfs/Brands/LV": `${STORAGE_BASE}/Scarfs/Brands/LV.jpeg`,
  "Scarfs/Brands/Burberry": `${STORAGE_BASE}/Scarfs/Brands/Burberry.jpg`,
  "Scarfs/Brands/Channel": `${STORAGE_BASE}/Scarfs/Brands/Channel.jpg`,
  "Scarfs/Brands/fendi": `${STORAGE_BASE}/Scarfs/Brands/fendi.jpg`,
};

export function resolveStorageUrl(localUrl: string): string {
  // If already a full URL, return as-is
  if (localUrl.startsWith("http")) return localUrl;
  // Try to find a matching key
  for (const [key, url] of Object.entries(IMG_MAP)) {
    if (localUrl.includes(key)) return url;
  }
  return localUrl;
}

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
    img: resolveStorageUrl(p.img),
    category: p.category,
    section: p.section ?? "bestsellers",
    description: p.description ?? "",
    in_stock: true,
  }));

  const { error } = await supabase.from("products").insert(rows);
  if (error) return { inserted: 0, error: error.message };
  return { inserted: rows.length, error: null };
}
