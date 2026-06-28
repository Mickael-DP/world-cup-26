import MatchdayCard from "../components/MatchDayCard";
import { useMatches } from "../hooks/useMatches";
import type { Match } from "../types/matchs";

const Calendar = () => {
  const { matches, loading, error } = useMatches();

  const groupMatches = matches?.matches.reduce(
    (acc, match) => {
      const { group, matchday } = match;
      if (!group) return acc;
      if (!acc[group]) acc[group] = {};
      if (!acc[group][matchday]) acc[group][matchday] = [];
      acc[group][matchday].push(match);
      return acc;
    },
    {} as Record<string, Record<number, Match[]>>,
  );



  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-zinc-950 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-8">Calendrier</h1>

        {loading && <p className="text-zinc-500">Chargement...</p>}
        {error && <p className="text-red-400">Erreur : {error}</p>}

        {matches && (
          <div className="flex flex-col gap-10">
            {Object.entries(groupMatches!).map(([group, matchdays]) => (
              <section key={group}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 shrink-0">
                    {group.replace(/_/g, " ")}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800/60" />
                </div>
                <div className="flex flex-col gap-3">
                  {Object.entries(matchdays).map(([matchday, dayMatches]) => (
                    <MatchdayCard
                      key={matchday}
                      matchday={parseInt(matchday)}
                      matches={dayMatches}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Calendar;
