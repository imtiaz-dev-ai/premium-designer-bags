import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { getSettings } from "@/lib/store";
import { getCartCount } from "@/lib/cart-store";
import logoImg from "@/assets/Logo.png";

const NAV_LINKS = [
  { href: "/categories/bags", label: "Bags", brands: ["Louis Vuitton", "Chanel", "Hermès", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent", "Bottega Veneta", "Goyard"] },
  { href: "/categories/shoes", label: "Shoes", brands: ["Hermès", "Chanel", "Louis Vuitton", "Fendi", "Gucci", "Dior", "Bottega Veneta", "Celine", "Loewe", "Prada"] },
  { href: "/categories/jewelry", label: "Jewelry", brands: ["Cartier", "Tiffany & Co", "Van Cleef & Arpels", "Hermès", "Chanel", "Gucci"] },
  { href: "/categories/watches", label: "Watches", brands: ["Cartier", "Hermès", "Rolex", "Omega", "Patek Philippe", "Tag Heuer"] },
  { href: "/categories/clothes", label: "Clothes", brands: ["Loro Piana", "Gucci", "Prada", "Burberry", "Valentino", "Saint Laurent"] },
  { href: "/categories/hats", label: "Hats", brands: ["Louis Vuitton", "Gucci", "Prada", "Burberry", "Fendi", "Chanel"] },
  { href: "/categories/scarfs", label: "Scarfs", brands: ["Hermès", "Gucci", "Louis Vuitton", "Burberry", "Chanel", "Fendi"] },
  { href: "/categories/sunglasses", label: "Sunglasses", brands: ["Chanel", "Dior", "Gucci", "Prada", "Celine", "Saint Laurent"] },
  { href: "/categories/belts", label: "Belts", brands: ["Louis Vuitton", "Gucci", "Hermès", "Prada", "Fendi", "Bottega Veneta"] },
  { href: "/about", label: "About", brands: [] },
  { href: "#contact", label: "Contact", brands: [] },
];

export default function SiteHeader() {
  const settings = getSettings();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartCount());
    const onStorage = () => setCartCount(getCartCount());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-gold" />
            Italy · Dubai · UK · USA · Worldwide Delivery
          </span>
          <a href={settings.whatsappLink} className="flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3 w-3 text-gold" /> {settings.whatsapp}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Premium Designer Bags" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>Premium Designer Bags</span>
              <span className="text-[10px] font-medium tracking-[0.45em] text-gold uppercase">Elevated.</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
            <Link to="/" className="hover:text-burgundy">Home</Link>
            {NAV_LINKS.map((l) =>
              l.brands.length === 0 ? (
                <a key={l.href} href={l.href} className="hover:text-burgundy">{l.label}</a>
              ) : (
                <div key={l.href} className="relative"
                  onMouseEnter={() => setActiveDropdown(l.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={l.href} className="flex items-center gap-0.5 hover:text-burgundy">
                    {l.label} <ChevronDown className="h-3 w-3" />
                  </Link>
                  {activeDropdown === l.label && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-44 rounded-xl border border-border bg-card py-2 shadow-2xl">
                      {l.brands.map((brand) => (
                        <Link key={brand} to={`${l.href}?brand=${encodeURIComponent(brand)}`}
                          className="block px-4 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-burgundy"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden p-2 hover:text-burgundy md:block"><Search className="h-5 w-5" /></button>
            <a href={settings.whatsappLink} className="hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90 md:inline-flex" style={{ background: "var(--gradient-luxe)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button aria-label="Cart" className="relative p-2 hover:text-burgundy" onClick={() => navigate("/cart")}>
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">{cartCount}</span>}
            </button>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 lg:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-card lg:hidden">
            <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
              <Link to="/" className="block border-b border-border py-3 text-sm font-semibold text-burgundy" onClick={() => setOpen(false)}>Home</Link>
              {NAV_LINKS.map((l) =>
                l.brands.length === 0 ? (
                  <a key={l.href} href={l.href} className="block py-3 text-sm font-semibold text-muted-foreground" onClick={() => setOpen(false)}>{l.label}</a>
                ) : (
                  <details key={l.href} className="border-b border-border py-1">
                    <summary className="cursor-pointer py-2 text-sm font-semibold text-muted-foreground">{l.label}</summary>
                    <ul className="pl-4 pb-2 space-y-1">
                      {l.brands.map((brand) => (
                        <li key={brand}>
                          <Link to={`${l.href}?brand=${encodeURIComponent(brand)}`} className="block py-1 text-xs text-muted-foreground hover:text-burgundy" onClick={() => setOpen(false)}>{brand}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
