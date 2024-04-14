import './App.css';
import { ScoreTable } from './components/points';
import { AppStateContext } from './contexts/AppStateContext';
import { React, useState } from 'react';

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
    <AppStateContext.Provider value={{appState}}>
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
      <ScoreTable />
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
