import './App.css';
import { ScoreTable } from './Modules/points';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to Darts!
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 
                  'center', height: '100vh' }}>
        <ScoreTable />
      </div>
    </div>
  );
}

export default App;
