import { GameContext } from "../contexts/GameContext";
import { useContext } from "react";

const GameInfo = () => {
    const { state } = useContext(GameContext);
    return (
        <div style={{ padding: 20 }}>
            <p>Game type: {state.gameType} </p>
            <p>Legs in this set: {state.setSize}</p>
            <p>Current Leg: {state.currentLeg}</p>
            <p>Won legs: {state.players[0].name}: {state.players[0].wonLegs} {state.players[1].name}: {state.players[1].wonLegs}</p>
        </div>
        
    );
}

export { GameInfo };