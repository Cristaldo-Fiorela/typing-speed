"use client";

import { useEffect, useState } from "react";
import { DifficultyLevel, ModeType } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";
import {
    useCountdown,
    useStadistics,
    useTypingTest,
} from "@/hooks/use-typing-test";
import { useOneSentence } from "@/hooks/use-fetch-data";

const COUNTER_TIME: number = 20;

const TypingGame = () => {
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");

    const { counter, FORMATED_COUNTER, isRunning, start, resetCounter } =
        useCountdown(COUNTER_TIME);
    const { sentence, getRandomSentence } = useOneSentence(difficulty);
    const { typed, totalErrors, reset, totalTypedWithErrors } = useTypingTest(
        sentence,
        isRunning,
    );
    const { WPM, ACCURACY } = useStadistics(
        typed,
        totalTypedWithErrors,
        totalErrors,
        COUNTER_TIME,
        sentence?.text ?? "",
    );

    const handleStart = () => {
        reset();
        getRandomSentence();
        start();
    };

    const handleDifficultyChange = (level: DifficultyLevel) => {
        if (!isRunning) {
            setDifficulty(level);
        }
    };

    const handleModeChange = (mode: ModeType) => {
        if (!isRunning) {
            setMode(mode);
        }
    };
    useEffect(() => {
        getRandomSentence();
    }, [difficulty]);

    useEffect(() => {
        if (isRunning) {
            console.log("WPM", WPM);
            console.log("accuracy", ACCURACY);
        }

        console.log(typed);
    }, [typed]);

    return (
        <>
            <ScoreBar
                difficulty={difficulty}
                mode={mode}
                handleModeChange={handleModeChange}
                formatedCounter={FORMATED_COUNTER}
                handleDifficultyChange={handleDifficultyChange}
                WPM={WPM}
                accuracy={ACCURACY}
            />
            <TypingArea
                sentence={sentence}
                isRunning={isRunning}
                handleStart={handleStart}
                typed={typed}
            />
        </>
    );
};

export default TypingGame;
