import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';

export const Summary = () => {
    const { appState, winner, legsPlayed } = useContext(AppStateContext);

    return (
        <>
            {appState === 'summary' && (
                <div style={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:
                        'center', height: '100vh'
                }}>

                    {/* Render additional components for 'summary' */}
                    <h2>Congratulations!</h2>
                    <p>Winner: {winner}</p>
                    <p>Legs played: {legsPlayed}</p>
                </div>
            )}
        </>
    )
}
