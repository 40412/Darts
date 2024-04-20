import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';
import { GameContext } from '../contexts/GameContext';

export const GameSetup = () => {
    const { appState, setAppState } = useContext(AppStateContext);
    const { state: gameState, dispatch } = useContext(GameContext);

    const handlePlayerNameChange = (index, newName) => {
        dispatch({ type: 'UPDATE_PLAYER_NAME', payload: { index, newName } });
        dispatch({ type: 'SET_FIRST_PLAYER', payload: gameState.players[0] });
    };

    const handleGameTypeChange = (event) => {
        dispatch({ type: 'SET_GAME_TYPE', payload: parseInt(event.target.value) });
    };

    const handleSetSizeChange = (event) => {
        dispatch({ type: 'SET_SET_SIZE', payload: parseInt(event.target.value) });
    };

    const handleContextButtonClick = () => {
        setAppState('game');
    };

    return (
        <>
        { appState === 'initial state' && (
            <div>
                {/* Render player name inputs */}
                {gameState.players.map((player, index) => (
                    <div key={index}>
                        <label>Player {index + 1} Name:</label>
                        <input
                            value={player.name}
                            onChange={(event) => handlePlayerNameChange(index, event.target.value)}
                        />
                    </div>
                ))}

                {/* Render game type selection */}
                <div>
                    <label>Game Type:</label>
                    <select value={gameState.gameType} onChange={handleGameTypeChange}>
                        <option value="301">301</option>
                        <option value="501">501</option>
                    </select>
                </div>

                {/* Render set size selection */}
                <div>
                    <label>Set Size:</label>
                    <select value={gameState.setSize} onChange={handleSetSizeChange}>
                        <option value="5">5</option>
                        <option value="7">7</option>
                    </select>
                </div>

                <button onClick={handleContextButtonClick}>Start Game</button>
            </div>
        )}
        </> 
    );
};
