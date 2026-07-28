import { useState } from "react";
import PlayerForm from "../components/PlayerForm";
import PlayerList from "../components/PlayerList";
import type { Player } from "../types/player";

export default function HomePage() {
  /*
  const [players, setPlayers] = useState<string[]>([
    "Allen",
    "Mark",
    "Patrick",
    "Ryan",
  ]);
  */
  const [players, setPlayers] = useState<Player[]>([
  {
    id: 1,
    name: "Allen",
    skillLevel: 3.5,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalWaitRounds: 0,
    lastPlayedRound: 0,
    active: true,
  },
  {
    id: 2,
    name: "Mark",
    skillLevel: 4.0,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalWaitRounds: 0,
    lastPlayedRound: 0,
    active: true,
  },
  {
    id: 3,
    name: "Patrick",
    skillLevel: 2.5,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalWaitRounds: 0,
    lastPlayedRound: 0,
    active: true,
  },
  {
    id: 4,
    name: "Ryan",
    skillLevel: 3.0,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalWaitRounds: 0,
    lastPlayedRound: 0,
    active: true,
  },
]);

  const [playerName, setPlayerName] = useState("");
  const [skillLevel, setSkillLevel] = useState(3.0);

  const addPlayer = () => {
  if (!playerName.trim()) return;

  const newPlayer: Player = {
    id: players.length + 1,
    name: playerName.trim(),
    skillLevel,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalWaitRounds: 0,
    lastPlayedRound: 0,
    active: true,
  };

  setPlayers([...players, newPlayer]);

  setPlayerName("");
  setSkillLevel(3.0);
  };

  const removePlayer = (id: number) => {
  setPlayers(players.filter((player) => player.id !== id));
  };
  

  return (
    <div style={{ padding: 30 }}>
      <h1>🏓 FairPlay PB</h1>

      <PlayerForm
        playerName={playerName}
        skillLevel={skillLevel}
        setPlayerName={setPlayerName}
        setSkillLevel={setSkillLevel}
        addPlayer={addPlayer}
      />

      <hr />

      <PlayerList
        players={players}
        removePlayer={removePlayer}
      />
    </div>
  );
}