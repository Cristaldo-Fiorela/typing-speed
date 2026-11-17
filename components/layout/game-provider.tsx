"use client";

import { createContext, useContext, useState } from "react";

/**
 * create a context to manage the game state and provide a reset function to reset the game when needed.
 * This context can be used in other components to access the reset function and trigger a game reset.
 */
const GameContext = createContext({ resetGame: () => {} });

// shotcut to use the context in other components
const useGameContext = () => useContext(GameContext);

// second context to manage the reset key, which is used for components that not need to re-render when the game is reset, but still need to know when the game is reset.
const ResetKeyContext = createContext(0);

/**
 * GameProvider component that wraps the children components and provides the game state and reset function.
 * @param children everything that is passed as children to the provider
 * @returns wrapper component that provides the game state and reset function to its children
 */
const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [gameKey, setGameKey] = useState(0);

    return (
        // firts channel of context
        <GameContext.Provider
            value={{ resetGame: () => setGameKey((key) => key + 1) }}
        >
            {/* second channel of context */}
            <ResetKeyContext.Provider value={gameKey}>
                {children}
            </ResetKeyContext.Provider>
        </GameContext.Provider>
    );
};

/**
 * Reads the counter key of the second context and put the key in the div that wraps the children. This way, when the key changes, the div and all its children will be re-rendered.
 * @param children everything that is passed as children
 * @returns a div that wraps the children and has a key that changes when the game is reset
 */
function GameBoundary({ children }: { children: React.ReactNode }) {
    const gameKey = useContext(ResetKeyContext);
    return (
        <div key={gameKey} className="flex flex-1 flex-col">
            {children}
        </div>
    );
}

export { useGameContext, GameProvider, GameBoundary };
