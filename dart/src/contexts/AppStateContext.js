import { createContext } from 'react';

export const AppStateContext = createContext('intial state');
export const GameStateContext = createContext({ 
    "mode": 301, 
    "players": [{ name: "Player 1", scores: [301] },
                { name: "Player 2", scores: [301] }] });
