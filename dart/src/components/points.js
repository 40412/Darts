import { React, useState, useContext } from 'react';
import { TurnContext } from '../contexts/AppStateContext';

const testDataPlayers = [{ name: "Player 1", scores: [301] },
{ name: "Player 2", scores: [301] }];
const testDataGame = { "mode": 301, "players": testDataPlayers }

const ScoreTable = () => {
  const [p1Points, setP1Points] = useState([301, 100]);
  const [p2Points, setP2Points] = useState([301, 281]);
  const player1 = testDataPlayers[0];
  const player2 = testDataPlayers[1];
  const [currentPlayer, setCurrentPlayer] = useState(player1);

  const addPoints = (score, player) => {

    if (player === player1.name) {
      setP1Points(prevPoints => [...prevPoints, prevPoints[prevPoints.length - 1] - score]);
    } else {
      setP2Points(prevPoints => [...prevPoints, prevPoints[prevPoints.length - 1] - score]);
    }
    setCurrentPlayer(player === player1.name ? player2 : player1)
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
      <label htmlFor='points'>Enter points for player: {currentPlayer.name}</label>
        <div style={{padding: 20}}>
          <input type="number" id='points' placeholder="Enter points" />
          <button onClick={() => {
            const points = document.getElementById('points').value;
            addPoints(points, currentPlayer.name)}}>
            Add Points</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <div style={{ padding: 20 }}>
            <h2>Player 1</h2>
            <ul>
              {p1Points.map((points, index) => (
                <p key={index}>{points}</p>
              ))}
            </ul>
          </div>
          <div style={{ padding: 20 }}>
            <h2>Player 2</h2>
            {p2Points.map((points, index) => (
              <p key={index}>{points}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { ScoreTable };