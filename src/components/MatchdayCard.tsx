import MatchRow from "./MatchRow";
import type { Match } from "../types/matchs";

interface MatchdayCardProps {
  matchday: number;
  matches: Match[];
}

const MatchdayCard = ({ matchday, matches }: MatchdayCardProps) => {
  return (
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-zinc-800/60 bg-zinc-900/60">
        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
          Journée {matchday}
        </span>
      </div>
      <div className="divide-y divide-zinc-800/40">
        {matches.map((match) => (
          <MatchRow key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchdayCard;
