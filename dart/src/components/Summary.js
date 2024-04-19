import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';

export const Summary = () => {
    const { appState } = useContext(AppStateContext);
    return (
        <>
            {appState === 'summary' && (
                <div style={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:
                        'center', height: '100vh'
                }}>
                    {/* Render additional components for 'summary' */}
                    <h2>Summary of the game here</h2>
                    <p>Winner, legs, something here</p>
                </div>
            )}
        </>
    )
}