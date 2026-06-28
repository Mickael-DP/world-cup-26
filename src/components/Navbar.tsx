import { NavLink } from "react-router";
import LogoWC from "./icon/LogoWC";

const links = [
  { to: "/", label: "Home" },
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
