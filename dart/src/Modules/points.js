import React from 'react';

const testDataPlayers = [{name: "Player 1", scores: [10, 20, 30]},
                        {name: "Player 2", scores: [20, 30, 40]}];
const testDataGame = {"mode": 301, "players": testDataPlayers}

const ScoreTable = () => {
    return (
      <table>
        <thead>
          <tr>
            {testDataPlayers.map((player, index) => (
              <th key={index}>{player.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {testDataPlayers[0].scores.map((score, index) => (
            <tr key={index}>
              {testDataPlayers.map((player) => (
                <td key={player.name}>{player.scores[index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export {ScoreTable};