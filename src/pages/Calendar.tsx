import { Card } from "@heroui/react";
import { useMatches } from "../hooks/useMatches";
import type { Match } from "../types/matchs";

const Calendar = () => {
  const { matches, loading, error } = useMatches();

  const groupMatches = matches?.matches.reduce((acc, match) => {
    const { group } = match;
    const { matchday } = match;
    if (!group) return acc;
    if (!acc[group]) {
      acc[group] = {};
    }
    if (!acc[group][matchday]) {
      acc[group][matchday] = [];
    }
    acc[group][matchday].push(match);
    return acc;
  }, {} as Record<string, Record<number, Match[]>>);

  return (
    <div className="">
      {loading && <p>Loading standings...</p>}
      {error && <p>Error: {error}</p>}

      {matches && (
        <div className="">
          {Object.entries(groupMatches!).map(([group, matches]) => (
            <div key={group}>
              <h2 className="text-center pb-2">{group}</h2>
              <div>
                {Object.entries(matches).map(([matchday, matches]) => (
                  <div key={matchday} className="mb-4">
                    <h3 className="text-center pb-2">Matchday {matchday}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {matches.map((match) => (
                        <Card key={match.id} className="bg-zinc-900/40">
                          <div className="flex justify-between items-center p-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={match.homeTeam.crest}
                                alt={match.homeTeam.name}
                                className="w-8 h-8"
                              />
                              <span>{match.homeTeam.name}</span>
                            </div>
                            <span className="font-bold text-lg">
                              {match.score.fullTime.home} -{" "}
                              {match.score.fullTime.away}
                            </span>
                            <div className="flex items-center space-x-4">
                              <span>{match.awayTeam.name}</span>
                              <img
                                src={match.awayTeam.crest}
                                alt={match.awayTeam.name}
                                className="w-8 h-8"
                              />
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
