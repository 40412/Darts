import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';
import { GameContext } from '../contexts/GameContext';
import { ContextButton } from './ContextButton';

export const GameSetup = () => {
    const { appState, setAppState } = useContext(AppStateContext);
    const { state: gameState, dispatch } = useContext(GameContext);

    const handlePlayerNameChange = (index, newName) => {
        dispatch({ type: 'UPDATE_PLAYER_NAME', payload: { index, newName } });
    };

    const handleGameTypeChange = (event) => {
        dispatch({ type: 'SET_GAME_TYPE', payload: parseInt(event.target.value) });
    };

    const handleSetSizeChange = (event) => {
        dispatch({ type: 'SET_SET_SIZE', payload: parseInt(event.target.value) });
    };

    const handleContextButtonClick = () => {
        if (appState === 'game') setAppState('summary');
        else if (appState === 'summary') setAppState('initial state');
        else setAppState('game');
    };

    return (
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

            {/* Render the context button */}
            <ContextButton onClick={handleContextButtonClick} />

            {/* Other setup components */}
            {appState === 'initial state' && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    {/* Render additional components for 'initial state' */}
                    <p>Game mode selection etc. are going to be here</p>
                </div>
            )}
        </div>
    );
};
