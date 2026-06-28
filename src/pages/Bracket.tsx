import { useMatches } from "../hooks/useMatches";
import type { Match, MatchStage } from "../types/matchs";
import BracketMatch from "../components/BracketMatch";

const STAGE_ORDER: MatchStage[] = [
  "LAST_32",
  "LAST_16",
  "QUARTER_FINALS",
  "SEMI_FINALS",
  "FINAL",
];

const STAGE_LABEL: Record<MatchStage, string> = {
  GROUP_STAGE: "Phase de groupes",
  LAST_32: "16es de finale",
  LAST_16: "Huitièmes de finale",
  QUARTER_FINALS: "Quarts de finale",
  SEMI_FINALS: "Demi-finales",
  FINAL: "Finale",
};

const Bracket = () => {
  const { matches, loading, error } = useMatches();

  const knockoutMatches = matches?.matches.filter((match) =>
    STAGE_ORDER.includes(match.stage),
  );

  const groupedByStage = knockoutMatches?.reduce(
    (acc, match) => {
      if (!acc[match.stage]) acc[match.stage] = [];
      acc[match.stage].push(match);
      return acc;
    },
    {} as Record<MatchStage, Match[]>,
  );

 
  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-zinc-950 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-8">Bracket</h1>

        {loading && <p className="text-zinc-500">Chargement...</p>}
        {error && <p className="text-red-400">Erreur : {error}</p>}

        {groupedByStage && (
          <div className="flex flex-col gap-10">
            {STAGE_ORDER.filter((stage) => groupedByStage[stage]).map(
              (stage) => (
                <section key={stage}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 shrink-0">
                      {STAGE_LABEL[stage]}
                    </span>
                    <div className="flex-1 h-px bg-zinc-800/60" />
                  </div>

                  {stage === "FINAL" ? (
                    <div className="max-w-xs">
                      <BracketMatch match={groupedByStage[stage][0]} />
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {groupedByStage[stage].map((match) => (
                        <BracketMatch key={match.id} match={match} />
                      ))}
                    </div>
                  )}
                </section>
              ),
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Bracket;
