import type { Match } from "../types/matchs";

interface BracketMatchProps {
  match: Match;
}

const statusLabel: Record<string, { text: string; className: string }> = {
  FINISHED: { text: "FT", className: "text-zinc-500" },
  LIVE: { text: "LIVE", className: "text-green-400" },
  PAUSED: { text: "HT", className: "text-amber-400" },
  POSTPONED: { text: "PPD", className: "text-red-400" },
  CANCELED: { text: "ANN", className: "text-red-400" },
  SUSPENDED: { text: "SUS", className: "text-red-400" },
};

const BracketMatch = ({ match }: BracketMatchProps) => {
  const { homeTeam, awayTeam, score, status, utcDate } = match;
  const isScored = status === "FINISHED" || status === "PAUSED";
  const isLive = status === "LIVE";
  const homeWon = score.winner === "HOME_TEAM";
  const awayWon = score.winner === "AWAY_TEAM";
  const badge = statusLabel[status];

  const matchDate = new Date(utcDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
  const matchTime = new Date(utcDate).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden">
      {/* Home */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-zinc-800/40">
        <img
          src={homeTeam.crest}
          alt={homeTeam.name}
          className="w-5 h-5 object-contain shrink-0"
        />
        <span
          className={`flex-1 text-sm font-semibold truncate ${homeWon ? "text-white" : "text-zinc-400"}`}
        >
          {homeTeam.shortName}
        </span>
        {(isScored || isLive) && (
          <span
            className={`text-sm font-black tabular-nums ${homeWon ? "text-white" : "text-zinc-500"}`}
          >
            {score.fullTime.home ?? "-"}
          </span>
        )}
      </div>

      {/* Away */}
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <img
          src={awayTeam.crest}
          alt={awayTeam.name}
          className="w-5 h-5 object-contain shrink-0"
        />
        <span
          className={`flex-1 text-sm font-semibold truncate ${awayWon ? "text-white" : "text-zinc-400"}`}
        >
          {awayTeam.shortName}
        </span>
        {(isScored || isLive) && (
          <span
            className={`text-sm font-black tabular-nums ${awayWon ? "text-white" : "text-zinc-500"}`}
          >
            {score.fullTime.away ?? "-"}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t border-zinc-800/40 bg-zinc-900/60">
        <span className="text-[10px] text-zinc-600 font-medium">
          {matchDate} · {matchTime}
        </span>
        {badge ? (
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase ${badge.className} ${isLive ? "animate-pulse" : ""}`}
          >
            {badge.text}
          </span>
        ) : (
          <span className="text-[10px] text-zinc-600">—</span>
        )}
      </div>
    </div>
  );
};

export default BracketMatch;
