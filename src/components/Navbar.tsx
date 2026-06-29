import { NavLink } from "react-router";
import LogoWC from "./icon/LogoWC";

const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const links = [
  { to: "/", label: <HomeIcon /> },
  { to: "/groups", label: "Groupes" },
  { to: "/calendar", label: "Calendrier" },
  { to: "/bracket", label: "Bracket" },
];

const Navbar = () => {
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

        {/* Links */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                [
                  "px-2 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-amber-400/10 text-amber-400"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
