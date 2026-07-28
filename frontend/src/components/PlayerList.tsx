import type { Player } from "../types/player";

interface PlayerListProps {
  players: Player[];
  removePlayer: (id: number) => void;
}

export default function PlayerList({players, removePlayer,}: PlayerListProps) {
  return (
    <>
      <h2>Players ({players.length})</h2>

      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <strong>👤 {player.name}</strong>
            <p>⭐ Skill: {player.skillLevel}</p>
            <p>🏆 Wins: {player.wins}</p>
            <p>❌ Losses: {player.losses}</p>
            <p>{player.active ? "🟢 Active" : "🔴 Inactive"}</p>

            <button onClick={() => removePlayer(player.id)}>
            🗑️ Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}