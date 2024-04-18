import React, { useReducer, createContext } from 'react';

// Define the initial state
const initialState = {
  players: [{name: 'Kale', wonLegs: 0}, 
            {name: 'Keijo', wonLegs: 0}],
  gameType: 301,
  setSize: 5,
  currentLeg: 1,
  firstPlayer: {name: 'Kale', scores: [301], wonLegs: 0},
  Legs: [],
  winner: ''
};

// Define the context
export const GameContext = createContext(initialState);

// Define the reducer
const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return { ...state, players: [...state.players, action.payload] };
      case 'SET_WON_LEGS':
        return { 
          ...state, players: state.players.map((player) => {
            if (player.name === action.payload) {
              return { ...player, wonLegs: player.wonLegs + 1 };
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
      case 'SET_FIRST_PLAYER':
        return { ...state, firstPlayer: action.payload };
      case 'SET_LEGS':
        return { ...state, Legs: [...state.Legs, action.payload] };
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