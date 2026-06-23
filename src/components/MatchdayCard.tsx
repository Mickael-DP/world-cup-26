import { Card } from "@heroui/react";
import type { Match } from "../types/matchs";

interface MatchdayCardProps {
matchday: number;
  matches: Match[];
}

const MatchdayCard = ({matches}: MatchdayCardProps) => {
  return (
  <Card className="bg-zinc-900/40">
    <div className="flex flex-col space-y-4 p-4">
      {matches.map((match) => (
        <div key={match.id} className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
              className="w-8 h-8"
            />
            <span>{match.homeTeam.name}</span>
          </div>
          <span className="font-bold text-lg">
            {match.score.fullTime.home} - {match.score.fullTime.away}
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
      ))}
    </div>
  </Card>  
  );
};

export default MatchdayCard;