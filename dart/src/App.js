import './App.css';
import { ScoreTable } from './components/ScoreTable.js';
import { AppStateProvider, AppStateContext } from './contexts/AppStateContext.js';
import { React, useContext, useState } from 'react';
import { GameProvider } from './contexts/GameContext.js';
import { GameInfo } from './components/GameInfo.js';
import { ContextButton } from './components/ContextButton.js';
import { GameSetup } from './components/GameSetup.js';
import { Game } from './components/Game.js';
import { Summary } from './components/Summary.js';

function App() {

  return (
    <div className="App">
      <h1>
        Welcome to Darts!
      </h1>
      <AppStateProvider>
      <GameSetup />
      <Game />
      <Summary />
      </AppStateProvider>
    </div >
  );
}

export default App;
