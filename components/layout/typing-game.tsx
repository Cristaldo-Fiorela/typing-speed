"use client";

import { useState } from "react";
import { DifficultyLevel, ModeType } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";

const TypingGame = () => {
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");

    return (
        <>
            <ScoreBar
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                mode={mode}
                setMode={setMode}
            />
            <TypingArea difficulty={difficulty} />
        </>
    );
};

export default TypingGame;
