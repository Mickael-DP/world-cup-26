export interface ScorerPlayer {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  nationality: string;
}

export interface ScorerTeam {
  id: number,
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Scorer {
    player: ScorerPlayer,
    team: ScorerTeam,
    playedMatches: number,
    goals: number,
}

export interface ScorersResponse {
    scorers: Scorer[];
}