import { Link } from "react-router";
import LogoWC from "../components/icon/LogoWC";

const navCards = [
  {
    to: "/groups",
    label: "Groups",
    description: "Standings for all 12 groups",
    tag: "48 teams",
  },
  {
    to: "/calendar",
    label: "Calendar",
    description: "Full match schedule by group",
    tag: "104 matches",
  },
];

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-zinc-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* 2026 background architectural element */}
      <span
        aria-hidden
        className="absolute select-none font-black text-zinc-900 leading-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 30vw, 22rem)", letterSpacing: "-0.05em" }}
      >
        2026
      </span>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 mb-16">
        <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Live Tournament
          </span>
        </div>
        <LogoWC className="w-24 h-24" />

        <h1 className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          FIFA World Cup
        </h1>

        <p className="text-zinc-500 text-base max-w-xs leading-relaxed">
          USA · Canada · Mexico
        </p>
      </div>

      {/* Nav cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        {navCards.map(({ to, label, description, tag }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col gap-3 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700/60 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors duration-150">
                {label}
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-snug">{description}</p>
            <div className="flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-amber-400/60 transition-colors duration-150">
              <span>View</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-150">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;