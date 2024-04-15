import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const ScoreTable = () => {

  const { state } = useContext(GameContext);
  const { dispatch } = useContext(GameContext);

  const player1 = state.players[0];
  const player2 = state.players[1];

  const addPoints = () => {
    
    const points = document.getElementById('points').value;
    dispatch({ type: 'UPDATE_SCORES', payload: points });
    dispatch({ type: 'SET_CURRENT_PLAYER', payload: state.currentPlayer.name === player1.name ? player2 : player1});
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
      <label htmlFor='points'>Enter points for player: {state.currentPlayer.name}</label>
        <div style={{padding: 20}}>
          <input type="number" id='points' placeholder="Enter points" />
          <button onClick={() => addPoints()}>
            Add Points</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <div style={{ padding: 20 }}>
            <h2>{state.players[0].name}</h2>
            <ul>
              {state.players[0].scores.map((points, index) => (
                <p key={index}>{points}</p>
              ))}
            </ul>
          </div>
          <div style={{ padding: 20 }}>
            <h2>{state.players[1].name}</h2>
            {state.players[1].scores.map((points, index) => (
              <p key={index}>{points}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { ScoreTable };