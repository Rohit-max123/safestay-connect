import { Bell, Home, Search } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", id: "dashboard" },
  { label: "Executive Summary", id: "executive" },
  { label: "Market Analysis", id: "market" },
  { label: "Product Roadmap", id: "product" },
  { label: "Operations", id: "operations" },
  { label: "Marketing", id: "marketing" },
  { label: "Financials", id: "financials" },
  { label: "Team", id: "team" },
  { label: "Risks", id: "risks" },
  { label: "Appendix", id: "appendix" },
];

export function SafeStayNav() {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-subtle bg-card-surface/90 backdrop-blur-md"
      data-ocid="nav.panel"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 h-14 flex items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-pill flex items-center justify-center">
            <Home className="w-3.5 h-3.5 text-teal" />
          </div>
          <span className="font-display font-bold text-foreground text-sm tracking-tight">
            SafeStay<span className="text-teal"> Connect</span>
          </span>
        </div>
        <nav className="flex items-center gap-0.5 overflow-x-auto flex-1 scrollbar-hide">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              data-ocid={`nav.${id}.link`}
              className={`nav-link px-2.5 py-1.5 rounded-md text-xs whitespace-nowrap transition-all ${
                active === id ? "active bg-pill" : "hover:bg-pill/50"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            className="flex items-center gap-1.5 text-secondary-muted hover:text-foreground transition-colors text-xs"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:block">Search</span>
          </button>
          <button
            type="button"
            className="relative text-secondary-muted hover:text-teal transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-teal rounded-full" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pill border border-teal/40 flex items-center justify-center text-xs font-bold text-teal">
              A
            </div>
            <span className="text-xs text-secondary-muted hidden md:block">
              Alex R.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
