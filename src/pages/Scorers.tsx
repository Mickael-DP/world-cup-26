import { useScorers } from "../hooks/useScorers";

const getRankStyle = (rank: number) => {
  if (rank === 1) return "text-amber-400 font-black";
  if (rank === 2) return "text-zinc-300 font-bold";
  if (rank === 3) return "text-amber-700 font-bold";
  return "text-zinc-600 font-semibold";
};

const Scorers = () => {
  const { scorers, loading, error } = useScorers();

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-zinc-950 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-8">Buteurs</h1>

        {loading && <p className="text-zinc-500">Chargement...</p>}
        {error && <p className="text-red-400">Erreur : {error}</p>}

        {scorers && (
          <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden">
    
            <div className="grid grid-cols-[2rem_1fr_4rem_4rem] items-center px-4 py-2.5 border-b border-zinc-800/60 bg-zinc-900/60">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600">#</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600">Joueur</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">J</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">Buts</span>
            </div>


            <div className="divide-y divide-zinc-800/40">
              {scorers.scorers.map((scorer, index) => {
                const rank = index + 1;
                return (
                  <div
                    key={scorer.player.id}
                    className="grid grid-cols-[2rem_1fr_4rem_4rem] items-center px-4 py-3 hover:bg-zinc-800/30 transition-colors duration-150"
                  >
                    <span className={`text-sm ${getRankStyle(rank)}`}>{rank}</span>

                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={scorer.team.crest}
                        alt={scorer.team.name}
                        className="w-5 h-5 object-contain shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-zinc-100 truncate">
                          {scorer.player.name}
                        </p>
                        <p className="text-[10px] text-zinc-500 truncate">
                          {scorer.team.shortName} 
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-zinc-500 tabular-nums text-center">
                      {scorer.playedMatches}
                    </span>

                    <span className={`text-sm tabular-nums text-center font-black ${rank <= 3 ? "text-amber-400" : "text-zinc-100"}`}>
                      {scorer.goals}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Scorers;
