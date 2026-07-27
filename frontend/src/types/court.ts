export interface Court {
  id: number;

  name: string;

  status: "Available" | "Playing";

  currentMatchId?: number;
}