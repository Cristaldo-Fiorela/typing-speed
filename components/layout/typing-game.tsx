"use client";

import { useState } from "react";
import { DifficultyLevel, ModeType } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";
import { useCountdown } from "@/hooks/use-typing-test";

const TypingGame = () => {
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");

    const { counter, isRunning, start, reset } = useCountdown(6);

    return (
        <>
            <ScoreBar
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                mode={mode}
                setMode={setMode}
                counter={counter}
            />
            <TypingArea difficulty={difficulty} start={start} />
        </>
    );
};

export default TypingGame;
