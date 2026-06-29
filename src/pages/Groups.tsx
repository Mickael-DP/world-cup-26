import GroupTable from "../components/GroupTable";
import { useStandings } from "../hooks/useStandings";

function Groups() {
  const { standings, loading, error } = useStandings();

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-zinc-950 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-8">Groupes</h1>

        {loading && <p className="text-zinc-500">Chargement...</p>}
        {error && <p className="text-red-400">Erreur : {error}</p>}

        {standings && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {standings.standings.map((standing) => (
              <div key={standing.group} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 shrink-0">
                    {standing.group.replace("GROUP ", "Groupe ")}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800/60" />
                </div>
                <GroupTable table={standing.table} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Groups;
