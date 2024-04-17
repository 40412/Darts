import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import { AppStateContext } from '../contexts/AppStateContext';

const ScoreTable = () => {

  const [buttonValue, setButtonValue] = useState('Start next leg');

  const { setAppState } = useContext(AppStateContext);
  const { state, dispatch } = useContext(GameContext);

  const [legEnd, setLegEnd] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(state.firstPlayer);

  const player1 = state.players[0];
  const player2 = state.players[1];

  const [p1Scores, setP1Scores] = useState([state.gameType]);
  const [p2Scores, setP2Scores] = useState([state.gameType]);

  // Checks the current player and sets the score to the last score of the player
  let score = currentPlayer.name === player1.name ? p1Scores[p1Scores.length - 1] : p2Scores[p2Scores.length - 1];

  const legOver = () => {
    
    dispatch({ type: 'SET_WON_LEGS', payload: currentPlayer.name });
    dispatch({
      type: 'SET_LEGS', payload: {
        Leg: state.currentLeg,
        winner: currentPlayer.name,
        scores: { player1: p1Scores, player2: p2Scores }
      }
    });
    // Check if the game is won by one of the players and change the button value
    if (currentPlayer.wonLegs + 1 > (state.setSize / 2)) {
      setButtonValue('To Summary');
    }
    setLegEnd(true);
    window.alert(`Leg won by ${currentPlayer.name}`);
  }

  const startNewLeg = () => {
    let newWonLegs = currentPlayer.wonLegs + 1;
    score = state.gameType;
    setP1Scores([state.gameType]);
    setP2Scores([state.gameType]);

    if (newWonLegs < (state.setSize / 2)) {
      dispatch({ type: 'SET_CURRENT_LEG', payload: state.currentLeg + 1 })
    } else {
      setAppState('summary');
    }
    setLegEnd(false);
    setCurrentPlayer(currentPlayer.name === player1.name ? player2 : player1);
  }

  const addPoints = () => {

    let points = document.getElementById('points').value;
    score = currentPlayer.name === player1.name ? p1Scores[p1Scores.length - 1] : p2Scores[p2Scores.length - 1];
    const nextPoints = score - points;

    if (nextPoints < 2 && nextPoints !== 0) {
      points = 0;
    }

    if (currentPlayer.name === player1.name) {
      p1Scores.push(nextPoints);
    } else {
      p2Scores.push(nextPoints);
    }

    if (nextPoints === 0) {
      legOver();
    } else {
      setCurrentPlayer(currentPlayer.name === player1.name ? player2 : player1);
    }
    document.getElementById('points').value = '';
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
        <label htmlFor='points'>Enter points for player: {currentPlayer.name}</label>
        <div style={{ padding: 20 }}>
          <input type="number" id='points' placeholder="Enter points" />
          {legEnd || <button onClick={() => addPoints()}>Add Points</button>}
          {legEnd && <button id='newLeg' onClick={() => startNewLeg()}>{ buttonValue }</button>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <div style={{ padding: 20 }}>
            <h2>{state.players[0].name}</h2>
            <ul>
              {p1Scores.map((points, index) => (
                <p key={index}>{points}</p>
              ))}
            </ul>
          </div>
          <div style={{ padding: 20 }}>
            <h2>{player2.name}</h2>
            {p2Scores.map((points, index) => (
              <p key={index}>{points}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { ScoreTable };