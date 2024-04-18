import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';
import { ScoreTable } from './ScoreTable';
import { GameProvider } from '../contexts/GameContext';
import { GameInfo } from './GameInfo';

export const Game = () => {
    const { appState } = useContext(AppStateContext);
    return (
        <div>
            {appState === 'game' && (
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    
                        <GameInfo />
                        <ScoreTable />
                    

                </div>
            )}
        </div>
    );
}