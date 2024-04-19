import { AppStateProvider } from "../contexts/AppStateContext"
import { ContextButton } from "./ContextButton"
import { AppStateContext } from "../contexts/AppStateContext"
import { useContext } from "react"


export const GameSetup = () => {
    const { appState } = useContext(AppStateContext);
    return (
        <div>
                <ContextButton />
                {appState === 'initial state' && (
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:
                            'center', height: '100vh'}}>
                        {/* Render additional components for 'initial state' */}
                        <p>Player name inputs, game mode selection etc. are going to be here</p>
                    </div>
                )}
        </div>
    )
}