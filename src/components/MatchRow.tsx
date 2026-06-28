import type { Match } from "../types/matchs";

interface MatchRowProps {
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

const MatchRow = ({ match }: MatchRowProps) => {
  const { homeTeam, awayTeam, score, status, utcDate } = match;
  const isScored = status === "FINISHED" || status === "PAUSED";
  const isLive = status === "LIVE";
  const homeWon = score.winner === "HOME_TEAM";
  const awayWon = score.winner === "AWAY_TEAM";

  const matchTime = new Date(utcDate).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const badge = statusLabel[status];

  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/30 transition-colors duration-150">
      {/* Home team */}
      <div className="flex-1 flex items-center justify-end gap-2 min-w-0">
        <span
          className={`text-sm font-semibold truncate ${homeWon ? "text-white" : "text-zinc-400"}`}
        >
          {homeTeam.shortName}
        </span>
        <img
          src={homeTeam.crest}
          alt={homeTeam.name}
          className="w-6 h-6 object-contain shrink-0"
        />
      </div>

      {/* Score / Time */}
      <div className="flex flex-col items-center w-24 shrink-0">
        {isScored || isLive ? (
          <div className="flex items-center gap-1.5">
            {isLive && (
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            )}
            <span
              className={`text-base font-black tabular-nums ${isLive ? "text-green-400" : "text-white"}`}
            >
              {score.fullTime.home} – {score.fullTime.away}
            </span>
          </div>
        ) : (
          <span className="text-sm font-semibold text-zinc-500 tabular-nums">
            {matchTime}
          </span>
        )}
        {badge && (
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase ${badge.className}`}
          >
            {badge.text}
          </span>
        )}
      </div>

      {/* Away team */}
      <div className="flex-1 flex items-center justify-start gap-2 min-w-0">
        <img
          src={awayTeam.crest}
          alt={awayTeam.name}
          className="w-6 h-6 object-contain shrink-0"
        />
        <span
          className={`text-sm font-semibold truncate ${awayWon ? "text-white" : "text-zinc-400"}`}
        >
          {awayTeam.shortName}
        </span>
      </div>
    </div>
  );
};

export default MatchRow;
