import { useState } from "react";
import type React from "react";
import { Menu, X, Search, ShoppingBag, MapPin, Phone, ChevronDown, Truck, ShieldCheck, MessageCircle, RotateCcw, Mail, Star, Sparkles, Heart, Shirt, Gem, Sun } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import heroBag from "@/assets/hero-bag.jpg";
import collectionBanner from "@/assets/collection-banner.jpg";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";
import bag5 from "@/assets/bag-5.jpg";
import bag6 from "@/assets/bag-6.jpg";
import bag7 from "@/assets/bag-7.jpg";
import bag8 from "@/assets/bag-8.jpg";

const WHATSAPP = "+39 351 543 9347";
const WHATSAPP_LINK = "https://wa.me/393515439347";
const INSTAGRAM_LINK = "https://www.instagram.com/invites/contact/?igsh=j69wngjk0998&utm_content=q5u9w3f";
const TIKTOK_LINK = "https://www.tiktok.com/@luxlovebags?_r=1&_t=ZN-96xGItIiqj0";
const EMAIL = "t33899153@gmail.com";

const BAG_BRANDS = ["Hermès","Chanel","Louis Vuitton","Fendi","Gucci","Dior","Bottega Veneta","Goyard","Celine","Loewe","Coach","Prada"];

const SHOE_BRANDS = [
  { brand: "Hermès",         styles: ["Oran Sandal","Izmir Sandal","Kelly Mule"] },
  { brand: "Chanel",         styles: ["Cap-Toe Ballerina","CC Logo Mule","Slingback Pump"] },
  { brand: "Louis Vuitton",  styles: ["Archlight Sneaker","Stellar Mule","Bom Dia Flat Mule"] },
  { brand: "Fendi",          styles: ["Baguette Sandal","Flow Sneaker","Colibri Mule"] },
  { brand: "Gucci",          styles: ["Horsebit Loafer","Princetown Mule","Ace Sneaker"] },
  { brand: "Dior",           styles: ["CD Mule","Walk'n'Dior Sneaker","J'Adior Slingback"] },
  { brand: "Bottega Veneta", styles: ["Stretch Sandal","Puddle Boot","BV Tire Loafer"] },
  { brand: "Goyard",         styles: ["Richelieu Derby","Artois Sneaker"] },
  { brand: "Celine",         styles: ["Triomphe Ballet Flat","Bulky Sneaker","Slide Sandal"] },
  { brand: "Loewe",          styles: ["Toy Puffy Mule","Campo Sneaker","Gate Flat Sandal"] },
  { brand: "Coach",          styles: ["Lowline Low Top","Dreamer Sandal"] },
  { brand: "Prada",          styles: ["Monolith Boot","Cloudbust Sneaker","Slingback Pump"] },
];

const NAV_CATEGORIES: { name: string; items: string[] }[] = [
  { name: "Bags",        items: BAG_BRANDS },
  { name: "Shoes",       items: SHOE_BRANDS.map(s => `${s.brand} — ${s.styles[0]}`) },
  { name: "Jewelry",     items: ["Rings","Bracelets","Van Cleef","Cartier","Tiffany","Hermès"] },
  { name: "Watches",     items: ["Fob Watch","Cartier","Hermès"] },
  { name: "Clothes",     items: ["Shirts","Pants/Shorts","Coats/Jackets","Loro Piana","LV","BV"] },
  { name: "Accessories", items: ["Belts","Sunglasses","Wallets","Scarves / Robes / Towels","Backpack","Suitcase","Rimowa"] },
  { name: "Perfumes",    items: ["Men","Women"] },
];

type Category = { name: string; icon: React.ReactNode };
const CATEGORIES: Category[] = [
  { name: "Bags",       icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg> },
  { name: "Shoes",      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5v.75A6.75 6.75 0 0 0 9.75 18h7.5A3.75 3.75 0 0 0 21 14.25V10.5M3 10.5h18M3 10.5 5.25 6h13.5l2.25 4.5" /></svg> },
  { name: "Hats",       icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 3 4.5 6 4.5 9.5c0 .8.6 1.5 1.5 1.5h12c.9 0 1.5-.7 1.5-1.5C19.5 6 16 3 12 3ZM3 13h18" /></svg> },
  { name: "Jewelry",    icon: <Gem className="h-6 w-6" /> },
  { name: "Scarf",      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 3-4 8s4 8 4 8-4-3-4-8 4-8 4-8Zm0 0c0 0 4 3 4 8s-4 8-4 8" /></svg> },
  { name: "Clothes",    icon: <Shirt className="h-6 w-6" /> },
  { name: "Belts",      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="2" y="10" width="20" height="4" rx="1" /><path strokeLinecap="round" d="M8 12h2" /></svg> },
  { name: "Sunglasses", icon: <Sun className="h-6 w-6" /> },
];

type Product = { title: string; price: string; tag?: string; img: string };
const IMGS = [bag1,bag2,bag3,bag4,bag5,bag6,bag7,bag8];
const pick = (i: number) => IMGS[i % IMGS.length];

const BESTSELLERS: Product[] = [
  { title: "Louis Vuitton Speedy 30 Soft Celebration M28379", price: "$349", tag: "LV", img: bag6 },
  { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: bag2 },
  { title: "Hermès Birkin 30 — Chocolate Togo, Gold Hardware", price: "$849", tag: "Hermès", img: bag8 },
  { title: "Dior Mini Lady — Pine Green Patent Calfskin", price: "$299", tag: "Dior", img: bag4 },
  { title: "Chanel Maxi Flapbag AS6233 — Blush", price: "$539", tag: "Chanel", img: bag5 },
  { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: bag7 },
  { title: "Bottega Veneta Cream Bucket Bag", price: "$329", tag: "BV", img: bag3 },
  { title: "Loewe Cognac Leather Tote", price: "$369", tag: "Loewe", img: bag1 },
];

const SHOES: Product[] = [
  { title: "Hermès Oran Sandal — Gold Epsom Leather", price: "$389", tag: "Hermès", img: bag1 },
  { title: "Chanel Slingback Pump — Black & Beige Cap-Toe", price: "$329", tag: "Chanel", img: bag2 },
  { title: "Louis Vuitton Archlight 2.0 Sneaker — White Mesh", price: "$349", tag: "LV", img: bag3 },
  { title: "Gucci Horsebit 1953 Loafer — Brown GG Canvas", price: "$289", tag: "Gucci", img: bag4 },
  { title: "Dior J'Adior Slingback Pump — Black Mesh", price: "$319", tag: "Dior", img: bag5 },
  { title: "Prada Monolith Brushed Leather Boot — Black", price: "$429", tag: "Prada", img: bag6 },
  { title: "Bottega Veneta Stretch Flat Sandal — Cream", price: "$359", tag: "BV", img: bag7 },
  { title: "Celine Triomphe Ballet Flat — Tan Calfskin", price: "$279", tag: "Celine", img: bag8 },
  { title: "Loewe Toy Puffy Mule — Ivory Nappa", price: "$299", tag: "Loewe", img: bag1 },
  { title: "Fendi Baguette Sandal — FF Jacquard Strap", price: "$309", tag: "Fendi", img: bag2 },
  { title: "Coach Lowline Low Top Sneaker", price: "$189", tag: "Coach", img: bag3 },
  { title: "Goyard Artois Sneaker — White Goyardine", price: "$349", tag: "Goyard", img: bag4 },
];

const COLLECTION: Product[] = [
  "LV Blue Collection Neverfull MM Tote M27358|$369|LV",
  "LV Blue Collection OnTheGo PM M28181|$369|LV",
  "LV Blue Collection Diane M27362|$349|LV",
  "LV Blue Collection Pochette Métis M27357|$349|LV",
  "LV Blue Collection Side Trunk PM M27436|$349|LV",
  "LV Blue Collection Speedy Bandoulière 20 M28316|$309|LV",
  "LV Blue Collection Wallet On Chain Ivy M27755|$279|LV",
  "Dior Lady Dior Mini Chain — White Patent Calfskin|$289|Dior",
  "Loro Piana Rattan Leather Bag 27 cm|$319|Loro Piana",
  "The Row Margaux White Leather Set|$569|The Row",
  "Celine Triomphe Teen Bag — Pink Leather 22cm|$319|Celine",
  "Dior Lady D-Joy Medium — Black Cannage Lambskin|$329|Dior",
  "Dior Toujours Medium — Beige Macrocannage|$339|Dior",
  "Dior Saddle Bag 25cm|$289|Dior",
  "Dior Medium Book Tote — Beige Mizza Embroidery|$299|Dior",
  "Goyard Boheme Tote 27×15×42 cm|$349|Goyard",
  "Saint Laurent Cassandre Large Flap Wallet|$178|YSL",
  "Saint Laurent YSL Mini Bucket Bag 15×13×6 cm|$269|YSL",
  "LV OnTheGo BB M46993 — Black Embossed Cowhide|$289|LV",
  "Saint Laurent Lou Camera — Beige Quilted Leather|$258|YSL",
].map((s, i) => { const [title,price,tag] = s.split("|"); return { title, price, tag, img: pick(i) }; });

const BRANDS = ["Louis Vuitton","Chanel","Hermès","Dior","Gucci","Prada","Celine","Saint Laurent","Bottega Veneta","Loewe","Goyard","Loro Piana","The Row","Burberry","Fendi","Valentino","Givenchy","Chloé","Miu Miu","Coach","Balenciaga","Off-White","Jacquemus","Ami Paris","Toteme","Marni","Mulberry","Ferragamo","Versace","Moschino","Stella McCartney","Alexander McQueen","Balmain","Acne Studios","A.P.C.","Isabel Marant","Nanushka","Staud","Polène","Wandler","Cult Gaia","DeMellier","Strathberry","Boyy","Gabriela Hearst","Hunting Season","Mark Cross","Alaïa","Coperni","Khaite"];

const PAYMENT_METHODS = [
  { name: "PayPal",        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.59 3.025-2.566 6.082-8.558 6.082H9.825l-1.48 9.354h3.53l.964-6.104h2.282c4.947 0 7.878-2.394 8.796-7.145a5.58 5.58 0 0 0-.695-1.9z"/></svg> },
  { name: "Credit Card",   icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg> },
  { name: "Zelle",         icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13.56 2H4.5L2 12.04h6.31L3.56 22H19.5l2.5-10.04h-6.31L20.44 2h-6.88z"/></svg> },
  { name: "Venmo",         icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.07 2c.8 1.32 1.16 2.68 1.16 4.4 0 5.48-4.68 12.6-8.48 17.6H4.93L2 2.96l6.32-.6 1.56 12.68C11.32 12.2 13.63 7.4 13.63 4c0-1.08-.16-1.92-.44-2.64L19.07 2z"/></svg> },
  { name: "Bank Transfer", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg> },
  { name: "Cash App",      icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 13.93V17h-2v-1.07A4 4 0 0 1 8 12h2a2 2 0 0 0 2 2 1 1 0 0 0 0-2c-2.06 0-4-1.12-4-3a4 4 0 0 1 3-3.87V4h2v1.13A4 4 0 0 1 16 9h-2a2 2 0 0 0-2-2 1 1 0 0 0 0 2c2.06 0 4 1.12 4 3a4 4 0 0 1-3 3.93z"/></svg> },
];

function IGIcon() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function TTIcon() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>;
}

function CollectionToolbar() {
  const [inStock, setInStock] = useState(true);
  const [sort, setSort] = useState("Default");
  const [show, setShow] = useState("20");
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs">
      <label className="flex cursor-pointer items-center gap-2 border border-border bg-card px-3 py-2 hover:border-gold">
        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} className="accent-burgundy" />In stock only
      </label>
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-border bg-card px-3 py-2 text-xs font-medium text-foreground hover:border-gold focus:outline-none">
        <option>Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest</option>
      </select>
      <select value={show} onChange={(e) => setShow(e.target.value)} className="border border-border bg-card px-3 py-2 text-xs font-medium text-foreground hover:border-gold focus:outline-none">
        <option>20</option><option>40</option><option>All</option>
      </select>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a href={WHATSAPP_LINK} className="group block">
      <div className="relative aspect-square overflow-hidden bg-card">
        <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        {p.tag && <span className="absolute left-3 top-3 bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-burgundy backdrop-blur">{p.tag}</span>}
        <button aria-label="Save" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-cream/95 text-burgundy opacity-0 transition group-hover:opacity-100 hover:bg-burgundy hover:text-cream">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cream transition group-hover:translate-y-0" style={{ background: "var(--gradient-luxe)" }}>
          <MessageCircle className="mr-1.5 inline h-3.5 w-3.5" /> Inquire on WhatsApp
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="line-clamp-2 text-xs font-medium leading-snug text-foreground/85">{p.title}</h3>
        <span className="shrink-0 text-base font-semibold text-burgundy" style={{ fontFamily: "var(--font-display)" }}>{p.price}</span>
      </div>
      <div className="mt-1 flex items-center gap-0.5 text-gold">
        {[0,1,2,3,4].map((i) => <Star key={i} className="h-3 w-3 fill-gold" />)}
        <span className="ml-1 text-[10px] text-muted-foreground">Master Quality</span>
      </div>
    </a>
  );
}

function ProductSection({ id, title, subtitle, products, showToolbar }: { id: string; title: string; subtitle: string; products: Product[]; showToolbar?: boolean }) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— {title}</p>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>{subtitle}</h2>
          </div>
          {showToolbar && <CollectionToolbar />}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-gold">✦ All products loaded ✦</p>
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* TOP BAR */}
      <div className="text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" /><span>Italy & Dubai · UK · USA</span>
            <span className="hidden sm:flex items-center gap-1.5 ml-4"><Sparkles className="h-3 w-3 text-gold" /> Free worldwide shipping</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold"><IGIcon /><span className="hidden sm:inline">@the_diamond_bags</span></a>
            <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold"><TTIcon /><span className="hidden sm:inline">@luxlovebags</span></a>
            <a href={WHATSAPP_LINK} className="flex items-center gap-1.5 hover:text-gold"><Phone className="h-3 w-3 text-gold" />{WHATSAPP}</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer</span>
            <span className="text-xs font-medium tracking-[0.45em] text-gold uppercase">Bags</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#" className="hover:text-burgundy">Home</a>
            {NAV_CATEGORIES.map((c) => (
              <div key={c.name} className="group relative">
                <button className="flex items-center gap-1 hover:text-burgundy">{c.name}<ChevronDown className="h-3.5 w-3.5" /></button>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 border-t-2 border-gold bg-card opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
                  <ul className="py-2">
                    {c.items.map((it) => <li key={it}><a href="#collection" className="block px-4 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-burgundy">{it}</a></li>)}
                  </ul>
                </div>
              </div>
            ))}
            <a href="#about" className="hover:text-burgundy">About</a>
            <a href="#contact" className="hover:text-burgundy">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden p-2 hover:text-burgundy md:block"><Search className="h-5 w-5" /></button>
            <a href={WHATSAPP_LINK} className="hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90 md:inline-flex" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button aria-label="Cart" className="relative p-2 hover:text-burgundy">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">2</span>
            </button>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 lg:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-card lg:hidden">
            <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
              {NAV_CATEGORIES.map((c) => (
                <details key={c.name} className="border-b border-border py-2">
                  <summary className="cursor-pointer py-2 text-sm font-semibold text-burgundy">{c.name}</summary>
                  <ul className="pl-3">{c.items.map((it) => <li key={it}><a href="#collection" className="block py-1 text-sm text-muted-foreground">{it}</a></li>)}</ul>
                </details>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at top right, oklch(0.88 0.08 80 / 0.6), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.85 0.06 30 / 0.5), transparent 55%)" }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-burgundy">
              <Sparkles className="h-3 w-3" /> Italy & Dubai · Est. 2024
            </p>
            <h1 className="text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
              <span className="font-medium text-ink">Luxury</span><br/>
              <span className="italic text-burgundy">Redefined.</span><br/>
              <span className="font-medium text-ink">Style</span> <span className="italic text-gold">Elevated.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">A curated house of premium designer bags — Louis Vuitton, Chanel, Hermès, Dior and more — hand-shipped from Italy & Dubai.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#collection" className="group inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-lg transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
                Shop the Collection <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 border-2 border-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy transition hover:bg-burgundy hover:text-cream">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["15K+","Happy Clients"],["50+","Designer Brands"],["98%","Satisfaction"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-4xl font-medium tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-gold lg:block" />
            <img src={heroModel} alt="Premium designer bags" className="relative aspect-[4/5] w-full object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-luxe)" }} />
            <div className="absolute -bottom-6 -left-6 hidden w-56 bg-card p-5 shadow-2xl md:block" style={{ boxShadow: "var(--shadow-luxe)" }}>
              <img src={heroBag} alt="Featured bag" loading="lazy" className="aspect-square w-full object-cover" />
              <div className="mt-3 flex items-center justify-between">
                <div><p className="text-[10px] uppercase tracking-widest text-gold">Featured</p><p className="text-xs font-semibold leading-tight">Neverfull MM</p></div>
                <span className="text-sm font-bold text-burgundy">$369</span>
              </div>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-1 bg-cream/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy backdrop-blur">
              <Star className="h-3 w-3 fill-gold text-gold" /> Master Quality
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border py-3" style={{ background: "var(--gradient-luxe)", color: "var(--cream)" }}>
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {["Free Worldwide Shipping","Master Quality","WhatsApp Only Ordering","Real Photos Before Dispatch","Worldwide Delivery","Free Worldwide Shipping","Master Quality","WhatsApp Only Ordering","Real Photos Before Dispatch","Worldwide Delivery","Free Worldwide Shipping","Master Quality","WhatsApp Only Ordering","Real Photos Before Dispatch","Worldwide Delivery"].map((t, i) => (
            <span key={i} className="mx-8 text-xs font-medium uppercase tracking-[0.35em]"><span className="text-gold">✦</span> {t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from {transform:translateX(0)} to {transform:translateX(-50%)} }`}</style>
      </div>

      {/* FEATURES */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[{icon:Truck,t:"Free Shipping",d:"Worldwide delivery"},{icon:ShieldCheck,t:"Master Quality",d:"Genuine craft & materials"},{icon:MessageCircle,t:"WhatsApp Only",d:WHATSAPP},{icon:RotateCcw,t:"Easy Returns",d:"Quality guarantee"}].map((it) => (
            <div key={it.t} className="flex items-center gap-4 px-5 py-7 transition hover:bg-secondary/40">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-burgundy"><it.icon className="h-5 w-5" /></div>
              <div className="min-w-0"><div className="text-sm font-semibold text-ink">{it.t}</div><div className="truncate text-xs text-muted-foreground">{it.d}</div></div>
            </div>
          ))}
        </div>
      </section>

      <ProductSection id="bestsellers" title="Bestsellers" subtitle="Most-loved pieces this season" products={BESTSELLERS} />
      <ProductSection id="shoes" title="Designer Shoes" subtitle="Luxury footwear from the finest houses" products={SHOES} />

      {/* CATEGORIES */}
      <section className="relative border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By</p>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Categories</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {CATEGORIES.map((c) => (
              <a key={c.name} href="#collection" className="group flex aspect-square flex-col items-center justify-center border border-border bg-card text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-burgundy transition group-hover:bg-burgundy group-hover:text-cream">{c.icon}</div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProductSection id="collection" title="LV Blue Collection & New Arrivals" subtitle="Master quality — curated from our Italy & Dubai houses" products={COLLECTION} showToolbar />

      {/* BRANDS */}
      <section className="border-b border-border" style={{ background: "linear-gradient(180deg, var(--secondary), var(--background))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Shop By Brand</p>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Our Brands</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {BAG_BRANDS.map((b) => (
              <a key={b} href="#collection" className="group flex flex-col items-center justify-center gap-3 border border-border bg-card px-4 py-6 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-burgundy transition group-hover:bg-burgundy group-hover:text-cream">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>
                </div>
                <span className="text-xs font-semibold tracking-wide text-ink transition group-hover:text-burgundy" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.85rem" }}>{b}</span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-8">
            {BRANDS.filter(b => !BAG_BRANDS.includes(b)).map((b) => (
              <span key={b} className="text-sm tracking-wide text-foreground/50 transition hover:text-burgundy" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="about" className="relative overflow-hidden border-b border-border text-cream">
        <img src={collectionBanner} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 20 / 0.92), oklch(0.18 0.018 35 / 0.88))" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Why Premium Designer Bags</p>
            <h2 className="text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>A house built on <span className="italic text-gold">trust</span>, craft, and discretion.</h2>
          </div>
          <div className="grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
            {[{t:"Reliable Shipping",d:"Stable shipping with real photo confirmation before dispatch."},{t:"Dedicated Service",d:"Professional support before and after shipping."},{t:"Secure Payment",d:"Secure merchant payment with buyer protection."},{t:"VIP Benefits",d:"VIP customers enjoy better pricing and priority support."}].map((p, i) => (
              <div key={p.t} className="group p-8 backdrop-blur-sm transition hover:bg-gold/10" style={{ background: "oklch(0.18 0.018 35 / 0.6)" }}>
                <div className="mb-5 text-3xl font-medium text-gold" style={{ fontFamily: "var(--font-display)" }}>0{i+1}</div>
                <h3 className="mb-3 text-xl" style={{ fontFamily: "var(--font-display)" }}>{p.t}</h3>
                <p className="text-sm leading-relaxed opacity-75">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">— Order Direct</p>
          <h2 className="mx-auto max-w-3xl text-5xl tracking-tight text-ink md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Send us a message. <span className="italic text-burgundy">Get your bag.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">We accept orders exclusively via WhatsApp for the most personal, white-glove service.</p>
          <a href={WHATSAPP_LINK} className="mt-9 inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-xl transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-luxe)", boxShadow: "var(--shadow-luxe)" }}>
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp — {WHATSAPP}
          </a>
          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Accepted Payments</p>
          <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {PAYMENT_METHODS.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-2 border border-border bg-background px-4 py-4 text-center transition hover:border-gold hover:bg-gold/10">
                <span className="text-burgundy">{m.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-cream" style={{ fontFamily: "var(--font-display)" }}>Premium Designer</span>
                <span className="text-xs tracking-[0.45em] text-gold uppercase">Bags</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed opacity-75">Premium designer bags — curated luxury shipped worldwide from Italy & Dubai.</p>
              <div className="mt-5 flex gap-3">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy"><IGIcon /></a>
                <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy"><TTIcon /></a>
                <a href={WHATSAPP_LINK} className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy"><MessageCircle className="h-4 w-4" /></a>
                <a href={`mailto:${EMAIL}`} className="border border-gold/40 p-2 transition hover:bg-gold hover:text-burgundy"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Shop</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {CATEGORIES.map((l) => <li key={l.name}><a href="#collection" className="hover:text-gold">{l.name}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Top Brands</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {BAG_BRANDS.slice(0,8).map((l) => <li key={l}><a href="#collection" className="hover:text-gold">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Italy & Dubai</li>
                <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> WhatsApp: {WHATSAPP}</li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {EMAIL}</li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-70">PayPal · Credit Card · Zelle · Venmo · Bank · Cash App</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-xs opacity-70 sm:flex-row">
            <span>© {new Date().getFullYear()} Premium Designer Bags. All rights reserved.</span>
            <span>Italy · Dubai · UK · USA · Worldwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
