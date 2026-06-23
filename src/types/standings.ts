export interface Team {
  name: string;
  shortName: string;
  crest: string;
}

export interface Table {
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
}

export interface Standing {
  group: string;
  table: Table[];
}

export interface StandingsResponse {
  standings: Standing[];
}