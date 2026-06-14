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
  collection: ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Saint Laurent"],
};

export const NAV_CATEGORIES = [
  { name: "Shoes", slug: "shoes", items: SHOE_BRANDS.map((s) => s.brand) },
  { name: "Jewelry", slug: "jewelry", items: ["Cartier", "Bvlgari", "Messika"] },
  { name: "Watches", slug: "watches", items: ["Cartier"] },
  { name: "Clothes", slug: "clothes", items: ["Shirts", "Pants/Shorts", "Coats/Jackets", "Loro Piana", "LV", "BV"] },
];

export const BESTSELLERS: CatalogProduct[] = [];

export const SHOES: CatalogProduct[] = [];

export const COLLECTION: CatalogProduct[] = [];

export const JEWELRY: CatalogProduct[] = [];

export const WATCHES: CatalogProduct[] = [];

export const CLOTHES: CatalogProduct[] = [];

export const HATS: CatalogProduct[] = [];

export const SCARFS: CatalogProduct[] = [];

export const SUNGLASSES: CatalogProduct[] = [];

export const BELTS: CatalogProduct[] = [];

export const ACCESSORIES: CatalogProduct[] = [];

export const CATEGORY_PAGES = [
  { slug: "bags", title: "Bags", subtitle: "Iconic designer handbags & totes", description: "Shop our curated selection of luxury handbags from Louis Vuitton, Chanel, Hermès, Dior and more, sourced directly from Italy & Dubai.", products: BESTSELLERS },
  { slug: "shoes", title: "Shoes", subtitle: "Designer footwear for every look", description: "Step into our curated collection of luxury shoes from top brands and styles for men and women.", products: SHOES },
  { slug: "jewelry", title: "Jewelry", subtitle: "Elegant fine jewelry and statement pieces", description: "Discover rings, bracelets, necklaces from Cartier, Bvlgari, Messika and more.", products: JEWELRY },
  { slug: "watches", title: "Watches", subtitle: "Luxury timepieces with modern style", description: "Explore premium Cartier watches with real authenticity assurance.", products: WATCHES },
  { slug: "clothes", title: "Clothes", subtitle: "High-end ready-to-wear pieces", description: "Shop elevated clothing essentials and statement outerwear from the world's leading fashion houses.", products: CLOTHES },
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

export const ALL_BRAND_PRODUCTS: BrandProduct[] = [];

export function getBrandProducts(brand: string): BrandProduct[] {
  return ALL_BRAND_PRODUCTS.filter((p) => p.brand === brand);
}

export function getBrandProductsByCategory(brand: string): Record<string, BrandProduct[]> {
  return {};
}

export const BRAND_CATEGORY_ORDER = ["Bags", "Shoes", "Clothes", "Jewelry", "Watches", "Scarfs", "Collection", "Wallets", "Accessories"];

export function brandToSlug(brand: string): string {
  return brand
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugToBrand(slug: string): string | undefined {
  const allBrands = [
    ...FEATURED_BRANDS,
    ...Object.values(CATEGORY_BRANDS).flat(),
    ...Object.keys(BRAND_PRODUCTS),
    "Dior", "Loro Piana", "Tiffany & Co", "Van Cleef & Arpels",
    "Patek Philippe", "Tag Heuer", "Loewe", "Burberry",
  ];
  const unique = Array.from(new Set(allBrands));
  return unique.find((b) => brandToSlug(b) === slug);
}

export function utf8Base64Encode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}
