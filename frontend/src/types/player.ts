export interface Player {
  id: number;

  name: string;

  skillLevel: number;

  gender?: "Male" | "Female";

  gamesPlayed: number;

  wins: number;

  losses: number;

  totalWaitRounds: number;

  lastPlayedRound: number;

  active: boolean;
}