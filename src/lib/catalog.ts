// ── Bags Brand Images ───────────────────────────────────────────────────────────────────
import bagBrandBottega from "@/assets/bags/brands/Bottega bag.jpeg";
import bagBrandCeline from "@/assets/bags/brands/Celine.jpeg";
import bagBrandChanel from "@/assets/bags/brands/Chanel.jpeg";
import bagBrandChloe from "@/assets/bags/brands/Chloe brand .jpeg";
import bagBrandFendi from "@/assets/bags/brands/Fendi.jpeg";
import bagBrandGoyard from "@/assets/bags/brands/Goyard.jpeg";
import bagBrandGucci from "@/assets/bags/brands/Gucci.jpeg";
import bagBrandHermes from "@/assets/bags/brands/Hermes.jpeg";
import bagBrandLv from "@/assets/bags/brands/Lv.jpeg";
import bagBrandPrada from "@/assets/bags/brands/Prada.jpeg";
import bagBrandValentino from "@/assets/bags/brands/Valentino.jpeg";
import bagBrandYsl from "@/assets/bags/brands/Ysl.jpeg";

// ── Shoes Brand Images ──────────────────────────────────────────────────────────────────
import shoeBrandBottega from "@/assets/shoes/brands/Bottega Veneta.jfif";
import shoeBrandChanel from "@/assets/shoes/brands/chanel.jpeg";
import shoeBrandDior from "@/assets/shoes/brands/dior.jpeg";
import shoeBrandFendi from "@/assets/shoes/brands/fendi.jfif";
import shoeBrandGucci from "@/assets/shoes/brands/Gucci.jpeg";
import shoeBrandHermes from "@/assets/shoes/brands/Hermes.jpeg";
import shoeBrandLoewe from "@/assets/shoes/brands/Loewe.jfif";
import shoeBrandLv from "@/assets/shoes/brands/LV.jpeg";
import shoeBrandPrada from "@/assets/shoes/brands/Prada.jpeg";
import shoeBrandValentino from "@/assets/shoes/brands/Valetino shoe.jpeg";

// ── Clothes Brand Images ────────────────────────────────────────────────────────────────
import clothBrandBurberry from "@/assets/Clothes/Brands/Burberry.jfif";
import clothBrandChanel from "@/assets/Clothes/Brands/Channel.jpeg";
import clothBrandDior from "@/assets/Clothes/Brands/Dior.jpeg";
import clothBrandGucci from "@/assets/Clothes/Brands/Gucci.jpg";
import clothBrandLoroPiana from "@/assets/Clothes/Brands/Loro Piana.jfif";
import clothBrandPrada from "@/assets/Clothes/Brands/prada.jfif";
import clothBrandSaintLaurent from "@/assets/Clothes/Brands/SAINT LAURENT.jpeg";

// ── Hats Brand Images ──────────────────────────────────────────────────────────────────────
import hatBrandBurberry from "@/assets/hats/brands/Burberry.jfif";
import hatBrandChanel from "@/assets/hats/brands/Channel.jpg";
import hatBrandFendi from "@/assets/hats/brands/Fendi.jfif";
import hatBrandGucci from "@/assets/hats/brands/gucci.jfif";
import hatBrandLv from "@/assets/hats/brands/LV.jpeg";
import hatBrandPrada from "@/assets/hats/brands/Prada.jfif";

// ── Jewelry Brand Images ──────────────────────────────────────────────────────────────────
import jewelBrandChanel from "@/assets/jewelry/Brands/Channel.jfif";
import jewelBrandGucci from "@/assets/jewelry/Brands/Gucci.jfif";
import jewelBrandHermes from "@/assets/jewelry/Brands/Hermes.jfif";
import jewelBrandTiffany from "@/assets/jewelry/Brands/Tiffany & Co.jfif";
import jewelBrandVanCleef from "@/assets/jewelry/Brands/van cleef and arpels.jpg";

// ── Scarfs Brand Images ───────────────────────────────────────────────────────────────────
import scarfBrandBurberry from "@/assets/Scarfs/Brands/Burberry.jpg";
import scarfBrandChanel from "@/assets/Scarfs/Brands/Channel.jpg";
import scarfBrandFendi from "@/assets/Scarfs/Brands/fendi.jpg";
import scarfBrandGucci from "@/assets/Scarfs/Brands/Gucci.jfif";
import scarfBrandHermes from "@/assets/Scarfs/Brands/Hermes.jfif";
import scarfBrandLv from "@/assets/Scarfs/Brands/LV.jpeg";

// ── Sunglasses Brand Images ───────────────────────────────────────────────────────────────
import sunBrandCeline from "@/assets/sunglasses/Brands/Celine.jfif";
import sunBrandChanel from "@/assets/sunglasses/Brands/Channel.jpeg";
import sunBrandDior from "@/assets/sunglasses/Brands/Dior.jpg";
import sunBrandGucci from "@/assets/sunglasses/Brands/Gucci.jfif";
import sunBrandPrada from "@/assets/sunglasses/Brands/Prada.jpeg";
import sunBrandSaintLaurent from "@/assets/sunglasses/Brands/Saint Laurent.jpg";

// ── Belts Brand Images ──────────────────────────────────────────────────────────────────────
import beltBrandBottega from "@/assets/belts/Brands/bottega veneta.jfif";
import beltBrandFendi from "@/assets/belts/Brands/Fendi.jfif";
import beltBrandGucci from "@/assets/belts/Brands/Gucci.jpg";
import beltBrandHermes from "@/assets/belts/Brands/Hermes.jpeg";
import beltBrandLv from "@/assets/belts/Brands/lv.jpeg";
import beltBrandPrada from "@/assets/belts/Brands/Prada.jfif";

// ── Watches Brand Images ───────────────────────────────────────────────────────────────────
import watchBrandHermes from "@/assets/watchs/Brands/Hermes.jpg";
import watchBrandOmega from "@/assets/watchs/Brands/Omega.jfif";
import watchBrandPatek from "@/assets/watchs/Brands/patek philippe.jfif";
import watchBrandRolex from "@/assets/watchs/Brands/Rolex.jpg";
import watchBrandTagHeuer from "@/assets/watchs/Brands/Tag Heuer.jfif";

// ── Belt/sun/scarf brand images used in new brand products ───────────────────────────────
const beltBrandGucciImg = beltBrandGucci;
const beltBrandPradaImg = beltBrandPrada;
const beltBrandBottegaImg = beltBrandBottega;
const beltBrandFendiImg = beltBrandFendi;
const sunBrandGucciImg = sunBrandGucci;
const sunBrandSaintLaurentImg = sunBrandSaintLaurent;
const sunBrandCelineImg = sunBrandCeline;
const scarfBrandFendiImg = scarfBrandFendi;
const scarfBrandGucciImg = scarfBrandGucci;

// ── Category Brand Images Map ───────────────────────────────────────────────────────────────
export const CATEGORY_BRAND_IMAGES: Record<string, Record<string, string>> = {
  bags: {
    "Louis Vuitton": bagBrandLv,
    "Chanel": bagBrandChanel,
    "Hermès": bagBrandHermes,
    "Gucci": bagBrandGucci,
    "Prada": bagBrandPrada,
    "Celine": bagBrandCeline,
    "Bottega Veneta": bagBrandBottega,
    "Goyard": bagBrandGoyard,
    "Fendi": bagBrandFendi,
    "Saint Laurent": bagBrandYsl,
    "Valentino": bagBrandValentino,
    "Chloé": bagBrandChloe,
  },
  shoes: {
    "Hermès": shoeBrandHermes,
    "Chanel": shoeBrandChanel,
    "Louis Vuitton": shoeBrandLv,
    "Fendi": shoeBrandFendi,
    "Gucci": shoeBrandGucci,
    "Dior": shoeBrandDior,
    "Bottega Veneta": shoeBrandBottega,
    "Loewe": shoeBrandLoewe,
    "Prada": shoeBrandPrada,
    "Valentino": shoeBrandValentino,
  },
  clothes: {
    "Chanel": clothBrandChanel,
    "Dior": clothBrandDior,
    "Gucci": clothBrandGucci,
    "Prada": clothBrandPrada,
    "Burberry": clothBrandBurberry,
    "Loro Piana": clothBrandLoroPiana,
    "Saint Laurent": clothBrandSaintLaurent,
  },
  hats: {
    "Louis Vuitton": hatBrandLv,
    "Gucci": hatBrandGucci,
    "Prada": hatBrandPrada,
    "Burberry": hatBrandBurberry,
    "Fendi": hatBrandFendi,
    "Chanel": hatBrandChanel,
  },
  jewelry: {
    "Chanel": jewelBrandChanel,
    "Gucci": jewelBrandGucci,
    "Hermès": jewelBrandHermes,
    "Tiffany & Co": jewelBrandTiffany,
    "Van Cleef & Arpels": jewelBrandVanCleef,
  },
  scarfs: {
    "Hermès": scarfBrandHermes,
    "Gucci": scarfBrandGucci,
    "Louis Vuitton": scarfBrandLv,
    "Burberry": scarfBrandBurberry,
    "Chanel": scarfBrandChanel,
    "Fendi": scarfBrandFendi,
  },
  sunglasses: {
    "Chanel": sunBrandChanel,
    "Dior": sunBrandDior,
    "Gucci": sunBrandGucci,
    "Prada": sunBrandPrada,
    "Celine": sunBrandCeline,
    "Saint Laurent": sunBrandSaintLaurent,
  },
  belts: {
    "Louis Vuitton": beltBrandLv,
    "Gucci": beltBrandGucci,
    "Hermès": beltBrandHermes,
    "Prada": beltBrandPrada,
    "Fendi": beltBrandFendi,
    "Bottega Veneta": beltBrandBottega,
  },
  watches: {
    "Hermès": watchBrandHermes,
    "Rolex": watchBrandRolex,
    "Omega": watchBrandOmega,
    "Patek Philippe": watchBrandPatek,
    "Tag Heuer": watchBrandTagHeuer,
  },
};

// ── Bags ──────────────────────────────────────────────────────────────────────
import lvBag1 from "@/assets/bags/lv/1.jpeg";
import lvBag2 from "@/assets/bags/lv/2.jpeg";
import lvBag3 from "@/assets/bags/lv/3.jpeg";
import lvBag4 from "@/assets/bags/lv/4.jpeg";
import lvBag5 from "@/assets/bags/lv/5.jpeg";

import chanelBag1 from "@/assets/bags/Chanel/1.jpeg";
import chanelBag2 from "@/assets/bags/Chanel/2.jpeg";
import chanelBag3 from "@/assets/bags/Chanel/3.jpeg";
import chanelBag6 from "@/assets/bags/Chanel/6.jpeg";
import chanelBagMain from "@/assets/bags/Chanel/Chanel.jpeg";
import chanelBag5 from "@/assets/bags/Chanel/Chanel5.jpeg";

import gucciBag1 from "@/assets/bags/Gucci/1.jpeg";
import gucciBag2 from "@/assets/bags/Gucci/2.jpeg";
import gucciBag3 from "@/assets/bags/Gucci/3.jpeg";
import gucciBag4 from "@/assets/bags/Gucci/4.jpeg";
import gucciBag5 from "@/assets/bags/Gucci/5.jpeg";

import yslBag1 from "@/assets/bags/Ysl/1.jpeg";
import yslBag2 from "@/assets/bags/Ysl/2.jpeg";
import yslBag3 from "@/assets/bags/Ysl/3.jpeg";
import yslBag4 from "@/assets/bags/Ysl/4.jpeg";
import yslBag5 from "@/assets/bags/Ysl/5.jpeg";

// ── Shoes ─────────────────────────────────────────────────────────────────────
import hermesShoe1 from "@/assets/shoes/Hermes/1.jpeg";
import hermesShoe2 from "@/assets/shoes/Hermes/2.jpeg";
import hermesShoe3 from "@/assets/shoes/Hermes/3.jpeg";
import hermesShoe4 from "@/assets/shoes/Hermes/4.jpeg";

import chanelShoe1 from "@/assets/shoes/Chanel/1.jpeg";
import chanelShoe2 from "@/assets/shoes/Chanel/2.jpeg";
import chanelShoe3 from "@/assets/shoes/Chanel/3.jpeg";
import chanelShoe4 from "@/assets/shoes/Chanel/4.jpeg";

import lvShoe1 from "@/assets/shoes/Lv/1.jpeg";
import lvShoe2 from "@/assets/shoes/Lv/2.jpeg";
import lvShoe3 from "@/assets/shoes/Lv/3.jpeg";
import lvShoe4 from "@/assets/shoes/Lv/4.jpeg";

import gucciShoe1 from "@/assets/shoes/Gucci/1.jpeg";
import gucciShoe2 from "@/assets/shoes/Gucci/2.jpeg";
import gucciShoe3 from "@/assets/shoes/Gucci/3.jpeg";
import gucciShoe4 from "@/assets/shoes/Gucci/4.jpeg";
import gucciShoe5 from "@/assets/shoes/Gucci/5.jpeg";
import gucciShoe6 from "@/assets/shoes/Gucci/6.jpeg";
import gucciShoe7 from "@/assets/shoes/Gucci/7.jpeg";
import gucciShoe8 from "@/assets/shoes/Gucci/8.jpeg";

import diorShoe1 from "@/assets/shoes/Dior/1.jpeg";
import diorShoe2 from "@/assets/shoes/Dior/2.jpeg";
import diorShoe3 from "@/assets/shoes/Dior/3.jpeg";

import pradaShoe1 from "@/assets/shoes/Prada/1.jpeg";
import pradaShoe2 from "@/assets/shoes/Prada/2.jpeg";
import pradaShoe3 from "@/assets/shoes/Prada/3.jpeg";

import valentinoShoe1 from "@/assets/shoes/Valentino shoe/1.jpeg";
import valentinoShoe2 from "@/assets/shoes/Valentino shoe/2.jpeg";

// ── Jewelry ───────────────────────────────────────────────────────────────────
import cartier1 from "@/assets/jewelry/Cartier/1.jpeg";
import cartier2 from "@/assets/jewelry/Cartier/2.jpeg";
import cartier3 from "@/assets/jewelry/Cartier/3.jpeg";
import cartier4 from "@/assets/jewelry/Cartier/4.jpeg";
import cartier5 from "@/assets/jewelry/Cartier/5.jpeg";
import cartier6 from "@/assets/jewelry/Cartier/6.jpeg";
import cartier7 from "@/assets/jewelry/Cartier/7.jpeg";

import bvlgari1 from "@/assets/jewelry/Bvlgari jewelry/1.jpeg";
import bvlgari2 from "@/assets/jewelry/Bvlgari jewelry/2.jpeg";
import bvlgari3 from "@/assets/jewelry/Bvlgari jewelry/3.jpeg";
import bvlgari4 from "@/assets/jewelry/Bvlgari jewelry/4.jpeg";
import bvlgari5 from "@/assets/jewelry/Bvlgari jewelry/5.jpeg";
import bvlgari6 from "@/assets/jewelry/Bvlgari jewelry/6.jpeg";

import messika1 from "@/assets/jewelry/Messika jewelry/1.jpeg";
import messika2 from "@/assets/jewelry/Messika jewelry/2.jpeg";
import messika3 from "@/assets/jewelry/Messika jewelry/3.jpeg";
import messika4 from "@/assets/jewelry/Messika jewelry/4.jpeg";
import messika5 from "@/assets/jewelry/Messika jewelry/5.jpeg";

// ── Watches ───────────────────────────────────────────────────────────────────
import cartierWatch1 from "@/assets/watchs/Cartier watches women/1.jpeg";
import cartierWatch2 from "@/assets/watchs/Cartier watches women/2.jpeg";
import cartierWatch3 from "@/assets/watchs/Cartier watches women/3.jpeg";
import cartierWatch4 from "@/assets/watchs/Cartier watches women/4.jpeg";
import cartierWatch5 from "@/assets/watchs/Cartier watches women/5.jpeg";
import cartierWatch6 from "@/assets/watchs/Cartier watches women/6.jpeg";
import cartierWatchCouple1 from "@/assets/watchs/Cartier watches women/Couple.jpeg";
import cartierWatchCouple2 from "@/assets/watchs/Cartier watches women/Couple2.jpeg";
import cartierWatchCouple3 from "@/assets/watchs/Cartier watches women/Couple3.jpeg";
import cartierWatchCouple4 from "@/assets/watchs/Cartier watches women/couple4.jpeg";

// ── Belts ─────────────────────────────────────────────────────────────────────
import hermesBelt1 from "@/assets/belts/Hermes belts/1.jpeg";
import hermesBelt2 from "@/assets/belts/Hermes belts/2.jpeg";
import hermesBelt3 from "@/assets/belts/Hermes belts/3.jpeg";
import hermesBelt4 from "@/assets/belts/Hermes belts/4.jpeg";
import hermesBelt5 from "@/assets/belts/Hermes belts/5.jpeg";
import hermesBelt6 from "@/assets/belts/Hermes belts/6.jpeg";
import hermesBelt7 from "@/assets/belts/Hermes belts/7.jpeg";
import hermesBelt8 from "@/assets/belts/Hermes belts/8.jpeg";
import hermesBelt9 from "@/assets/belts/Hermes belts/9.jpeg";
import hermesBelt10 from "@/assets/belts/Hermes belts/10.jpeg";

import lvBelt1 from "@/assets/belts/Lv belts/1.jpeg";
import lvBelt2 from "@/assets/belts/Lv belts/2.jpeg";
import lvBelt3 from "@/assets/belts/Lv belts/3.jpeg";
import lvBelt4 from "@/assets/belts/Lv belts/4.jpeg";
import lvBelt5 from "@/assets/belts/Lv belts/5.jpeg";
import lvBelt6 from "@/assets/belts/Lv belts/6.jpeg";
import lvBelt7 from "@/assets/belts/Lv belts/7.jpeg";
import lvBelt8 from "@/assets/belts/Lv belts/8.jpeg";
import lvBelt9 from "@/assets/belts/Lv belts/9.jpeg";
import lvBelt10 from "@/assets/belts/Lv belts/10.jpeg";
import lvBelt11 from "@/assets/belts/Lv belts/11.jpeg";
import lvBelt12 from "@/assets/belts/Lv belts/12.jpeg";

// ── Scarfs ────────────────────────────────────────────────────────────────────
import lvScarf1 from "@/assets/Scarfs/Lv scarves/1.jpeg";
import lvScarf2 from "@/assets/Scarfs/Lv scarves/2.jpeg";
import lvScarf3 from "@/assets/Scarfs/Lv scarves/3.jpeg";
import lvScarf4 from "@/assets/Scarfs/Lv scarves/4.jpeg";
import lvScarf5 from "@/assets/Scarfs/Lv scarves/5.jpeg";
import lvScarf6 from "@/assets/Scarfs/Lv scarves/6.jpeg";
import lvScarf7 from "@/assets/Scarfs/Lv scarves/7.jpeg";
import lvScarf8 from "@/assets/Scarfs/Lv scarves/8.jpeg";

import scarf1 from "@/assets/Scarfs/Scarves/1.jpeg";
import scarf2 from "@/assets/Scarfs/Scarves/2.jpeg";
import scarf3 from "@/assets/Scarfs/Scarves/3.jpeg";
import scarf4 from "@/assets/Scarfs/Scarves/4.jpeg";
import scarf5 from "@/assets/Scarfs/Scarves/5.jpeg";
import scarf6 from "@/assets/Scarfs/Scarves/6.jpeg";
import scarf7 from "@/assets/Scarfs/Scarves/7.jpeg";

// ── Sunglasses ────────────────────────────────────────────────────────────────
import chanelSun1 from "@/assets/sunglasses/Chanel sunglasses/1.jpeg";
import chanelSun2 from "@/assets/sunglasses/Chanel sunglasses/2.jpeg";
import chanelSun3 from "@/assets/sunglasses/Chanel sunglasses/3.jpeg";
import chanelSun4 from "@/assets/sunglasses/Chanel sunglasses/4.jpeg";
import chanelSun5 from "@/assets/sunglasses/Chanel sunglasses/5.jpeg";
import chanelSun6 from "@/assets/sunglasses/Chanel sunglasses/6.jpeg";
import chanelSun7 from "@/assets/sunglasses/Chanel sunglasses/7.jpeg";
import chanelSun8 from "@/assets/sunglasses/Chanel sunglasses/8.jpeg";
import chanelSun9 from "@/assets/sunglasses/Chanel sunglasses/9.jpeg";
import chanelSun10 from "@/assets/sunglasses/Chanel sunglasses/10.jpeg";
import chanelSun11 from "@/assets/sunglasses/Chanel sunglasses/11.jpeg";
import chanelSun12 from "@/assets/sunglasses/Chanel sunglasses/12.jpeg";
import chanelSun13 from "@/assets/sunglasses/Chanel sunglasses/13.jpeg";
import chanelSun14 from "@/assets/sunglasses/Chanel sunglasses/14.jpeg";
import chanelSun15 from "@/assets/sunglasses/Chanel sunglasses/15.jpeg";
import chanelSun16 from "@/assets/sunglasses/Chanel sunglasses/16.jpeg";

import pradaSun1 from "@/assets/sunglasses/Prada sunglasses/1.jpeg";
import pradaSun2 from "@/assets/sunglasses/Prada sunglasses/2.jpeg";
import pradaSun3 from "@/assets/sunglasses/Prada sunglasses/3.jpeg";
import pradaSun4 from "@/assets/sunglasses/Prada sunglasses/4.jpeg";
import pradaSun5 from "@/assets/sunglasses/Prada sunglasses/5.jpeg";
import pradaSun6 from "@/assets/sunglasses/Prada sunglasses/6.jpeg";
import pradaSun7 from "@/assets/sunglasses/Prada sunglasses/7.jpeg";
import pradaSun8 from "@/assets/sunglasses/Prada sunglasses/8.jpeg";
import pradaSun9 from "@/assets/sunglasses/Prada sunglasses/9.jpeg";
import pradaSun10 from "@/assets/sunglasses/Prada sunglasses/10.jpeg";
import pradaSun11 from "@/assets/sunglasses/Prada sunglasses/11.jpeg";
import pradaSun12 from "@/assets/sunglasses/Prada sunglasses/12.jpeg";
import pradaSun13 from "@/assets/sunglasses/Prada sunglasses/13.jpeg";
import pradaSun14 from "@/assets/sunglasses/Prada sunglasses/14.jpeg";

// ── Clothes ───────────────────────────────────────────────────────────────────
import chanelCloth1 from "@/assets/Clothes/Chanel/1.jpeg";
import chanelCloth2 from "@/assets/Clothes/Chanel/2.jpeg";
import chanelCloth3 from "@/assets/Clothes/Chanel/3.jpeg";
import chanelCloth4 from "@/assets/Clothes/Chanel/4.jpeg";
import diorCloth1 from "@/assets/Clothes/Dior/1.jpeg";
import diorCloth2 from "@/assets/Clothes/Dior/2.jpeg";
import diorCloth3 from "@/assets/Clothes/Dior/3.jpeg";
import diorCloth4 from "@/assets/Clothes/Dior/4.jpeg";
import diorCloth5 from "@/assets/Clothes/Dior/5.jpeg";
import diorCloth6 from "@/assets/Clothes/Dior/6.jpeg";
import diorCloth7 from "@/assets/Clothes/Dior/7.jpeg";
import diorCloth8 from "@/assets/Clothes/Dior/8.jpeg";

// ── Hats ──────────────────────────────────────────────────────────────────────
import lvHat1 from "@/assets/hats/Lv hats/1.jpeg";
import lvHat2 from "@/assets/hats/Lv hats/2.jpeg";
import lvHat3 from "@/assets/hats/Lv hats/3.jpeg";

export type CatalogProduct = {
  title: string;
  price: string;
  tag?: string;
  img: string;
  section?: string;
};

export const SHOE_BRANDS = [
  { brand: "Hermès", styles: ["Oran Sandal", "Izmir Sandal", "Kelly Mule"] },
  { brand: "Chanel", styles: ["Cap-Toe Ballerina", "CC Logo Mule", "Slingback Pump"] },
  { brand: "Louis Vuitton", styles: ["Archlight Sneaker", "Stellar Mule", "Bom Dia Flat Mule"] },
  { brand: "Fendi", styles: ["Baguette Sandal", "Flow Sneaker", "Colibrì Mule"] },
  { brand: "Gucci", styles: ["Horsebit Loafer", "Princetown Mule", "Ace Sneaker"] },
  { brand: "Dior", styles: ["CD Mule", "Walk'n'Dior Sneaker", "J'Adior Slingback"] },
  { brand: "Bottega Veneta", styles: ["Stretch Sandal", "Puddle Boot", "BV Tire Loafer"] },
  { brand: "Goyard", styles: ["Richelieu Derby", "Artois Sneaker"] },
  { brand: "Celine", styles: ["Triomphe Ballet Flat", "Bulky Sneaker", "Slide Sandal"] },
  { brand: "Loewe", styles: ["Toy Puffy Mule", "Campo Sneaker", "Gate Flat Sandal"] },
  { brand: "Coach", styles: ["Lowline Low Top", "Dreamer Sandal"] },
  { brand: "Prada", styles: ["Monolith Boot", "Cloudbust Sneaker", "Slingback Pump"] },
];

export const BRANDS = [
  "Louis Vuitton", "Chanel", "Hermès", "Dior", "Gucci", "Prada",
  "Celine", "Saint Laurent", "Bottega Veneta", "Loewe", "Goyard",
  "Loro Piana", "The Row", "Burberry", "Fendi", "Valentino", "Givenchy",
  "Chloé", "Miu Miu", "Coach", "Balenciaga", "Off-White", "Jacquemus",
  "Ami Paris", "Toteme", "Marni", "Mulberry", "Ferragamo", "Versace",
  "Moschino", "Stella McCartney", "Alexander McQueen", "Balmain",
  "Acne Studios", "A.P.C.", "Isabel Marant", "Nanushka", "Staud",
  "Polène", "Wandler", "Cult Gaia", "DeMellier", "Strathberry", "Boyy",
  "Gabriela Hearst", "Hunting Season", "Mark Cross", "Alaïa", "Coperni", "Khaite",
];

export const BRAND_PRODUCTS: Record<string, CatalogProduct[]> = {
  "Louis Vuitton": [
    { title: "LV Neverfull MM Tote M27358", price: "$369", tag: "LV", img: lvBag1 },
    { title: "LV OnTheGo PM M28181", price: "$369", tag: "LV", img: lvBag2 },
    { title: "LV Speedy 30 Soft Celebration M28379", price: "$349", tag: "LV", img: lvBag3 },
    { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4 },
    { title: "LV Side Trunk PM M27436", price: "$349", tag: "LV", img: lvBag5 },
    { title: "LV Speedy Bandoulière 20 M28316", price: "$309", tag: "LV", img: lvBag1 },
    { title: "LV Wallet On Chain Ivy M27755", price: "$279", tag: "LV", img: lvBag2 },
    { title: "LV OnTheGo BB M46993 — Black Embossed", price: "$289", tag: "LV", img: lvBag3 },
  ],
  "Chanel": [
    { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1 },
    { title: "Chanel Maxi Flapbag AS6233 — Blush", price: "$539", tag: "Chanel", img: chanelBag2 },
    { title: "Chanel Classic Flap Medium — Black Caviar", price: "$780", tag: "Chanel", img: chanelBag3 },
    { title: "Chanel Boy Bag — Grey Lambskin", price: "$620", tag: "Chanel", img: chanelBag6 },
    { title: "Chanel 19 Bag — Black Lambskin", price: "$480", tag: "Chanel", img: chanelBagMain },
    { title: "Chanel Timeless Clutch — Pearl White", price: "$390", tag: "Chanel", img: chanelBag5 },
    { title: "Chanel Tweed Jacket — Ivory", price: "$1,890", tag: "Chanel", img: chanelCloth1 },
    { title: "Chanel Bouclé Blazer — Black", price: "$2,150", tag: "Chanel", img: chanelCloth2 },
    { title: "Chanel Silk Blouse — White", price: "$980", tag: "Chanel", img: chanelCloth3 },
    { title: "Chanel CC Logo Dress — Beige", price: "$2,490", tag: "Chanel", img: chanelCloth4 },
  ],
  "Hermès": [
    { title: "Hermès Oran Sandal — Gold Epsom Leather", price: "$389", tag: "Hermès", img: hermesShoe1 },
    { title: "Hermès Izmir Sandal — Noir", price: "$359", tag: "Hermès", img: hermesShoe2 },
    { title: "Hermès Kelly Mule — Rose Gold", price: "$429", tag: "Hermès", img: hermesShoe3 },
    { title: "Hermès Oran Flat Sandal — Beige", price: "$349", tag: "Hermès", img: hermesShoe4 },
    { title: "Hermès Constance Belt 32mm — Black Epsom", price: "$690", tag: "Hermès", img: hermesBelt1 },
    { title: "Hermès H Belt Buckle 32mm — Gold", price: "$650", tag: "Hermès", img: hermesBelt2 },
  ],
  "Dior": [
    { title: "Dior J'Adior Slingback Pump — Black Mesh", price: "$319", tag: "Dior", img: diorShoe1 },
    { title: "Dior CD Mule — White Patent", price: "$289", tag: "Dior", img: diorShoe2 },
    { title: "Dior Walk'n'Dior Sneaker — White", price: "$349", tag: "Dior", img: diorShoe3 },
    { title: "Dior Bar Jacket — Powder Pink", price: "$2,350", tag: "Dior", img: diorCloth1 },
    { title: "Dior Oblique Dress — Silk", price: "$1,980", tag: "Dior", img: diorCloth2 },
    { title: "Dior CD Monogram Sweater — Cream", price: "$1,290", tag: "Dior", img: diorCloth3 },
    { title: "Dior Tailored Trouser — Black", price: "$1,150", tag: "Dior", img: diorCloth4 },
    { title: "Dior Toile de Jouy Blouse", price: "$1,450", tag: "Dior", img: diorCloth5 },
    { title: "Dior Floral Midi Skirt", price: "$1,680", tag: "Dior", img: diorCloth6 },
    { title: "Dior Wool Coat — Camel", price: "$3,200", tag: "Dior", img: diorCloth7 },
    { title: "Dior Lady Dior Silk Shirt", price: "$1,390", tag: "Dior", img: diorCloth8 },
  ],
  "Gucci": [
    { title: "Gucci Horsebit 1953 Loafer — Brown GG Canvas", price: "$289", tag: "Gucci", img: gucciBag1 },
    { title: "Gucci GG Marmont Bag — Beige", price: "$490", tag: "Gucci", img: gucciBag2 },
    { title: "Gucci Dionysus Mini Bag — Black", price: "$560", tag: "Gucci", img: gucciBag3 },
    { title: "Gucci Blondie Top Handle Bag", price: "$620", tag: "Gucci", img: gucciBag4 },
    { title: "Gucci Jackie 1961 Small — Nude", price: "$580", tag: "Gucci", img: gucciBag5 },
  ],
  "Prada": [
    { title: "Prada Monolith Brushed Leather Boot — Black", price: "$429", tag: "Prada", img: pradaShoe1 },
    { title: "Prada Slingback Pump — Nude", price: "$389", tag: "Prada", img: pradaShoe2 },
    { title: "Prada Block Heel Mule — Black", price: "$349", tag: "Prada", img: pradaShoe3 },
    { title: "Prada Symbole Sunglasses — Black", price: "$329", tag: "Prada", img: pradaSun1 },
    { title: "Prada Minimal Baroque — White", price: "$349", tag: "Prada", img: pradaSun2 },
  ],
  "Saint Laurent": [
    { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: yslBag1 },
    { title: "Saint Laurent Cassandre Large Flap Wallet — Beige", price: "$178", tag: "YSL", img: yslBag2 },
    { title: "Saint Laurent YSL Mini Bucket Bag", price: "$269", tag: "YSL", img: yslBag3 },
    { title: "Saint Laurent Lou Camera — Beige Quilted", price: "$258", tag: "YSL", img: yslBag4 },
    { title: "Saint Laurent Niki Medium — Crinkled Leather", price: "$340", tag: "YSL", img: yslBag5 },
  ],
  "Cartier": [
    { title: "Cartier Love Bracelet — Yellow Gold", price: "$6,200", tag: "Cartier", img: cartier1 },
    { title: "Cartier Juste un Clou Bracelet", price: "$4,800", tag: "Cartier", img: cartier2 },
    { title: "Cartier LOVE Ring — Rose Gold", price: "$2,150", tag: "Cartier", img: cartier3 },
    { title: "Cartier Trinity Ring — Three Gold", price: "$1,950", tag: "Cartier", img: cartier4 },
    { title: "Cartier Diamants Légers Necklace", price: "$3,100", tag: "Cartier", img: cartier5 },
    { title: "Cartier Panthère Stud Earrings", price: "$2,400", tag: "Cartier", img: cartier6 },
    { title: "Cartier Clash de Cartier Ring", price: "$1,800", tag: "Cartier", img: cartier7 },
    { title: "Cartier Ballon Bleu 33mm — Steel", price: "$6,900", tag: "Cartier", img: cartierWatch1 },
    { title: "Cartier Panthère Watch — White Gold", price: "$8,500", tag: "Cartier", img: cartierWatch2 },
    { title: "Cartier Tank Solo — Steel", price: "$3,200", tag: "Cartier", img: cartierWatch3 },
    { title: "Cartier Clé de Cartier — Steel", price: "$5,400", tag: "Cartier", img: cartierWatch4 },
    { title: "Cartier Watch 5", price: "$11,000", tag: "Cartier", img: cartierWatch5 },
    { title: "Cartier Ronde Must — Steel", price: "$2,800", tag: "Cartier", img: cartierWatch6 },
    { title: "Cartier Couple Watch Set", price: "$15,000", tag: "Cartier", img: cartierWatchCouple1 },
    { title: "Cartier Couple Set II", price: "$14,500", tag: "Cartier", img: cartierWatchCouple2 },
    { title: "Cartier Couple Set III", price: "$13,800", tag: "Cartier", img: cartierWatchCouple3 },
    { title: "Cartier Couple Set IV", price: "$12,900", tag: "Cartier", img: cartierWatchCouple4 },
  ],
  "Bvlgari": [
    { title: "Bvlgari B.zero1 Ring — White Gold", price: "$2,200", tag: "Bvlgari", img: bvlgari1 },
    { title: "Bvlgari Serpenti Viper Bracelet", price: "$3,400", tag: "Bvlgari", img: bvlgari2 },
    { title: "Bvlgari Divas Dream Necklace", price: "$4,100", tag: "Bvlgari", img: bvlgari3 },
    { title: "Bvlgari Fiorever Ring — Rose Gold", price: "$1,900", tag: "Bvlgari", img: bvlgari4 },
    { title: "Bvlgari Serpenti Earrings — Gold", price: "$2,700", tag: "Bvlgari", img: bvlgari5 },
    { title: "Bvlgari Lucea Bracelet — Diamond", price: "$5,200", tag: "Bvlgari", img: bvlgari6 },
  ],
  "Messika": [
    { title: "Messika Move Uno Diamond Ring", price: "$1,850", tag: "Messika", img: messika1 },
    { title: "Messika My Twin Stud Earrings", price: "$2,100", tag: "Messika", img: messika2 },
    { title: "Messika Move Classique Bracelet", price: "$3,200", tag: "Messika", img: messika3 },
    { title: "Messika Gatsby Diamond Necklace", price: "$4,500", tag: "Messika", img: messika4 },
    { title: "Messika Baby Move Pendant", price: "$1,650", tag: "Messika", img: messika5 },
  ],
  "Valentino": [
    { title: "Valentino Garavani Rockstud Pump — Nude", price: "$389", tag: "Valentino", img: valentinoShoe1 },
    { title: "Valentino Garavani VLogo Sandal — Black", price: "$349", tag: "Valentino", img: valentinoShoe2 },
  ],
  "Fendi": [
    { title: "Fendi Baguette Sandal — FF Jacquard", price: "$309", tag: "Fendi", img: shoeBrandFendi },
    { title: "Fendi Flow Sneaker — White", price: "$349", tag: "Fendi", img: shoeBrandFendi },
  ],
  "Bottega Veneta": [
    { title: "Bottega Veneta Stretch Flat Sandal — Cream", price: "$359", tag: "BV", img: shoeBrandBottega },
    { title: "Bottega Veneta BV Tire Loafer — Black", price: "$389", tag: "BV", img: shoeBrandBottega },
  ],
  "Loewe": [
    { title: "Loewe Toy Puffy Mule — Ivory Nappa", price: "$299", tag: "Loewe", img: shoeBrandLoewe },
    { title: "Loewe Campo Sneaker — White", price: "$319", tag: "Loewe", img: shoeBrandLoewe },
  ],
  "Celine": [
    { title: "Celine Triomphe Bag — Black Calfskin", price: "$689", tag: "Celine", img: bagBrandCeline },
    { title: "Celine Classic Box Bag — Tan", price: "$750", tag: "Celine", img: bagBrandCeline },
  ],
  "Goyard": [
    { title: "Goyard Saint Louis PM Tote — Natural", price: "$680", tag: "Goyard", img: bagBrandGoyard },
    { title: "Goyard Belvedere MM Crossbody — Black", price: "$590", tag: "Goyard", img: bagBrandGoyard },
  ],
  "Chloé": [
    { title: "Chloé Marcie Small Saddle Bag — Caramel", price: "$480", tag: "Chloé", img: bagBrandChloe },
    { title: "Chloé Woody Tote — Beige", price: "$390", tag: "Chloé", img: bagBrandChloe },
  ],
  "Burberry": [
    { title: "Burberry TB Monogram Trench Coat", price: "$1,890", tag: "Burberry", img: clothBrandBurberry },
    { title: "Burberry Classic Check Scarf", price: "$380", tag: "Burberry", img: scarfBrandBurberry },
    { title: "Burberry Monogram Cap", price: "$290", tag: "Burberry", img: hatBrandBurberry },
  ],
  "Loro Piana": [
    { title: "Loro Piana Baby Cashmere Sweater — Cream", price: "$1,650", tag: "Loro Piana", img: clothBrandLoroPiana },
    { title: "Loro Piana Cashmere Coat — Camel", price: "$3,200", tag: "Loro Piana", img: clothBrandLoroPiana },
  ],
  "Tiffany & Co": [
    { title: "Tiffany T Wire Bracelet — Rose Gold", price: "$2,100", tag: "Tiffany", img: jewelBrandTiffany },
    { title: "Tiffany Setting Solitaire Ring", price: "$4,500", tag: "Tiffany", img: jewelBrandTiffany },
  ],
  "Van Cleef & Arpels": [
    { title: "Van Cleef Alhambra Necklace — Mother of Pearl", price: "$3,800", tag: "VCA", img: jewelBrandVanCleef },
    { title: "Van Cleef Magic Alhambra Bracelet", price: "$5,200", tag: "VCA", img: jewelBrandVanCleef },
  ],
  "Rolex": [
    { title: "Rolex Datejust 36 — Steel & Gold", price: "$12,500", tag: "Rolex", img: watchBrandRolex },
    { title: "Rolex Lady-Datejust 28 — White Gold", price: "$16,000", tag: "Rolex", img: watchBrandRolex },
  ],
  "Omega": [
    { title: "Omega Constellation 29mm — Steel", price: "$4,200", tag: "Omega", img: watchBrandOmega },
    { title: "Omega De Ville Prestige — Rose Gold", price: "$6,800", tag: "Omega", img: watchBrandOmega },
  ],
  "Patek Philippe": [
    { title: "Patek Philippe Calatrava 35mm — White Gold", price: "$28,000", tag: "Patek", img: watchBrandPatek },
    { title: "Patek Philippe Aquanaut Luce", price: "$35,000", tag: "Patek", img: watchBrandPatek },
  ],
  "Tag Heuer": [
    { title: "Tag Heuer Aquaracer 32mm — Steel", price: "$2,800", tag: "Tag Heuer", img: watchBrandTagHeuer },
    { title: "Tag Heuer Carrera Lady Chronograph", price: "$4,100", tag: "Tag Heuer", img: watchBrandTagHeuer },
  ],
};

export const CATEGORY_BRANDS: Record<string, string[]> = {
  bags: ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Saint Laurent", "Celine", "Bottega Veneta", "Goyard", "Fendi", "Valentino", "Chloé"],
  shoes: ["Hermès", "Chanel", "Louis Vuitton", "Gucci", "Dior", "Prada", "Valentino", "Fendi", "Bottega Veneta", "Loewe"],
  jewelry: ["Cartier", "Bvlgari", "Messika", "Chanel", "Gucci", "Hermès", "Tiffany & Co", "Van Cleef & Arpels"],
  watches: ["Cartier", "Hermès", "Rolex", "Omega", "Patek Philippe", "Tag Heuer"],
  clothes: ["Chanel", "Dior", "Gucci", "Prada", "Burberry", "Loro Piana", "Saint Laurent"],
  hats: ["Louis Vuitton", "Chanel", "Gucci", "Prada", "Burberry", "Fendi"],
  scarfs: ["Louis Vuitton", "Hermès", "Chanel", "Gucci", "Burberry", "Fendi"],
  sunglasses: ["Chanel", "Prada", "Dior", "Gucci", "Celine", "Saint Laurent"],
  belts: ["Louis Vuitton", "Hermès", "Gucci", "Prada", "Fendi", "Bottega Veneta"],
  accessories: ["Louis Vuitton", "Gucci", "Hermès", "Prada", "Cartier"],
  collection: ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Saint Laurent"],
};

export const NAV_CATEGORIES = [
  { name: "Shoes", slug: "shoes", items: SHOE_BRANDS.map((s) => s.brand) },
  { name: "Jewelry", slug: "jewelry", items: ["Cartier", "Bvlgari", "Messika"] },
  { name: "Watches", slug: "watches", items: ["Cartier"] },
  { name: "Clothes", slug: "clothes", items: ["Shirts", "Pants/Shorts", "Coats/Jackets", "Loro Piana", "LV", "BV"] },
];

export const BESTSELLERS: CatalogProduct[] = [
  { title: "LV Neverfull MM Tote M27358", price: "$369", tag: "LV", img: lvBag1 },
  { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1 },
  { title: "Gucci GG Marmont Bag — Beige", price: "$490", tag: "Gucci", img: gucciBag2 },
  { title: "Chanel Maxi Flapbag AS6233 — Blush", price: "$539", tag: "Chanel", img: chanelBag2 },
  { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: yslBag1 },
  { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4 },
];

export const SHOES: CatalogProduct[] = [
  { title: "Hermès Oran Sandal — Gold Epsom Leather", price: "$389", tag: "Hermès", img: hermesShoe1 },
  { title: "Hermès Izmir Sandal — Noir", price: "$359", tag: "Hermès", img: hermesShoe2 },
  { title: "Hermès Kelly Mule — Rose Gold", price: "$429", tag: "Hermès", img: hermesShoe3 },
  { title: "Hermès Oran Flat Sandal — Beige", price: "$349", tag: "Hermès", img: hermesShoe4 },
  { title: "Chanel Slingback Pump — Black & Beige Cap-Toe", price: "$329", tag: "Chanel", img: chanelShoe1 },
  { title: "Chanel CC Logo Mule — White", price: "$299", tag: "Chanel", img: chanelShoe2 },
  { title: "Chanel Cap-Toe Ballerina — Nude", price: "$279", tag: "Chanel", img: chanelShoe3 },
  { title: "Chanel Quilted Sneaker — White", price: "$349", tag: "Chanel", img: chanelShoe4 },
  { title: "Louis Vuitton Archlight 2.0 Sneaker — White", price: "$349", tag: "LV", img: lvShoe1 },
  { title: "Louis Vuitton Stellar Mule — Beige", price: "$319", tag: "LV", img: lvShoe2 },
  { title: "Louis Vuitton Bom Dia Flat Mule", price: "$289", tag: "LV", img: lvShoe3 },
  { title: "Louis Vuitton Silhouette Ankle Boot", price: "$419", tag: "LV", img: lvShoe4 },
  { title: "Gucci Horsebit 1953 Loafer — Brown", price: "$289", tag: "Gucci", img: gucciShoe1 },
  { title: "Gucci Princetown Mule — Black GG", price: "$319", tag: "Gucci", img: gucciShoe2 },
  { title: "Gucci Ace Sneaker — White", price: "$279", tag: "Gucci", img: gucciShoe3 },
  { title: "Gucci GG Canvas Sneaker — Beige", price: "$299", tag: "Gucci", img: gucciShoe4 },
  { title: "Gucci Horsebit Slide Sandal", price: "$259", tag: "Gucci", img: gucciShoe5 },
  { title: "Gucci Interlocking G Sandal", price: "$269", tag: "Gucci", img: gucciShoe6 },
  { title: "Gucci Platform Ankle Boot", price: "$389", tag: "Gucci", img: gucciShoe7 },
  { title: "Gucci GG Mule — Beige", price: "$249", tag: "Gucci", img: gucciShoe8 },
  { title: "Dior J'Adior Slingback Pump — Black Mesh", price: "$319", tag: "Dior", img: diorShoe1 },
  { title: "Dior CD Mule — White Patent", price: "$289", tag: "Dior", img: diorShoe2 },
  { title: "Dior Walk'n'Dior Sneaker — White", price: "$349", tag: "Dior", img: diorShoe3 },
  { title: "Prada Monolith Brushed Boot — Black", price: "$429", tag: "Prada", img: pradaShoe1 },
  { title: "Prada Slingback Pump — Nude", price: "$389", tag: "Prada", img: pradaShoe2 },
  { title: "Prada Block Heel Mule — Black", price: "$349", tag: "Prada", img: pradaShoe3 },
  { title: "Valentino Garavani Rockstud Pump — Nude", price: "$389", tag: "Valentino", img: valentinoShoe1 },
  { title: "Valentino Garavani VLogo Sandal — Black", price: "$349", tag: "Valentino", img: valentinoShoe2 },
];

export const COLLECTION: CatalogProduct[] = [
  { title: "LV Neverfull MM Tote M27358 — 47×28×14 cm", price: "$369", tag: "LV", img: lvBag1 },
  { title: "LV OnTheGo PM M28181", price: "$369", tag: "LV", img: lvBag2 },
  { title: "LV Speedy 30 Soft Celebration M28379", price: "$349", tag: "LV", img: lvBag3 },
  { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4 },
  { title: "LV Side Trunk PM M27436", price: "$349", tag: "LV", img: lvBag5 },
  { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1 },
  { title: "Chanel Classic Flap Medium — Black Caviar", price: "$780", tag: "Chanel", img: chanelBag3 },
  { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "YSL", img: yslBag1 },
];

export const JEWELRY: CatalogProduct[] = [
  { title: "Cartier Love Bracelet — Yellow Gold", price: "$6,200", tag: "Cartier", img: cartier1 },
  { title: "Cartier Juste un Clou Bracelet", price: "$4,800", tag: "Cartier", img: cartier2 },
  { title: "Cartier LOVE Ring — Rose Gold", price: "$2,150", tag: "Cartier", img: cartier3 },
  { title: "Cartier Trinity Ring — Three Gold", price: "$1,950", tag: "Cartier", img: cartier4 },
  { title: "Cartier Diamants Légers Necklace", price: "$3,100", tag: "Cartier", img: cartier5 },
  { title: "Cartier Panthère Stud Earrings", price: "$2,400", tag: "Cartier", img: cartier6 },
  { title: "Cartier Clash de Cartier Ring", price: "$1,800", tag: "Cartier", img: cartier7 },
  { title: "Bvlgari B.zero1 Ring — White Gold", price: "$2,200", tag: "Bvlgari", img: bvlgari1 },
  { title: "Bvlgari Serpenti Viper Bracelet", price: "$3,400", tag: "Bvlgari", img: bvlgari2 },
  { title: "Bvlgari Divas Dream Necklace", price: "$4,100", tag: "Bvlgari", img: bvlgari3 },
  { title: "Bvlgari Fiorever Ring — Rose Gold", price: "$1,900", tag: "Bvlgari", img: bvlgari4 },
  { title: "Bvlgari Serpenti Earrings — Gold", price: "$2,700", tag: "Bvlgari", img: bvlgari5 },
  { title: "Bvlgari Lucea Bracelet — Diamond", price: "$5,200", tag: "Bvlgari", img: bvlgari6 },
  { title: "Messika Move Uno Diamond Ring", price: "$1,850", tag: "Messika", img: messika1 },
  { title: "Messika My Twin Stud Earrings", price: "$2,100", tag: "Messika", img: messika2 },
  { title: "Messika Move Classique Bracelet", price: "$3,200", tag: "Messika", img: messika3 },
  { title: "Messika Gatsby Diamond Necklace", price: "$4,500", tag: "Messika", img: messika4 },
  { title: "Messika Baby Move Pendant", price: "$1,650", tag: "Messika", img: messika5 },
];

export const WATCHES: CatalogProduct[] = [
  { title: "Cartier Ballon Bleu 33mm — Steel", price: "$6,900", tag: "Cartier", img: cartierWatch1 },
  { title: "Cartier Panthère Watch — White Gold", price: "$8,500", tag: "Cartier", img: cartierWatch2 },
  { title: "Cartier Tank Solo — Steel", price: "$3,200", tag: "Cartier", img: cartierWatch3 },
  { title: "Cartier Clé de Cartier — Steel", price: "$5,400", tag: "Cartier", img: cartierWatch4 },
  { title: "Cartier Watch 5", price: "$11,000", tag: "Cartier", img: cartierWatch5 },
  { title: "Cartier Ronde Must — Steel", price: "$2,800", tag: "Cartier", img: cartierWatch6 },
  { title: "Cartier Couple Watch Set", price: "$15,000", tag: "Cartier", img: cartierWatchCouple1 },
  { title: "Cartier Couple Set II", price: "$14,500", tag: "Cartier", img: cartierWatchCouple2 },
  { title: "Cartier Couple Set III", price: "$13,800", tag: "Cartier", img: cartierWatchCouple3 },
  { title: "Cartier Couple Set IV", price: "$12,900", tag: "Cartier", img: cartierWatchCouple4 },
];

export const CLOTHES: CatalogProduct[] = [
  { title: "Chanel Tweed Jacket — Ivory", price: "$1,890", tag: "Chanel", img: chanelCloth1 },
  { title: "Chanel Bouclé Blazer — Black", price: "$2,150", tag: "Chanel", img: chanelCloth2 },
  { title: "Chanel Silk Blouse — White", price: "$980", tag: "Chanel", img: chanelCloth3 },
  { title: "Chanel CC Logo Dress — Beige", price: "$2,490", tag: "Chanel", img: chanelCloth4 },
  { title: "Dior Bar Jacket — Powder Pink", price: "$2,350", tag: "Dior", img: diorCloth1 },
  { title: "Dior Oblique Dress — Silk", price: "$1,980", tag: "Dior", img: diorCloth2 },
  { title: "Dior CD Monogram Sweater — Cream", price: "$1,290", tag: "Dior", img: diorCloth3 },
  { title: "Dior Tailored Trouser — Black", price: "$1,150", tag: "Dior", img: diorCloth4 },
  { title: "Dior Toile de Jouy Blouse", price: "$1,450", tag: "Dior", img: diorCloth5 },
  { title: "Dior Floral Midi Skirt", price: "$1,680", tag: "Dior", img: diorCloth6 },
  { title: "Dior Wool Coat — Camel", price: "$3,200", tag: "Dior", img: diorCloth7 },
  { title: "Dior Lady Dior Silk Shirt", price: "$1,390", tag: "Dior", img: diorCloth8 },
];

export const HATS: CatalogProduct[] = [
  { title: "LV Monogram Bucket Hat", price: "$389", tag: "LV", img: lvHat1 },
  { title: "LV Damier Cap — Brown", price: "$349", tag: "LV", img: lvHat2 },
  { title: "LV Signature Beanie — Cream", price: "$299", tag: "LV", img: lvHat3 },
];

export const SCARFS: CatalogProduct[] = [
  { title: "LV Monogram Silk Scarf", price: "$289", tag: "LV", img: lvScarf1 },
  { title: "LV Logomania Scarf — Blue", price: "$319", tag: "LV", img: lvScarf2 },
  { title: "LV Silk Carré — Red", price: "$299", tag: "LV", img: lvScarf3 },
  { title: "LV Silk Shawl — Cream", price: "$349", tag: "LV", img: lvScarf4 },
  { title: "LV Monogram Stole — Ivory", price: "$379", tag: "LV", img: lvScarf5 },
  { title: "LV Giant Scarf — Black", price: "$329", tag: "LV", img: lvScarf6 },
  { title: "LV Silk Square — Multicolor", price: "$259", tag: "LV", img: lvScarf7 },
  { title: "LV Long Silk Scarf — Brown", price: "$279", tag: "LV", img: lvScarf8 },
  { title: "Luxury Silk Scarf — Floral", price: "$189", tag: "Silk", img: scarf1 },
  { title: "Designer Scarf — Animal Print", price: "$219", tag: "Silk", img: scarf2 },
  { title: "Cashmere Wrap — Camel", price: "$249", tag: "Cashmere", img: scarf3 },
  { title: "Silk Bandana — Navy", price: "$159", tag: "Silk", img: scarf4 },
  { title: "Wool Plaid Scarf — Grey", price: "$199", tag: "Wool", img: scarf5 },
  { title: "Print Silk Scarf — Burgundy", price: "$229", tag: "Silk", img: scarf6 },
  { title: "Oversized Silk Wrap — White", price: "$269", tag: "Silk", img: scarf7 },
];

export const SUNGLASSES: CatalogProduct[] = [
  { title: "Chanel Round Sunglasses — Black", price: "$389", tag: "Chanel", img: chanelSun1 },
  { title: "Chanel CC Logo Sunglasses — Tortoise", price: "$359", tag: "Chanel", img: chanelSun2 },
  { title: "Chanel Oval Frame — Brown", price: "$349", tag: "Chanel", img: chanelSun3 },
  { title: "Chanel Rectangle — Black", price: "$379", tag: "Chanel", img: chanelSun4 },
  { title: "Chanel Cat Eye — Gold", price: "$369", tag: "Chanel", img: chanelSun5 },
  { title: "Chanel Shield — White", price: "$399", tag: "Chanel", img: chanelSun6 },
  { title: "Chanel Butterfly — Brown Gradient", price: "$359", tag: "Chanel", img: chanelSun7 },
  { title: "Chanel Pearl Detail — Black", price: "$419", tag: "Chanel", img: chanelSun8 },
  { title: "Chanel Square — Havana", price: "$349", tag: "Chanel", img: chanelSun9 },
  { title: "Chanel Pilot — Gold", price: "$379", tag: "Chanel", img: chanelSun10 },
  { title: "Chanel Rimless — Silver", price: "$429", tag: "Chanel", img: chanelSun11 },
  { title: "Chanel Chain Detail — Black", price: "$449", tag: "Chanel", img: chanelSun12 },
  { title: "Chanel Oversized Square — Black", price: "$389", tag: "Chanel", img: chanelSun13 },
  { title: "Chanel Vintage Round — Gold", price: "$369", tag: "Chanel", img: chanelSun14 },
  { title: "Chanel Geometric — Black", price: "$359", tag: "Chanel", img: chanelSun15 },
  { title: "Chanel Wayfarer Style — Tortoise", price: "$349", tag: "Chanel", img: chanelSun16 },
  { title: "Prada Symbole Sunglasses — Black", price: "$329", tag: "Prada", img: pradaSun1 },
  { title: "Prada Minimal Baroque — White", price: "$349", tag: "Prada", img: pradaSun2 },
  { title: "Prada Cat Eye — Brown Gradient", price: "$339", tag: "Prada", img: pradaSun3 },
  { title: "Prada Oversized Square — Black", price: "$319", tag: "Prada", img: pradaSun4 },
  { title: "Prada Oval — Tortoise", price: "$309", tag: "Prada", img: pradaSun5 },
  { title: "Prada Shield — Silver Mirror", price: "$359", tag: "Prada", img: pradaSun6 },
  { title: "Prada Geometric — Havana", price: "$329", tag: "Prada", img: pradaSun7 },
  { title: "Prada Runway Rectangle — Black", price: "$349", tag: "Prada", img: pradaSun8 },
  { title: "Prada Retro Round — Gold", price: "$319", tag: "Prada", img: pradaSun9 },
  { title: "Prada Narrow Rectangle — Brown", price: "$299", tag: "Prada", img: pradaSun10 },
  { title: "Prada Butterfly — Pink Gradient", price: "$339", tag: "Prada", img: pradaSun11 },
  { title: "Prada Hexagonal — Blue Mirror", price: "$359", tag: "Prada", img: pradaSun12 },
  { title: "Prada Wrap — Black", price: "$369", tag: "Prada", img: pradaSun13 },
  { title: "Prada Aviator — Silver", price: "$329", tag: "Prada", img: pradaSun14 },
];

export const BELTS: CatalogProduct[] = [
  { title: "Hermès Constance Belt 32mm — Black Epsom", price: "$690", tag: "Hermès", img: hermesBelt1 },
  { title: "Hermès H Belt Buckle 32mm — Gold", price: "$650", tag: "Hermès", img: hermesBelt2 },
  { title: "Hermès Reversible Belt 38mm — Brown/Black", price: "$580", tag: "Hermès", img: hermesBelt3 },
  { title: "Hermès Kelly Belt 18mm — Rose Gold", price: "$720", tag: "Hermès", img: hermesBelt4 },
  { title: "Hermès Médor Belt 18mm — Noir Epsom", price: "$680", tag: "Hermès", img: hermesBelt5 },
  { title: "Hermès H Belt 42mm — Havane", price: "$620", tag: "Hermès", img: hermesBelt6 },
  { title: "Hermès Constance Slim 24mm — Etoupe", price: "$740", tag: "Hermès", img: hermesBelt7 },
  { title: "Hermès In-the-Loop Belt — Tan", price: "$590", tag: "Hermès", img: hermesBelt8 },
  { title: "Hermès Etrivière Belt 32mm — Gold", price: "$660", tag: "Hermès", img: hermesBelt9 },
  { title: "Hermès Quizz Belt 32mm — Black", price: "$610", tag: "Hermès", img: hermesBelt10 },
  { title: "LV Initiales Belt 40mm — Monogram", price: "$480", tag: "LV", img: lvBelt1 },
  { title: "LV Initiales Belt 35mm — Damier", price: "$460", tag: "LV", img: lvBelt2 },
  { title: "LV Pyramide Belt 40mm — Black", price: "$520", tag: "LV", img: lvBelt3 },
  { title: "LV Circle Belt 35mm — Brown", price: "$490", tag: "LV", img: lvBelt4 },
  { title: "LV Monogram Belt 30mm — Beige", price: "$440", tag: "LV", img: lvBelt5 },
  { title: "LV Multiple Belt 35mm — Monogram", price: "$470", tag: "LV", img: lvBelt6 },
  { title: "LV Reversible Belt 35mm — Black/Brown", price: "$510", tag: "LV", img: lvBelt7 },
  { title: "LV Pont de Jour Belt 20mm — Nude", price: "$430", tag: "LV", img: lvBelt8 },
  { title: "LV Essential Belt 40mm — Monogram", price: "$500", tag: "LV", img: lvBelt9 },
  { title: "LV Ceinture Belt 30mm — Gold", price: "$460", tag: "LV", img: lvBelt10 },
  { title: "LV Damier Graphite Belt 40mm", price: "$490", tag: "LV", img: lvBelt11 },
  { title: "LV Monogram Canvas Belt 35mm", price: "$450", tag: "LV", img: lvBelt12 },
];

export const ACCESSORIES: CatalogProduct[] = [
  { title: "LV Initiales Belt — Monogram", price: "$480", tag: "LV", img: lvBelt1 },
  { title: "Hermès Constance Belt 32mm — Black", price: "$690", tag: "Hermès", img: hermesBelt1 },
  { title: "Chanel Round Sunglasses — Black", price: "$389", tag: "Chanel", img: chanelSun1 },
  { title: "Prada Symbole Sunglasses — Black", price: "$329", tag: "Prada", img: pradaSun1 },
  { title: "LV Monogram Silk Scarf", price: "$289", tag: "LV", img: lvScarf1 },
  { title: "LV Monogram Bucket Hat", price: "$389", tag: "LV", img: lvHat1 },
];

export const CATEGORY_PAGES = [
  { slug: "bags", title: "Bags", subtitle: "Iconic designer handbags & totes", description: "Shop our curated selection of luxury handbags from Louis Vuitton, Chanel, Hermès, Dior and more, sourced directly from Italy & Dubai.", products: BESTSELLERS },
  { slug: "shoes", title: "Shoes", subtitle: "Designer footwear for every look", description: "Step into our curated collection of luxury shoes from top brands and styles for men and women.", products: SHOES },
  { slug: "jewelry", title: "Jewelry", subtitle: "Elegant fine jewelry and statement pieces", description: "Discover rings, bracelets, necklaces from Cartier, Bvlgari, Messika and more.", products: JEWELRY },
  { slug: "watches", title: "Watches", subtitle: "Luxury timepieces with modern style", description: "Explore premium Cartier watches with real authenticity assurance.", products: WATCHES },
  { slug: "clothes", title: "Clothes", subtitle: "High-end ready-to-wear pieces", description: "Shop elevated clothing essentials and statement outerwear from the world's leading fashion houses.", products: CLOTHES },
  { slug: "accessories", title: "Accessories", subtitle: "Luxury finishing pieces and everyday staples", description: "Find premium belts, sunglasses, scarves and accessories to complete every look.", products: ACCESSORIES },
  { slug: "collection", title: "Collection", subtitle: "Selected new arrivals and seasonal highlights", description: "Browse our curated collection of bestsellers and new arrivals.", products: COLLECTION },
  { slug: "hats", title: "Hats", subtitle: "Designer hats & caps from top houses", description: "Shop luxury hats and caps from Louis Vuitton and more.", products: HATS },
  { slug: "scarfs", title: "Scarfs", subtitle: "Silk & cashmere scarves from elite brands", description: "Explore premium scarves and wraps from Louis Vuitton, Hermès and more.", products: SCARFS },
  { slug: "sunglasses", title: "Sunglasses", subtitle: "Luxury eyewear from iconic fashion houses", description: "Discover designer sunglasses from Chanel and Prada.", products: SUNGLASSES },
  { slug: "belts", title: "Belts", subtitle: "Signature belts from the world's finest brands", description: "Find premium leather belts from Louis Vuitton and Hermès.", products: BELTS },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORY_PAGES.find((page) => page.slug === slug);
}

// ── Featured brands for the home brand section ───────────────────────────────
export const FEATURED_BRANDS = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Saint Laurent",
  "Celine", "Bottega Veneta", "Goyard", "Fendi", "Valentino", "Chloé",
];

export type BrandProduct = {
  id: string;
  brand: string;
  category: string;
  name: string;
  price: string;
  images: string[];
  description: string;
};

function bp(brand: string, category: string, name: string, price: string, images: string[], description: string): BrandProduct {
  return { id: `${brand}-${category}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), brand, category, name, price, images, description };
}

export const ALL_BRAND_PRODUCTS: BrandProduct[] = [
  // ── Louis Vuitton ──
  bp("Louis Vuitton", "Bags", "LV Neverfull MM", "$369", [lvBag1, lvBag2], "Iconic monogram canvas tote, spacious and versatile."),
  bp("Louis Vuitton", "Bags", "LV OnTheGo PM", "$369", [lvBag3, lvBag4], "Structured tote with bold LV motif, perfect for everyday."),
  bp("Louis Vuitton", "Bags", "LV Pochette Métis", "$349", [lvBag5, lvBag1], "Compact crossbody with vintage-inspired hardware."),
  bp("Louis Vuitton", "Shoes", "LV Archlight Sneaker", "$349", [lvShoe1, lvShoe2], "Chunky sole sneaker with monogram canvas detail."),
  bp("Louis Vuitton", "Shoes", "LV Stellar Mule", "$319", [lvShoe3, lvShoe4], "Slip-on mule with LV logo strap."),
  bp("Louis Vuitton", "Belts", "LV Initiales Belt 40mm", "$480", [lvBelt1, lvBelt2], "Classic monogram canvas belt with gold-tone buckle."),
  bp("Louis Vuitton", "Belts", "LV Pyramide Belt 40mm", "$520", [lvBelt3, lvBelt4], "Bold pyramid-stud belt in supple leather."),
  bp("Louis Vuitton", "Accessories", "LV Monogram Silk Scarf", "$289", [lvScarf1, lvScarf2], "Luxurious silk scarf with all-over monogram print."),
  bp("Louis Vuitton", "Accessories", "LV Monogram Bucket Hat", "$389", [lvHat1, lvHat2], "Casual bucket hat in signature monogram canvas."),
  // ── Chanel ──
  bp("Chanel", "Bags", "Chanel Classic Flap Medium", "$780", [chanelBag3, chanelBag1], "The iconic quilted lambskin flap bag with interlocking CC."),
  bp("Chanel", "Bags", "Chanel 19 Large Handbag", "$289", [chanelBag1, chanelBag2], "Relaxed yet luxurious multi-chain bag in lambskin."),
  bp("Chanel", "Bags", "Chanel Boy Bag", "$620", [chanelBag6, chanelBagMain], "Edgy structured flap with ruthenium hardware."),
  bp("Chanel", "Shoes", "Chanel Slingback Pump", "$329", [chanelShoe1, chanelShoe2], "Timeless cap-toe pump with CC logo."),
  bp("Chanel", "Shoes", "Chanel Cap-Toe Ballerina", "$279", [chanelShoe3, chanelShoe4], "Ballet flat with signature two-tone cap toe."),
  bp("Chanel", "Accessories", "Chanel Round Sunglasses", "$389", [chanelSun1, chanelSun2], "Iconic CC-logo round frame sunglasses."),
  bp("Chanel", "Accessories", "Chanel Oval Sunglasses", "$349", [chanelSun3, chanelSun4], "Elegant oval acetate frame with CC temples."),
  // ── Hermès ──
  bp("Hermès", "Shoes", "Hermès Oran Sandal", "$389", [hermesShoe1, hermesShoe2], "Minimalist H-strap flat sandal in Epsom leather."),
  bp("Hermès", "Shoes", "Hermès Izmir Sandal", "$359", [hermesShoe3, hermesShoe4], "Casual leather sandal with iconic Hermès H buckle."),
  bp("Hermès", "Belts", "Hermès Constance Belt 32mm", "$690", [hermesBelt1, hermesBelt2], "Refined belt with Constance H buckle in Epsom leather."),
  bp("Hermès", "Belts", "Hermès H Belt 42mm", "$620", [hermesBelt3, hermesBelt4], "Bold double-tour belt with signature H buckle."),
  bp("Hermès", "Belts", "Hermès Kelly Belt 18mm", "$720", [hermesBelt5, hermesBelt6], "Delicate belt with gold Kelly buckle, ideal for evenings."),
  bp("Hermès", "Accessories", "Hermès Silk Carré Scarf", "$380", [scarf1, scarf2], "Hand-rolled 90cm silk twill scarf with artistic print."),
  // ── Gucci ──
  bp("Gucci", "Bags", "Gucci GG Marmont Bag", "$490", [gucciBag2, gucciBag1], "Quilted Chevron leather bag with Double G hardware."),
  bp("Gucci", "Bags", "Gucci Dionysus Mini", "$560", [gucciBag3, gucciBag4], "Compact shoulder bag with tiger-head closure."),
  bp("Gucci", "Bags", "Gucci Blondie Top Handle", "$620", [gucciBag5, gucciBag1], "Structured bag with interlocking G logo."),
  bp("Gucci", "Shoes", "Gucci Horsebit Loafer", "$289", [gucciShoe1, gucciShoe2], "Iconic horsebit loafer in GG canvas."),
  bp("Gucci", "Shoes", "Gucci Ace Sneaker", "$279", [gucciShoe3, gucciShoe4], "Low-top leather sneaker with embroidered motif."),
  bp("Gucci", "Belts", "Gucci GG Canvas Belt", "$380", [beltBrandGucciImg, hermesBelt1], "Classic GG Supreme canvas belt with gold buckle."),
  bp("Gucci", "Accessories", "Gucci GG Sunglasses", "$320", [sunBrandGucciImg, chanelSun1], "Oversized GG logo acetate sunglasses."),
  // ── Prada ──
  bp("Prada", "Bags", "Prada Galleria Bag", "$680", [pradaShoe1, pradaShoe2], "Structured Saffiano leather tote, a Prada icon."),
  bp("Prada", "Shoes", "Prada Monolith Boot", "$429", [pradaShoe1, pradaShoe2], "Lug-sole leather boot with Re-Nylon panel."),
  bp("Prada", "Shoes", "Prada Slingback Pump", "$389", [pradaShoe2, pradaShoe3], "Kitten heel pump with signature Prada plaque."),
  bp("Prada", "Belts", "Prada Saffiano Belt", "$390", [beltBrandPradaImg, hermesBelt2], "Slim Saffiano leather belt with enamel triangle logo."),
  bp("Prada", "Accessories", "Prada Symbole Sunglasses", "$329", [pradaSun1, pradaSun2], "Geometric acetate frame with Prada logo plaque."),
  bp("Prada", "Accessories", "Prada Minimal Baroque Sunglasses", "$349", [pradaSun3, pradaSun4], "Bold baroque-inspired frame in gradient lens."),
  // ── Saint Laurent ──
  bp("Saint Laurent", "Bags", "YSL Saddle Bag", "$258", [yslBag1, yslBag2], "Smooth calfskin saddle-shape bag with YSL hardware."),
  bp("Saint Laurent", "Bags", "YSL Lou Camera Bag", "$258", [yslBag3, yslBag4], "Quilted lambskin crossbody with YSL logo."),
  bp("Saint Laurent", "Bags", "YSL Niki Medium", "$340", [yslBag5, yslBag1], "Crinkled vintage leather shoulder bag."),
  bp("Saint Laurent", "Accessories", "YSL Cat Eye Sunglasses", "$310", [sunBrandSaintLaurentImg, chanelSun5], "Sleek metal cat-eye frame with SL logo."),
  // ── Celine ──
  bp("Celine", "Bags", "Celine Triomphe Bag", "$689", [bagBrandCeline, chanelBag1], "Structured calfskin bag with gold Triomphe clasp."),
  bp("Celine", "Bags", "Celine Classic Box Bag", "$750", [bagBrandCeline, chanelBag2], "Timeless box bag in smooth polished calfskin."),
  bp("Celine", "Accessories", "Celine Triomphe Sunglasses", "$380", [sunBrandCelineImg, chanelSun3], "Rectangular acetate frame with Triomphe hardware."),
  // ── Bottega Veneta ──
  bp("Bottega Veneta", "Bags", "BV Cassette Bag", "$560", [bagBrandBottega, chanelBag3], "Signature intrecciato woven leather crossbody."),
  bp("Bottega Veneta", "Shoes", "BV Stretch Flat Sandal", "$359", [shoeBrandBottega, pradaShoe1], "Stretch lambskin flat sandal with BV weave."),
  bp("Bottega Veneta", "Belts", "BV Intrecciato Belt", "$420", [beltBrandBottegaImg, hermesBelt3], "Woven Intrecciato leather belt in smooth calfskin."),
  // ── Goyard ──
  bp("Goyard", "Bags", "Goyard Saint Louis PM", "$680", [bagBrandGoyard, chanelBag1], "Classic open tote in signature Goyardine canvas."),
  bp("Goyard", "Bags", "Goyard Belvedere Crossbody", "$590", [bagBrandGoyard, chanelBag2], "Structured crossbody bag in Goyardine canvas."),
  // ── Fendi ──
  bp("Fendi", "Bags", "Fendi Baguette Bag", "$480", [bagBrandFendi, chanelBag3], "The iconic shoulder bag that defined 90s fashion."),
  bp("Fendi", "Shoes", "Fendi Baguette Sandal", "$309", [shoeBrandFendi, pradaShoe2], "FF Jacquard strap sandal inspired by the Baguette bag."),
  bp("Fendi", "Belts", "Fendi FF Belt", "$360", [beltBrandFendiImg, hermesBelt4], "Classic FF monogram belt with reversible strap."),
  bp("Fendi", "Accessories", "Fendi FF Scarf", "$290", [scarfBrandFendiImg, lvScarf1], "Silk scarf with all-over FF logo print."),
  // ── Valentino ──
  bp("Valentino", "Bags", "Valentino Rockstud Bag", "$580", [bagBrandValentino, chanelBag1], "Signature rockstud-embellished leather tote."),
  bp("Valentino", "Shoes", "Valentino Rockstud Pump", "$389", [valentinoShoe1, valentinoShoe2], "Stiletto pump with signature pyramid rockstud trim."),
  bp("Valentino", "Shoes", "Valentino VLogo Sandal", "$349", [valentinoShoe2, valentinoShoe1], "Block heel sandal with gold VLogo buckle."),
  bp("Valentino", "Accessories", "Valentino VLogo Scarf", "$310", [scarfBrandGucciImg, lvScarf2], "Wool-blend scarf with VLogo signature."),
  // ── Chloé ──
  bp("Chloé", "Bags", "Chloé Marcie Saddle Bag", "$480", [bagBrandChloe, chanelBag2], "Relaxed saddle bag in grained calfskin with stitching."),
  bp("Chloé", "Bags", "Chloé Woody Tote", "$390", [bagBrandChloe, chanelBag1], "Canvas and leather tote with Chloé name strap."),
  bp("Chloé", "Accessories", "Chloé Frameé Sunglasses", "$340", [sunBrandCelineImg, pradaSun5], "Round gold-wire frame with Chloé C hinge detail."),
];

export function getBrandProducts(brand: string): BrandProduct[] {
  return ALL_BRAND_PRODUCTS.filter((p) => p.brand === brand);
}

export function getBrandProductsByCategory(brand: string): Record<string, BrandProduct[]> {
  const products = getBrandProducts(brand);
  const grouped: Record<string, BrandProduct[]> = {};
  for (const p of products) {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  }
  return grouped;
}

export const BRAND_CATEGORY_ORDER = ["Bags", "Shoes", "Wallets", "Belts", "Accessories"];

export function brandToSlug(brand: string): string {
  return brand.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function slugToBrand(slug: string): string | undefined {
  return FEATURED_BRANDS.find((b) => brandToSlug(b) === slug);
}

export function utf8Base64Encode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}
