import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import LogoWC from "./icon/LogoWC";

const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const classementsLinks = [
  { to: "/groups", label: "Phase de groupes" },
  { to: "/bracket", label: "Bracket" },
  { to: "/scorers", label: "Buteurs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isClassementsActive = classementsLinks.some(l => location.pathname === l.to);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <LogoWC className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="hidden sm:inline text-amber-400 font-black text-lg tracking-tight leading-none">
            WORLD CUP
          </span>
          <span className="text-white font-black text-lg tracking-tight leading-none">
            2026
          </span>
        </div>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "px-2 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150",
                isActive ? "bg-amber-400/10 text-amber-400" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60",
              ].join(" ")
            }
          >
            <HomeIcon />
          </NavLink>

          {/* Calendrier */}
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              [
                "px-2 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150",
                isActive ? "bg-amber-400/10 text-amber-400" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60",
              ].join(" ")
            }
          >
            Calendrier
          </NavLink>

          {/* Classements dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen(v => !v)}
              className={[
                "flex items-center gap-1.5 px-2 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150",
                isClassementsActive || open
                  ? "bg-amber-400/10 text-amber-400"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60",
              ].join(" ")}
            >
              Classements
              <ChevronIcon open={open} />
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md shadow-xl overflow-hidden">
                {classementsLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      [
                        "block px-4 py-2.5 text-sm font-medium transition-colors duration-150",
                        isActive ? "text-amber-400 bg-amber-400/10" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
