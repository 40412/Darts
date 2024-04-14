import { React, useState } from 'react';

const testDataPlayers = [{ name: "Player 1", scores: [301] },
{ name: "Player 2", scores: [301] }];
const testDataGame = { "mode": 301, "players": testDataPlayers }

const ScoreTable = () => {
  const [p1Points, setP1Points] = useState([301, 100]);
  const [p2Points, setP2Points] = useState([301, 281]);
  const player1 = testDataPlayers[0];
  const player2 = testDataPlayers[1];

  const addPoints = (score, player) => {

    if (player === player1.name) {
      setP1Points(prevPoints => [...prevPoints, prevPoints[prevPoints.length - 1] - score]);
    } else {
      setP2Points(prevPoints => [...prevPoints, prevPoints[prevPoints.length - 1] - score]);
    }

  }
  return (
    <>

      <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
        <h2>Player 1</h2>
        <ul>
        {p1Points.map((points, index) => (
          <p key={index}>{points}</p>
        ))}
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Player 2</h2>
        {p2Points.map((points, index) => (
          <p key={index}>{points}</p>
        ))}
      </div>
      <button onClick={() => addPoints(20, "Player 1")}> Add Points</button>
    </>
  );
}

export { ScoreTable };