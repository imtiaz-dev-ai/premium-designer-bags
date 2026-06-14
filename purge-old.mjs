import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://scvmpyvznndwvqobxwwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdm1weXZ6bm5kd3Zxb2J4d3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMjU0MjIsImV4cCI6MjA5NjkwMTQyMn0.x8_5DIPDx_OzmC3wyhPCmUDjIKqqlVCryETwUSD8iLM"
);

// Tumhare real products — YEH RAKHNE HAIN (admin panel se)
const KEEP_TITLES = [
  "Hermes Kelly navy blue",
  "Hermès Kelly bag",
  "Hermes herbag__ blue",
  "Lv monogram large tote",
  "Hermès Oran Sandal — blue",
  "Gucci GG bamboo Bag — burgundy",
  "Gucci GG bamboo Bag — burgundy ",
  "Chanel Raffia Kelly bag",
  "Hermès oran sandal",
  "Hermès heel sandal",
  "Hermès heel sandal ",
  "new hai",
  "Chanel blue sandal",
  "Lv pool pillow slides__ blue",
  "Louis Vuitton Sling back  — Blue",
  "Louis Vuitton Sling back — Blue",
  "LV Neverfull MM Tote M27358",
  "Saint Laurent Saddle — Caramel Calfskin",
  "Chanel denim.logo cork sandal",
  "Louis Vuitton ballet flat",
  "Louis Vuitton Sneakers",
  "Louis Vuitton Sneakers ",
  "Gucci Clifford calfskin GG _ black",
  "Gucci Clifford calfskin GG _ black ",
  "Guvvi heel pumps",
  "Guvvi heel pumps ",
  "Gucci black pearl pumps",
  "Gucci black pearl pumps ",
  "Gucci GG black heel — black",
  "Gucci sling back pumps",
  "Gucci GG slingback— Black",
  "Dior J&#39;Adior Slingback Pump — nudes",
  "Dior J'Adior Slingback Pump — nudes",
  "Dior J'Adior Slingback Pump — nudes ",
  "Dior slides light blue",
  "Dior summer sandal",
  "Dior summer sandal ",
  "Prada heel — Black",
  "Prada Slingback Pump —",
  "Prada Slingback Pump — ",
  "Prada pumps — Black",
  "Cartier Bracelet  — Yellow Gold silver",
  "Cartier Bracelet — Yellow Gold silver",
  "Cartier Bracelet",
  "Cartier Bracelet —",
  "Cartier Bracelet — ",
  "Hermès oran sandal ",
  "Chanel Tweed Jacket —",
  "Chanel Tweed Jacket — ",
  "Chanel Bouclé Blazer — Black white",
  "Chanel cardigan",
  "Chanel cardigan ",
  "Chanel CC Logo cardigan —",
  "Chanel CC Logo cardigan — ",
  "Dior sweater",
  "Dior sweater ",
  "Dior Oblique Dress —",
  "Dior Oblique Dress — ",
  "Dior dress",
  "Dior dress — Black",
  "Dior Lady Dior Silk Shirt",
  "Cartier Panthère Stud Bracelet",
  "Cartier Panthère Stud Bracelet ",
  "Designer Scarf — Animal Print",
  "Dior Cashmere Wrap — Camel",
  "Dior scarves",
  "Dior scarves ",
  "Dior wool scarf",
  "Dior scarf",
  "Dior scarf ",
  "Dior",
  "Dior ",
  "LV Neverfull MM Tote M27358 — 47×28×14 cm",
  "LV Pochette Métis M27357",
  "LV Side Trunk PM M27436",
  "Gucci Horsebit Slide Sandal",
  "Saint Laurent Saddle — Caramel Calfskin",
  "Cartier Clash de Cartier Ring",
  "Cartier Diamants Légers Necklace",
  "LV Speedy",
  "LV Speedy ",
  "LV trunk bag",
  "Chanel bag— light blue",
  "Chanel bag— light blue ",
  "Chanel 19 Large Handbag — Burgundy Lambskin",
  "Gucci Interlocking G Sandal",
  "LV speedy bag",
  "Chanel CC Logo Mule — White",
];

const { data: allProducts, error: fetchErr } = await supabase
  .from("products")
  .select("id, title");

if (fetchErr) { console.error("Fetch error:", fetchErr.message); process.exit(1); }

console.log("Total products in DB:", allProducts.length);

// Delete jo KEEP list mein NAHI hain
const keepNormalized = KEEP_TITLES.map(t => t.trim().toLowerCase());
const toDelete = allProducts.filter(p => !keepNormalized.includes(p.title.trim().toLowerCase()));

console.log(`To delete: ${toDelete.length}`);
toDelete.forEach(p => console.log(" DELETE:", p.title));

if (toDelete.length === 0) { console.log("Nothing to delete."); process.exit(0); }

const ids = toDelete.map(p => p.id);
const { error: delErr } = await supabase.from("products").delete().in("id", ids);

if (delErr) { console.error("Delete error:", delErr.message); process.exit(1); }

console.log(`\n✅ Deleted ${toDelete.length} products!`);
