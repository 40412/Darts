import './App.css';
import { ScoreTable } from './components/ScoreTable.js';
import { AppStateContext } from './contexts/AppStateContext';
import { React, useState } from 'react';
import { GameProvider } from './contexts/GameContext.js';

function App() {
  
  const [appState, setAppState] = useState('initial state');
  return (
  <div className="App">
    <button onClick={()=>{
      if (appState === 'game') setAppState('summary')
      else if (appState === 'summary') setAppState('initial state')
      else
      setAppState('game')
    }}>
      Click to change context</button>
    
    <h1>
    Welcome to Darts!
    </h1>
    <AppStateContext.Provider value={{appState, setAppState}}>
    {appState === 'initial state' && (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 
          'center', height: '100vh' }}>
      {/* Render additional components for 'initial state' */}
      <p>Player name inputs, game mode selection etc. are going to be here</p>
    </div>
    )}
    {appState === 'game' && (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 
          'center', height: '100vh' }}>
        <GameProvider>
          <ScoreTable />
        </GameProvider>
        
    </div>
    )}
    {appState === 'summary' && (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 
          'center', height: '100vh' }}>
      {/* Render additional components for 'summary' */}
      <h2>Summary of the game here</h2>
      <p>Winner, legs, something here</p>
    </div>
    )}
    </AppStateContext.Provider>
  </div>
  );
}

export default App;
