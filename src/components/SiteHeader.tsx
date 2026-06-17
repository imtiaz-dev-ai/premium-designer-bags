import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { getSettings } from "@/lib/store";
import { getCartCount } from "@/lib/cart-store";
import { CATEGORY_BRANDS } from "@/lib/catalog";
import logoImg from "@/assets/Logo.png";

const PRIMARY_LINKS = [
  { href: "/categories/bags",        label: "Bags",        brands: CATEGORY_BRANDS.bags },
  { href: "/categories/shoes",       label: "Shoes",       brands: CATEGORY_BRANDS.shoes },
  { href: "/categories/jewelry",     label: "Jewelry",     brands: CATEGORY_BRANDS.jewelry },
  { href: "/categories/watches",     label: "Watches",     brands: CATEGORY_BRANDS.watches },
];

const MORE_LINKS = [
  { href: "/categories/clothes",    label: "Clothes",    brands: CATEGORY_BRANDS.clothes },
  { href: "/categories/hats",       label: "Hats",       brands: CATEGORY_BRANDS.hats },
  { href: "/categories/scarfs",     label: "Scarfs",     brands: CATEGORY_BRANDS.scarfs },
  { href: "/categories/sunglasses", label: "Sunglasses", brands: CATEGORY_BRANDS.sunglasses },
  { href: "/categories/belts",      label: "Belts",      brands: CATEGORY_BRANDS.belts },
];

const ALL_LINKS = [
  ...PRIMARY_LINKS,
  ...MORE_LINKS,
  { href: "/about",  label: "About",  brands: [] },
  { href: "/policy", label: "Policy", brands: [] },
];

export default function SiteHeader() {
  const settings = getSettings();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    setCartCount(getCartCount());
    const onStorage = () => setCartCount(getCartCount());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function isActive(href: string) {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  }

  function isMoreActive() {
    return MORE_LINKS.some((l) => location.pathname.startsWith(l.href));
  }

  function openDropdown(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <>
      {/* Top bar */}
      <div className="text-xs text-cream" style={{ background: "var(--gradient-luxe)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-gold" />
            Italy · Dubai · UK · USA · Worldwide Delivery
          </span>
          <a href={settings.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3 w-3 text-gold" /> {settings.whatsapp}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoImg} alt="Premium Designer Bags" className="h-11 w-11 rounded-full object-cover" />
            <div className="hidden flex-col sm:flex">
              <span className="text-base font-semibold tracking-tight text-burgundy" style={{ fontFamily: "var(--font-display)" }}>
                Premium Designer Bags
              </span>
              <span className="text-[10px] font-medium tracking-[0.45em] text-gold uppercase">Elevated.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 text-sm font-medium xl:flex">
            <Link to="/" className={`px-2.5 py-1.5 rounded-md transition-colors hover:text-burgundy hover:bg-secondary/60 ${location.pathname === "/" ? "text-burgundy font-semibold" : ""}`}>
              Home
            </Link>

            {PRIMARY_LINKS.map((l) => (
              <div key={l.href} className="relative" onMouseEnter={() => openDropdown(l.label)} onMouseLeave={closeDropdown}>
                <Link
                  to={l.href}
                  className={`flex items-center gap-0.5 px-2.5 py-1.5 rounded-md transition-colors hover:text-burgundy hover:bg-secondary/60 ${isActive(l.href) ? "text-burgundy font-semibold" : ""}`}
                >
                  {l.label} <ChevronDown className="h-3 w-3 opacity-60" />
                </Link>
                {activeDropdown === l.label && l.brands.length > 0 && (
                  <div
                    className="absolute left-0 top-full z-50 mt-1 w-52 rounded-xl border border-border bg-card py-2 shadow-2xl"
                    onMouseEnter={() => openDropdown(l.label)}
                    onMouseLeave={closeDropdown}
                  >
                    {l.brands.map((brand) => (
                      <Link
                        key={brand}
                        to={`${l.href}?brand=${encodeURIComponent(brand)}`}
                        className="block px-4 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-burgundy transition-colors"
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* More dropdown */}
            <div className="relative" onMouseEnter={() => openDropdown("more")} onMouseLeave={closeDropdown}>
              <button className={`flex items-center gap-0.5 px-2.5 py-1.5 rounded-md transition-colors hover:text-burgundy hover:bg-secondary/60 ${isMoreActive() ? "text-burgundy font-semibold" : ""}`}>
                More <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
              {activeDropdown === "more" && (
                <div
                  className="absolute left-0 top-full z-50 mt-1 w-52 rounded-xl border border-border bg-card py-2 shadow-2xl"
                  onMouseEnter={() => openDropdown("more")}
                  onMouseLeave={closeDropdown}
                >
                  {MORE_LINKS.map((l) => (
                    <div key={l.href} className="group relative">
                      <Link
                        to={l.href}
                        className={`flex items-center justify-between px-4 py-2 text-xs transition-colors hover:bg-secondary hover:text-burgundy ${isActive(l.href) ? "text-burgundy font-semibold" : "text-muted-foreground"}`}
                      >
                        {l.label}
                        {l.brands.length > 0 && <ChevronDown className="h-3 w-3 -rotate-90 opacity-50" />}
                      </Link>
                      {l.brands.length > 0 && (
                        <div className="hidden group-hover:block absolute left-full top-0 w-48 rounded-xl border border-border bg-card py-2 shadow-2xl z-50">
                          {l.brands.map((brand) => (
                            <Link
                              key={brand}
                              to={`${l.href}?brand=${encodeURIComponent(brand)}`}
                              className="block px-4 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-burgundy transition-colors"
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={`px-2.5 py-1.5 rounded-md transition-colors hover:text-burgundy hover:bg-secondary/60 ${isActive("/about") ? "text-burgundy font-semibold" : ""}`}>
              About
            </Link>
            <a href="#contact" onClick={handleContactClick} className="px-2.5 py-1.5 rounded-md transition-colors hover:text-burgundy hover:bg-secondary/60 cursor-pointer">
              Contact
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={settings.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition hover:opacity-90 md:inline-flex"
              style={{ background: "var(--gradient-luxe)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/cart" aria-label="Cart" className="relative p-2 hover:text-burgundy transition-colors">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-cream">
                  {cartCount}
                </span>
              )}
            </Link>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 xl:hidden transition-colors hover:text-burgundy">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-card xl:hidden">
            <div className="max-h-[75vh] overflow-y-auto px-4 py-3">
              <Link to="/" className={`block border-b border-border py-3 text-sm font-semibold ${location.pathname === "/" ? "text-burgundy" : "text-muted-foreground"}`} onClick={() => setOpen(false)}>
                Home
              </Link>

              {ALL_LINKS.map((l) =>
                l.brands.length > 0 ? (
                  <details key={l.href} className="border-b border-border">
                    <summary className={`cursor-pointer py-3 text-sm font-semibold list-none flex items-center justify-between ${isActive(l.href) ? "text-burgundy" : "text-muted-foreground"}`}>
                      {l.label} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </summary>
                    <ul className="pl-4 pb-3 space-y-1">
                      {l.brands.map((brand) => (
                        <li key={brand}>
                          <Link
                            to={`${l.href}?brand=${encodeURIComponent(brand)}`}
                            className="block py-1.5 text-xs text-muted-foreground hover:text-burgundy transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {brand}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    className={`block border-b border-border py-3 text-sm font-semibold transition-colors hover:text-burgundy ${isActive(l.href) ? "text-burgundy" : "text-muted-foreground"}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )
              )}

              <a href="#contact" onClick={handleContactClick} className="block border-b border-border py-3 text-sm font-semibold text-muted-foreground hover:text-burgundy transition-colors cursor-pointer">
                Contact
              </a>
              <a
                href={settings.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-cream rounded-xl"
                style={{ background: "var(--gradient-luxe)" }}
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
