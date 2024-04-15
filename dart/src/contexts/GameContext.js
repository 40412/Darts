import React, { useReducer, createContext } from 'react';

// Define the initial state
const initialState = {
  players: [{name: 'Kale', scores: [301], wonLegs: 0}, 
            {name: 'Keijo', scores: [301], wonLegs: 0}],
  gameType: 301,
  setSize: 5,
  currentLeg: 1,
  currentPlayer: {name: 'Kale', scores: [301], wonLegs: 0},
  wonLegs: [],
};

// Define the context
export const GameContext = createContext(initialState);

// Define the reducer
const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return { ...state, players: [...state.players, action.payload] };
      case 'UPDATE_SCORES':
        return { 
          ...state, players: state.players.map((player) => {
            if (player.name === state.currentPlayer.name) {
              return { 
                ...player, 
                scores: [...player.scores, player.scores[player.scores.length - 1] - action.payload] 
              };
            }
            return player;
          }) 
        };
      case 'SET_GAME_TYPE':
        return { ...state, gameType: action.payload };
      case 'SET_SET_SIZE':
        return { ...state, setSize: action.payload };
      case 'SET_CURRENT_LEG':
        return { ...state, currentLeg: action.payload };
      case 'SET_CURRENT_PLAYER':
        return { ...state, currentPlayer: action.payload };
      default:
        return state;
    }
  };

  // Define the context provider
export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <GameContext.Provider value={{ state, dispatch }}>
        {children}
      </GameContext.Provider>
    );
  };