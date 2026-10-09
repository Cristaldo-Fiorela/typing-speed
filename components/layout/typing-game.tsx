"use client";

import { useState } from "react";
import { DifficultyLevel } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";

const TypingGame = () => {
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");

    console.log(difficulty);

    return (
        <>
            <ScoreBar setDifficulty={setDifficulty} />
            <TypingArea difficulty={difficulty} />
        </>
    );
};

export default TypingGame;
