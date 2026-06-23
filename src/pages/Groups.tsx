import GroupTable from "../components/GroupTable";
import { useStandings } from "../hooks/useStandings";


function App() {
  const { standings, loading, error } = useStandings();

  return (
  
      <div className="bg-zinc-950 min-h-screen ">
        {loading && <p>Loading standings...</p>}
        {error && <p>Error: {error}</p>}

        {standings && (
          <div className="grid grid-cols-3 gap-6 p-6">
            {standings.standings.map((standing) => (
              <div key={standing.group}>
                <h2 className="text-center pb-2">{standing.group}</h2>
                <GroupTable table={standing.table} />
              </div>
            ))}
          </div>
        )}
      </div>
    
  );
}

export default App;
