import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { AppStateContext } from '../contexts/AppStateContext';

const ScoreTable = () => {

  const { setAppState } = useContext(AppStateContext);
  const { state, dispatch } = useContext(GameContext);

  const player1 = state.players[0];
  const player2 = state.players[1];

  const legOver = (state, dispatch) => {
    const winner = state.currentPlayer;
    const p1Scores = state.players[0].scores;
    const p2Scores = state.players[1].scores;
  
    dispatch({ type: 'SET_WON_LEGS', payload: winner.name });
    dispatch({
      type: 'SET_LEGS', payload: {
        Leg: state.currentLeg,
        winner: winner.name,
        scores: { player1: p1Scores, player2: p2Scores }
      }
    });
    window.alert(`Leg won by ${winner.name}`);
  
    if (winner.wonLegs < (state.setSize / 2)) {
      dispatch({ type: 'RESET_SCORES', payload: state.gameType });
      dispatch({ type: 'SET_CURRENT_LEG', payload: state.currentLeg + 1 })
    } else {
      setAppState('summary');
    }
  }

  const addPoints = () => {
    let points = document.getElementById('points').value;
    const nextPoints = state.currentPlayer.scores[state.currentPlayer.scores.length - 1] - points;

    if (nextPoints < 2 && nextPoints !== 0) {
      points = 0;
    }

    dispatch({ type: 'UPDATE_SCORES', payload: points });

    if (nextPoints === 0) {
      legOver(state, dispatch);
    }

    dispatch({ type: 'SET_CURRENT_PLAYER', payload: state.currentPlayer.name === player1.name ? player2 : player1 });
    document.getElementById('points').value = '';
    console.log(state);
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
        <label htmlFor='points'>Enter points for player: {state.currentPlayer.name}</label>
        <div style={{ padding: 20 }}>
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