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
  description?: string;
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
    { title: "LV Neverfull MM Tote M27358", price: "$369", tag: "LV", img: lvBag1, description: "Iconic Neverfull MM tote in monogram canvas with spacious interior, adjustable sides and refined leather trim. Perfect everyday luxury piece for versatile styling and exceptional functionality." },
    { title: "LV OnTheGo PM M28181", price: "$369", tag: "LV", img: lvBag2, description: "Sleek OnTheGo PM in signature monogram canvas with refined leather details. Compact design ideal for modern lifestyle essentials, featuring stylish silhouette and premium craftsmanship." },
    { title: "LV Speedy 30 Soft Celebration M28379", price: "$349", tag: "LV", img: lvBag3, description: "Classic Speedy 30 in soft leather with celebratory details. Timeless LV silhouette with spacious interior and distinctive hardware for sophisticated style and enduring elegance." },
    { title: "LV Pochette Métis M27357", price: "$349", tag: "LV", img: lvBag4, description: "Elegant Pochette Métis combining monogram canvas with luxurious leather. Features distinctive clasp closure and compact silhouette, perfect for evening occasions and special events." },
    { title: "LV Side Trunk PM M27436", price: "$349", tag: "LV", img: lvBag5, description: "Distinctive Side Trunk PM inspired by luggage heritage. Functional design with multiple compartments and signature LV monogram canvas for sophisticated urban styling and daily use." },
    { title: "LV Speedy Bandoulière 20 M28316", price: "$309", tag: "LV", img: lvBag1, description: "Refined Speedy Bandoulière 20 with crossbody strap. Monogram canvas bag featuring adjustable leather strap and iconic LV styling for versatile wear and practical luxury." },
    { title: "LV Wallet On Chain Ivy M27755", price: "$279", tag: "LV", img: lvBag2, description: "Sophisticated Wallet On Chain Ivy in monogram canvas with multiple card slots, bill compartment and detachable chain strap for elegant functionality and everyday luxury." },
    { title: "LV OnTheGo BB M46993 — Black Embossed", price: "$289", tag: "LV", img: lvBag3, description: "Luxurious OnTheGo BB in black embossed leather with bold texture and signature LV craftsmanship. Features spacious interior and refined chain strap for sophisticated styling." },
  ],
  "Chanel": [
    { title: "Chanel 19 Large Handbag — Burgundy Lambskin", price: "$289", tag: "Chanel", img: chanelBag1, description: "Exquisite Chanel 19 handbag in rich burgundy lambskin with signature CC turnlock closure, chain strap and timeless design. Luxurious elegance for sophisticated style and special occasions." },
    { title: "Chanel Maxi Flapbag AS6233 — Blush", price: "$539", tag: "Chanel", img: chanelBag2, description: "Iconic Maxi Flap bag in soft blush leather with oversized CC lock, chain-and-leather strap and spacious interior. Timeless sophistication for elevated daywear and evening style." },
    { title: "Chanel Classic Flap Medium — Black Caviar", price: "$780", tag: "Chanel", img: chanelBag3, description: "Timeless Classic Flap Medium in black caviar leather with signature quilted pattern, CC turnlock and interchangeable straps. Ultimate versatility and luxury in one iconic design." },
    { title: "Chanel Boy Bag — Grey Lambskin", price: "$620", tag: "Chanel", img: chanelBag6, description: "Bold Boy bag in distressed grey lambskin with striking rectangular clasp, structured silhouette and premium leather. Edgy refinement meets classic Chanel sophistication for modern style." },
    { title: "Chanel 19 Bag — Black Lambskin", price: "$480", tag: "Chanel", img: chanelBagMain, description: "Sophisticated Chanel 19 in black lambskin with distinctive curved design, CC closure and chain strap. Supple leather construction for elegant everyday luxury and timeless appeal." },
    { title: "Chanel Timeless Clutch — Pearl White", price: "$390", tag: "Chanel", img: chanelBag5, description: "Elegant Timeless clutch in pearl white leather with signature CC clasp, slim profile and smooth interior. Perfect for evening sophistication, special events and red carpet elegance." },
    { title: "Chanel Tweed Jacket — Ivory", price: "$1,890", tag: "Chanel", img: chanelCloth1, description: "Impeccable tweed jacket in ivory with signature trim and refined tailoring. Classic Chanel bouclé construction with distinctive buttons for timeless elegance and sophisticated style." },
    { title: "Chanel Bouclé Blazer — Black", price: "$2,150", tag: "Chanel", img: chanelCloth2, description: "Luxurious black bouclé blazer with timeless silhouette and sophisticated detailing. Expert craftsmanship with signature trim for elevated wardrobe essential and refined elegance." },
    { title: "Chanel Silk Blouse — White", price: "$980", tag: "Chanel", img: chanelCloth3, description: "Elegant silk blouse in pristine white with refined collar and delicate fabric. Sophisticated drape for effortless feminine styling and timeless Chanel luxury appeal." },
    { title: "Chanel CC Logo Dress — Beige", price: "$2,490", tag: "Chanel", img: chanelCloth4, description: "Striking CC logo dress in sophisticated beige with interlocking design. Impeccable tailoring and luxurious fabric for statement occasion wear and elegant luxury style." },
  ],
  "Hermès": [
    { title: "Hermès Oran Sandal — Gold Epsom Leather", price: "$389", tag: "Hermès", img: hermesShoe1, description: "Iconic Oran sandal in vibrant gold Epsom leather with signature H-strap design and comfortable footbed. Luxurious craftsmanship for elegant summer style and sophisticated casual wear." },
    { title: "Hermès Izmir Sandal — Noir", price: "$359", tag: "Hermès", img: hermesShoe2, description: "Classic Izmir sandal in black leather with slim T-strap design and comfortable cork footbed. Signature Hermès craftsmanship for refined footwear and timeless Mediterranean elegance." },
    { title: "Hermès Kelly Mule — Rose Gold", price: "$429", tag: "Hermès", img: hermesShoe3, description: "Elegant Kelly mule in rose gold leather with slip-on design and distinctive square toe. Signature Hermès hardware for sophisticated evening wear and luxurious comfort." },
    { title: "Hermès Oran Flat Sandal — Beige", price: "$349", tag: "Hermès", img: hermesShoe4, description: "Versatile Oran flat sandal in neutral beige with signature H-strap and leather-lined footbed. Perfect for casual luxury styling and comfortable all-season wear." },
    { title: "Hermès Constance Belt 32mm — Black Epsom", price: "$690", tag: "Hermès", img: hermesBelt1, description: "Luxurious Constance belt in black Epsom leather with signature H buckle and precise 32mm width. Exceptional craftsmanship for sophisticated waistline styling and refined elegance." },
    { title: "Hermès H Belt Buckle 32mm — Gold", price: "$650", tag: "Hermès", img: hermesBelt2, description: "Iconic H belt buckle in polished gold with 32mm width and signature Hermès hardware. Crafted for sophisticated leather accessory enhancement and luxury waist styling." },
  ],
  "Dior": [
    { title: "Dior J'Adior Slingback Pump — Black Mesh", price: "$319", tag: "Dior", img: diorShoe1, description: "Sophisticated J'Adior slingback pump in black mesh with signature Dior heel and elegant strap. Comfortable fit and luxurious fabric for refined styling and chic sophistication." },
    { title: "Dior CD Mule — White Patent", price: "$289", tag: "Dior", img: diorShoe2, description: "Bold CD mule in glossy white patent with signature Dior logo slip-on design. Striking silhouette for confident contemporary elegance and stylish footwear statement." },
    { title: "Dior Walk'n'Dior Sneaker — White", price: "$349", tag: "Dior", img: diorShoe3, description: "Luxury Walk'n'Dior sneaker in clean white with signature CD logo side panels. Cushioned sole and lace-up design for sophisticated casual wear and premium comfort." },
    { title: "Dior Bar Jacket — Powder Pink", price: "$2,350", tag: "Dior", img: diorCloth1, description: "Iconic Bar jacket in powder pink wool with legendary Dior tailoring and distinctive bar fastening. Impeccable fit for timeless feminine sophistication and haute couture elegance." },
    { title: "Dior Oblique Dress — Silk", price: "$1,980", tag: "Dior", img: diorCloth2, description: "Striking Oblique dress in silk with signature pattern and body-conscious fit. Refined neckline and luxurious fabric for bold feminine elegance and statement occasion wear." },
    { title: "Dior CD Monogram Sweater — Cream", price: "$1,290", tag: "Dior", img: diorCloth3, description: "Sophisticated CD monogram sweater in cream with signature motif and refined knit. Relaxed fit for elevated casual luxury and stylish contemporary wardrobe essential." },
    { title: "Dior Tailored Trouser — Black", price: "$1,150", tag: "Dior", img: diorCloth4, description: "Elegant tailored trouser in black wool with impeccable Dior construction. Refined waist and clean lines for sophisticated professional styling and contemporary luxury appeal." },
    { title: "Dior Toile de Jouy Blouse", price: "$1,450", tag: "Dior", img: diorCloth5, description: "Romantic Toile de Jouy blouse in silk with classic print and refined collar. Flowing silhouette for timeless feminine elegance and sophisticated Parisian styling." },
    { title: "Dior Floral Midi Skirt", price: "$1,680", tag: "Dior", img: diorCloth6, description: "Beautiful floral midi skirt in silk with vibrant print and elegant length. Refined waistband for sophisticated seasonal styling and graceful feminine luxury look." },
    { title: "Dior Wool Coat — Camel", price: "$3,200", tag: "Dior", img: diorCloth7, description: "Luxurious camel wool coat with tailored fit and signature Dior silhouette. Refined lapels and impeccable craftsmanship for sophisticated outerwear and elegant winter luxury." },
    { title: "Dior Lady Dior Silk Shirt", price: "$1,390", tag: "Dior", img: diorCloth8, description: "Elegant Lady Dior silk shirt in refined hue with signature quality. Timeless styling and luxurious fabric for versatile sophistication and polished luxury wardrobe piece." },
  ],
  "Gucci": [
    { title: "Gucci Horsebit 1953 Loafer — Brown GG Canvas", price: "$289", tag: "Gucci", img: gucciBag1, description: "Iconic Horsebit 1953 loafer in brown GG canvas with signature horsebit detail. Comfortable fit and timeless Gucci style for sophisticated casual wear and vintage-inspired luxury." },
    { title: "Gucci GG Marmont Bag — Beige", price: "$490", tag: "Gucci", img: gucciBag2, description: "Elegant GG Marmont bag in beige with oversized GG hardware and chain strap. Quilted leather construction for modern luxury and sophisticated Gucci aesthetic appeal." },
    { title: "Gucci Dionysus Mini Bag — Black", price: "$560", tag: "Gucci", img: gucciBag3, description: "Bold Dionysus mini in black leather with tiger head clasp detail. Compact silhouette and signature Gucci hardware for striking statement style and contemporary luxury." },
    { title: "Gucci Blondie Top Handle Bag", price: "$620", tag: "Gucci", img: gucciBag4, description: "Sophisticated Blondie top handle in signature GG canvas with distinctive styling. Structured silhouette and refined chain strap for elegant wear and modern luxury appeal." },
    { title: "Gucci Jackie 1961 Small — Nude", price: "$580", tag: "Gucci", img: gucciBag5, description: "Timeless Jackie 1961 small in nude leather with piston clasp detail. Elegant top handle and iconic Gucci silhouette for refined style and vintage-inspired luxury." },
  ],
  "Prada": [
    { title: "Prada Monolith Brushed Leather Boot — Black", price: "$429", tag: "Prada", img: pradaShoe1, description: "Bold Monolith boot in black brushed leather with signature chunky sole and sleek silhouette. Premium Italian craftsmanship for contemporary edge and sophisticated urban luxury styling." },
    { title: "Prada Slingback Pump — Nude", price: "$389", tag: "Prada", img: pradaShoe2, description: "Elegant slingback pump in nude patent with minimalist design and comfortable heel. Sophisticated silhouette for refined occasions and polished luxury footwear essential." },
    { title: "Prada Block Heel Mule — Black", price: "$349", tag: "Prada", img: pradaShoe3, description: "Sophisticated block heel mule in black nappa with slip-on design. Signature Prada minimalism and comfortable height for elegant all-day wear and contemporary luxury." },
    { title: "Prada Symbole Sunglasses — Black", price: "$329", tag: "Prada", img: pradaSun1, description: "Iconic Symbole sunglasses in black frames with triangular Prada detailing. Premium lenses and oversized shape for bold luxury statement and high-fashion eyewear appeal." },
    { title: "Prada Minimal Baroque — White", price: "$349", tag: "Prada", img: pradaSun2, description: "Elegant Minimal Baroque sunglasses in white with refined design. Signature baroque-inspired details and luxury lens quality for sophisticated style and designer eyewear excellence." },
  ],
  "Saint Laurent": [
    { title: "Saint Laurent Saddle — Caramel Calfskin", price: "$258", tag: "Saint Laurent", img: yslBag1, description: "Iconic YSL Saddle bag in caramel calfskin with signature flap design and chain strap. Luxurious leather for timeless rock-chic elegance and sophisticated designer luxury appeal." },
    { title: "Saint Laurent Cassandre Large Flap Wallet — Beige", price: "$178", tag: "Saint Laurent", img: yslBag2, description: "Sophisticated Cassandre wallet in beige leather with signature YSL logo flap. Multiple compartments and refined design for elegant organization and luxury accessory styling." },
    { title: "Saint Laurent YSL Mini Bucket Bag", price: "$269", tag: "Saint Laurent", img: yslBag3, description: "Chic mini bucket bag with striking logo detail and drawstring closure. Compact silhouette for modern luxury and bold designer style with signature YSL aesthetic." },
    { title: "Saint Laurent Lou Camera — Beige Quilted", price: "$258", tag: "Saint Laurent", img: yslBag4, description: "Elegant Lou Camera bag in beige quilted leather with signature YSL design. Chain strap and structured silhouette for sophisticated styling and refined luxury accessory wear." },
    { title: "Saint Laurent Niki Medium — Crinkled Leather", price: "$340", tag: "Saint Laurent", img: yslBag5, description: "Bold Niki medium in crinkled leather with signature YSL logo and chain strap. Textured finish for edgy sophistication and contemporary rock-chic luxury designer appeal." },
  ],
  "Cartier": [
    { title: "Cartier Love Bracelet — Yellow Gold", price: "$6,200", tag: "Cartier", img: cartier1, description: "Iconic Love bracelet in 18k yellow gold with signature screw details and perfect-fit design. Legendary craftsmanship symbolizing eternal love for timeless luxury jewelry and meaningful gifting." },
    { title: "Cartier Juste un Clou Bracelet", price: "$4,800", tag: "Cartier", img: cartier2, description: "Bold Juste un Clou bracelet in yellow gold with nail-inspired design. Cartier's exceptional craftsmanship and edgy elegance for statement jewelry and contemporary luxury accessorizing." },
    { title: "Cartier LOVE Ring — Rose Gold", price: "$2,150", tag: "Cartier", img: cartier3, description: "Timeless LOVE ring in rose gold with signature screw motif and polished finish. Cartier's legendary quality for everyday luxury expression and meaningful romantic jewelry appeal." },
    { title: "Cartier Trinity Ring — Three Gold", price: "$1,950", tag: "Cartier", img: cartier4, description: "Classic Trinity ring with three gold bands in distinctive design. Symbolizes love, friendship and loyalty with Cartier's impeccable craftsmanship for meaningful luxury jewelry." },
    { title: "Cartier Diamants Légers Necklace", price: "$3,100", tag: "Cartier", img: cartier5, description: "Elegant Diamants Légers necklace with diamonds and refined chain. Signature Cartier sparkle for luxurious gifting and sophisticated jewelry essential with timeless elegance." },
    { title: "Cartier Panthère Stud Earrings", price: "$2,400", tag: "Cartier", img: cartier6, description: "Iconic Panthère studs in yellow gold with distinctive panther head design. Cartier's legendary craftsmanship for bold feminine elegance and signature luxury jewelry statement." },
    { title: "Cartier Clash de Cartier Ring", price: "$1,800", tag: "Cartier", img: cartier7, description: "Modern Clash ring with mixed textures combining smooth and ridged gold. Signature Cartier design for contemporary luxury jewelry statement and sophisticated architectural appeal." },
    { title: "Cartier Ballon Bleu 33mm — Steel", price: "$6,900", tag: "Cartier", img: cartierWatch1, description: "Classic Ballon Bleu 33mm in polished steel with rounded case and blue sapphire crown. Cartier's legendary Swiss movement for timeless elegance and sophisticated luxury timepiece." },
    { title: "Cartier Panthère Watch — White Gold", price: "$8,500", tag: "Cartier", img: cartierWatch2, description: "Bold Panthère watch in white gold with iconic panther motif and diamond accents. Cartier's exceptional Swiss movement for luxurious statement timepiece with wild elegance." },
    { title: "Cartier Tank Solo — Steel", price: "$3,200", tag: "Cartier", img: cartierWatch3, description: "Timeless Tank Solo in polished steel with legendary rectangular case and Roman numerals. Swiss automatic movement for classic elegance and sophisticated luxury wristwear essential." },
    { title: "Cartier Clé de Cartier — Steel", price: "$5,400", tag: "Cartier", img: cartierWatch4, description: "Innovative Clé de Cartier in steel with key-inspired design and distinctive crown guard. Cartier's exceptional Swiss movement for modern luxury and contemporary timepiece styling." },
    { title: "Cartier Watch 5", price: "$11,000", tag: "Cartier", img: cartierWatch5, description: "Exceptional Cartier timepiece with Swiss movement and premium materials. Signature craftsmanship and iconic design for ultimate luxury watch statement and refined wristwear." },
    { title: "Cartier Ronde Must — Steel", price: "$2,800", tag: "Cartier", img: cartierWatch6, description: "Classic Ronde Must in steel with clean round case and minimalist dial. Cartier's legendary Swiss precision for everyday luxury timepiece wearing and sophisticated accessorizing." },
    { title: "Cartier Couple Watch Set", price: "$15,000", tag: "Cartier", img: cartierWatchCouple1, description: "Romantic couple watch set with matching timepieces and coordinated design. Swiss movements for sophisticated pair styling and luxurious gift set with Cartier excellence." },
    { title: "Cartier Couple Set II", price: "$14,500", tag: "Cartier", img: cartierWatchCouple2, description: "Elegant couple watch set II with harmonized Cartier designs and premium Swiss movements. Refined coordinated timepiece collection for sophisticated pair elegance and luxury gifting." },
    { title: "Cartier Couple Set III", price: "$13,800", tag: "Cartier", img: cartierWatchCouple3, description: "Sophisticated couple watch set III with distinctive Cartier styling and exceptional craftsmanship. Coordinated aesthetics for refined pair elegance and premium luxury timepiece collection." },
    { title: "Cartier Couple Set IV", price: "$12,900", tag: "Cartier", img: cartierWatchCouple4, description: "Stunning couple watch set IV with premium Cartier timepieces and coordinated aesthetics. Legendary Swiss movements for luxury gifting and sophisticated pair styling excellence." },
  ],
  "Bvlgari": [
    { title: "Bvlgari B.zero1 Ring — White Gold", price: "$2,200", tag: "Bvlgari", img: bvlgari1, description: "Bold B.zero1 ring in white gold with iconic spiral design and Bvlgari craftsmanship. Contemporary edge for statement jewelry and modern luxury accessory with architectural appeal." },
    { title: "Bvlgari Serpenti Viper Bracelet", price: "$3,400", tag: "Bvlgari", img: bvlgari2, description: "Stunning Serpenti Viper bracelet in gold with distinctive snake-inspired design. Signature Bvlgari craftsmanship and luxurious gemstone accents for bold jewelry statement." },
    { title: "Bvlgari Divas Dream Necklace", price: "$4,100", tag: "Bvlgari", img: bvlgari3, description: "Elegant Divas Dream necklace in gold with signature Serpenti design. Sparkling diamonds and refined chain for red carpet luxury and sophisticated jewelry essential." },
    { title: "Bvlgari Fiorever Ring — Rose Gold", price: "$1,900", tag: "Bvlgari", img: bvlgari4, description: "Romantic Fiorever ring in rose gold with floral-inspired Bvlgari design. Brilliant diamonds for feminine sophistication and special occasion luxury jewelry appeal." },
    { title: "Bvlgari Serpenti Earrings — Gold", price: "$2,700", tag: "Bvlgari", img: bvlgari5, description: "Bold Serpenti earrings in yellow gold with signature snake-inspired design. Bvlgari's exceptional craftsmanship for statement jewelry and luxurious accessorizing appeal." },
    { title: "Bvlgari Lucea Bracelet — Diamond", price: "$5,200", tag: "Bvlgari", img: bvlgari6, description: "Luxurious Lucea bracelet with diamonds and signature Bvlgari sparkle. Refined setting for sophisticated elegance and exceptional craftsmanship in premium luxury jewelry." },
  ],
  "Messika": [
    { title: "Messika Move Uno Diamond Ring", price: "$1,850", tag: "Messika", img: messika1, description: "Elegant Move Uno ring with brilliant-cut diamond and signature design. Exceptional French craftsmanship for timeless luxury jewelry and meaningful romantic accessory." },
    { title: "Messika My Twin Stud Earrings", price: "$2,100", tag: "Messika", img: messika2, description: "Sophisticated My Twin studs with brilliant diamonds and refined setting. Signature Messika design for elegant everyday wear and luxury jewelry sophistication." },
    { title: "Messika Move Classique Bracelet", price: "$3,200", tag: "Messika", img: messika3, description: "Classic Move bracelet with movable diamonds and exceptional craftsmanship. Signature Messika design for luxurious wrist styling and elegant jewelry essential." },
    { title: "Messika Gatsby Diamond Necklace", price: "$4,500", tag: "Messika", img: messika4, description: "Striking Gatsby necklace with Art Deco-inspired design and diamonds. Signature Messika aesthetic for bold elegance and sophisticated luxury jewelry statement." },
    { title: "Messika Baby Move Pendant", price: "$1,650", tag: "Messika", img: messika5, description: "Delicate Baby Move pendant with diamond and refined chain. Signature movable stone design for elegant everyday luxury and feminine jewelry sophistication." },
  ],
  "Valentino": [
    { title: "Valentino Garavani Rockstud Pump — Nude", price: "$389", tag: "Valentino", img: valentinoShoe1, description: "Iconic Rockstud pump in nude leather with signature pyramid studs. Pointed toe and elegant heel for bold feminine sophistication and statement footwear style." },
    { title: "Valentino Garavani VLogo Sandal — Black", price: "$349", tag: "Valentino", img: valentinoShoe2, description: "Chic VLogo sandal in black leather with signature rockstud detail. Comfortable heel and distinctive branding for contemporary luxury and stylish designer footwear." },
  ],
  "Fendi": [
    { title: "Fendi Baguette Sandal — FF Jacquard", price: "$309", tag: "Fendi", img: shoeBrandFendi, description: "Bold Baguette sandal in FF jacquard with signature double-F motif. Comfortable footbed and statement design for luxurious summer style and designer beachwear." },
    { title: "Fendi Flow Sneaker — White", price: "$349", tag: "Fendi", img: shoeBrandFendi, description: "Sophisticated Flow sneaker in white leather with premium cushioned sole. Signature FF hardware for elevated casual luxury and contemporary fashion-forward styling." },
  ],
  "Bottega Veneta": [
    { title: "Bottega Veneta Stretch Flat Sandal — Cream", price: "$359", tag: "Bottega Veneta", img: shoeBrandBottega, description: "Elegant stretch flat sandal in cream leather with intrecciato weave. Comfortable fit and sophisticated design for refined summer style and Italian luxury appeal." },
    { title: "Bottega Veneta BV Tire Loafer — Black", price: "$389", tag: "Bottega Veneta", img: shoeBrandBottega, description: "Modern BV Tire loafer in black leather with signature intrecciato weave. Sleek silhouette and premium Italian craftsmanship for contemporary luxury footwear essential." },
  ],
  "Loewe": [
    { title: "Loewe Toy Puffy Mule — Ivory Nappa", price: "$299", tag: "Loewe", img: shoeBrandLoewe, description: "Playful Toy Puffy mule in ivory nappa leather with signature quilted design. Comfortable height and luxurious leather for fashion-forward style and contemporary luxury." },
    { title: "Loewe Campo Sneaker — White", price: "$319", tag: "Loewe", img: shoeBrandLoewe, description: "Minimalist Campo sneaker in white leather with clean lines and comfortable sole. Signature Loewe aesthetic for sophisticated casual wear and premium Italian luxury." },
  ],
  "Celine": [
    { title: "Celine Triomphe Bag — Black Calfskin", price: "$689", tag: "Celine", img: bagBrandCeline, description: "Elegant Triomphe bag in black calfskin with signature design and refined silhouette. Exceptional Italian craftsmanship for timeless luxury and sophisticated accessory styling." },
    { title: "Celine Classic Box Bag — Tan", price: "$750", tag: "Celine", img: bagBrandCeline, description: "Sophisticated Classic Box bag in tan leather with structured silhouette. Signature Celine aesthetic for refined everyday elegance and premium luxury accessory essential." },
  ],
  "Goyard": [
    { title: "Goyard Saint Louis PM Tote — Natural", price: "$680", tag: "Goyard", img: bagBrandGoyard, description: "Iconic Saint Louis PM tote in natural canvas with signature chevron pattern. Spacious interior and exceptional French craftsmanship for luxury tote and sophisticated styling." },
    { title: "Goyard Belvedere MM Crossbody — Black", price: "$590", tag: "Goyard", img: bagBrandGoyard, description: "Elegant Belvedere MM crossbody in black leather with signature chevron design. Compact silhouette and refined hardware for sophisticated everyday luxury and designer accessory." },
  ],
  "Chloé": [
    { title: "Chloé Marcie Small Saddle Bag — Caramel", price: "$480", tag: "Chloé", img: bagBrandChloe, description: "Chic Marcie saddle bag in caramel leather with signature curved silhouette. Refined hardware for bohemian elegance and stylish luxury accessory with timeless appeal." },
    { title: "Chloé Woody Tote — Beige", price: "$390", tag: "Chloé", img: bagBrandChloe, description: "Sophisticated Woody tote in beige canvas with signature relaxed elegance. Spacious interior and refined leather trim for everyday luxury and refined casual styling." },
  ],
  "Burberry": [
    { title: "Burberry TB Monogram Trench Coat", price: "$1,890", tag: "Burberry", img: clothBrandBurberry, description: "Iconic TB monogram trench coat in beige with signature check lining and refined tailoring. Legendary British craftsmanship for timeless outerwear and sophisticated luxury coat." },
    { title: "Burberry Classic Check Scarf", price: "$380", tag: "Burberry", img: scarfBrandBurberry, description: "Classic Burberry check scarf in premium cashmere with signature beige, red, black pattern. Luxurious fabric for sophisticated winter styling and timeless British luxury accessory." },
    { title: "Burberry Monogram Cap", price: "$290", tag: "Burberry", img: hatBrandBurberry, description: "Stylish monogram cap in signature check with distinctive TB pattern. Refined fit and premium materials for luxury streetwear elegance and sophisticated athletic accessory." },
  ],
  "Loro Piana": [
    { title: "Loro Piana Baby Cashmere Sweater — Cream", price: "$1,650", tag: "Loro Piana", img: clothBrandLoroPiana, description: "Luxurious baby cashmere sweater in cream with signature exceptional softness. Refined knit and sophisticated silhouette for ultimate comfort and premium Italian luxury." },
    { title: "Loro Piana Cashmere Coat — Camel", price: "$3,200", tag: "Loro Piana", img: clothBrandLoroPiana, description: "Elegant cashmere coat in camel with impeccable tailoring and signature silhouette. Refined lapels and premium fabric for sophisticated winter luxury and refined outerwear." },
  ],
  "Tiffany & Co": [
    { title: "Tiffany T Wire Bracelet — Rose Gold", price: "$2,100", tag: "Tiffany & Co", img: jewelBrandTiffany, description: "Iconic T wire bracelet in rose gold with signature clean lines. Exceptional craftsmanship for timeless luxury jewelry and sophisticated everyday accessorizing essential." },
    { title: "Tiffany Setting Solitaire Ring", price: "$4,500", tag: "Tiffany & Co", img: jewelBrandTiffany, description: "Classic solitaire ring in Tiffany setting with signature six-prong design. Brilliant diamond and exceptional craftsmanship for engagement perfection and luxury proposal essential." },
  ],
  "Van Cleef & Arpels": [
    { title: "Van Cleef Alhambra Necklace — Mother of Pearl", price: "$3,800", tag: "Van Cleef & Arpels", img: jewelBrandVanCleef, description: "Legendary Alhambra necklace in mother of pearl with signature quatrefoil motif. Exceptional gemstone and Van Cleef craftsmanship for timeless elegance and luxury jewelry." },
    { title: "Van Cleef Magic Alhambra Bracelet", price: "$5,200", tag: "Van Cleef & Arpels", img: jewelBrandVanCleef, description: "Iconic Magic Alhambra bracelet with signature quatrefoil design. Premium stones and Van Cleef craftsmanship for refined luxury and sophisticated jewelry statement." },
  ],
  "Rolex": [
    { title: "Rolex Datejust 36 — Steel & Gold", price: "$12,500", tag: "Rolex", img: watchBrandRolex, description: "Classic Datejust 36 in steel and gold with signature date display. Flawless automatic movement and legendary craftsmanship for timeless luxury timepiece and prestige." },
    { title: "Rolex Lady-Datejust 28 — White Gold", price: "$16,000", tag: "Rolex", img: watchBrandRolex, description: "Elegant Lady-Datejust 28 in white gold with signature date and precious metal. Exceptional Swiss movement for sophisticated timepiece and luxury watchmaking excellence." },
  ],
  "Omega": [
    { title: "Omega Constellation 29mm — Steel", price: "$4,200", tag: "Omega", img: watchBrandOmega, description: "Sophisticated Constellation 29mm in steel with signature star bezel. Elegant dial and Swiss precision for refined luxury timepiece and premium watchmaking distinction." },
    { title: "Omega De Ville Prestige — Rose Gold", price: "$6,800", tag: "Omega", img: watchBrandOmega, description: "Elegant De Ville Prestige in rose gold with signature refinement. Automatic movement and sophisticated design for discerning wearers and luxury timepiece excellence." },
  ],
  "Patek Philippe": [
    { title: "Patek Philippe Calatrava 35mm — White Gold", price: "$28,000", tag: "Patek Philippe", img: watchBrandPatek, description: "Timeless Calatrava 35mm in white gold with signature elegance. Exceptional Swiss movement and legendary craftsmanship for ultimate luxury timepiece and collector's prestige." },
    { title: "Patek Philippe Aquanaut Luce", price: "$35,000", tag: "Patek Philippe", img: watchBrandPatek, description: "Rare Aquanaut Luce with unique dial and signature sport-luxury design. Exceptional movement and contemporary aesthetic for collector's piece and premium watchmaking art." },
  ],
  "Tag Heuer": [
    { title: "Tag Heuer Aquaracer 32mm — Steel", price: "$2,800", tag: "Tag Heuer", img: watchBrandTagHeuer, description: "Sporty Aquaracer 32mm in steel with signature water resistance. Swiss movement and bold design for active luxury lifestyle and premium sports watch excellence." },
    { title: "Tag Heuer Carrera Lady Chronograph", price: "$4,100", tag: "Tag Heuer", img: watchBrandTagHeuer, description: "Elegant Carrera Lady chronograph with signature precision. Feminine design and Swiss automatic movement for sophisticated timing and luxury watchmaking refinement." },
  ],
};

const SHARED_BRANDS = [
  "Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada", "Saint Laurent",
  "Celine", "Bottega Veneta", "Goyard", "Fendi", "Valentino", "Chloé",
  "Balenciaga", "Burberry", "Loewe", "Dior", "Miss Dior",
];

export const CATEGORY_BRANDS: Record<string, string[]> = {
  bags: SHARED_BRANDS,
  shoes: SHARED_BRANDS,
  jewelry: ["Chanel", "Louis Vuitton", "Hermès", "Gucci", "Dior", "Saint Laurent", "Celine", "Cartier", "Bvlgari", "Messika", "Van Cleef & Arpels", "Tiffany & Co", "David Yurman"],
  watches: ["Rolex", "Cartier", "Hermès", "Bvlgari", "Patek Philippe", "Richard Mille", "Chanel"],
  clothes: ["Chanel", "Dior", "Gucci", "Prada", "Burberry", "Loro Piana", "Saint Laurent"],
  hats: ["Louis Vuitton", "Chanel", "Gucci", "Prada", "Burberry", "Fendi"],
  scarfs: ["Louis Vuitton", "Hermès", "Chanel", "Gucci", "Burberry", "Fendi"],
  sunglasses: ["Chanel", "Prada", "Dior", "Louis Vuitton", "Gucci", "Celine", "Saint Laurent", "Fendi"],
  belts: ["Chanel", "Dior", "Gucci", "Valentino", "Prada", "Hermès", "Fendi", "Bottega Veneta", "Celine", "Burberry", "Saint Laurent", "Louis Vuitton"],
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
export const FEATURED_BRANDS = Array.from(new Set([
  ...SHARED_BRANDS,
  ...CATEGORY_BRANDS.jewelry,
  ...CATEGORY_BRANDS.watches,
  ...CATEGORY_BRANDS.clothes,
  ...CATEGORY_BRANDS.hats,
  ...CATEGORY_BRANDS.scarfs,
  ...CATEGORY_BRANDS.sunglasses,
  ...CATEGORY_BRANDS.belts,
]));

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
    "Balenciaga", "Miss Dior", "Bvlgari", "Messika", "Rolex", "Omega", "David Yurman", "Richard Mille",
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
