export interface Match {
  id: number;

  courtId: number;

  round: number;

  startTime?: Date;

  endTime?: Date;

  status: "Waiting" | "Playing" | "Finished";
}