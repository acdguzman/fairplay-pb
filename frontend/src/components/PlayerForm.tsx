interface PlayerFormProps {
  playerName: string;
  skillLevel: number;
  setPlayerName: (value: string) => void;
  addPlayer: () => void;
  setSkillLevel: (value: number) => void;
}

export default function PlayerForm({
  playerName,
  skillLevel,
  setPlayerName,
  addPlayer,
  setSkillLevel,
}: PlayerFormProps) {
  return (
    <>
      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Player name"
      />

      <button onClick={addPlayer}>Add Player</button>
      <select
        value={skillLevel}
        onChange={(e) => setSkillLevel(Number(e.target.value))}
        >
        <option value={2.5}>2.5</option>
        <option value={3.0}>3.0</option>
        <option value={3.5}>3.5</option>
        <option value={4.0}>4.0</option>
        <option value={4.5}>4.5</option>
    </select>
    </>
    
  );
}