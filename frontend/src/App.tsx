function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>🏓 FairPlay PB</h1>

      <button>Add Player</button>

      <hr />

      <h2>Players</h2>

      <ul>
        <li>Allen</li>
        <li>Mark</li>
        <li>John</li>
        <li>Patrick</li>
        <li>Ryan</li>
      </ul>

      <button>Generate Rotation</button>

      <hr />

      <h2>Courts</h2>

      <div>🏓 Court 1</div>
      <div>🏓 Court 2</div>
      <div>🏓 Court 3</div>

      <hr />

      <h2>Waiting Queue</h2>

      <p>No players waiting.</p>
    </div>
  );
}

export default App;