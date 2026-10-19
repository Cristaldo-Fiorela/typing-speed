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

const COUNTER_TIME: number = 6;

const TypingGame = () => {
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");

    const { counter, FORMATED_COUNTER, isRunning, start, reset } =
        useCountdown(COUNTER_TIME);
    const { sentence, getRandomSentence } = useOneSentence(difficulty);
    const { typed, totalCharTyped, totalErrors } = useTypingTest(sentence);
    const { WPM, ACCURACY } = useStadistics(
        typed,
        totalCharTyped,
        totalErrors,
        COUNTER_TIME,
    );

    const handleStart = () => {
        getRandomSentence();
        start();
    };

    useEffect(() => {
        getRandomSentence();
    }, [difficulty]);

    useEffect(() => {
        if (isRunning) {
            console.log("WPM", WPM);
            console.log("accuracy", ACCURACY);
        }
    }, [typed]);

    return (
        <>
            <ScoreBar
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                mode={mode}
                setMode={setMode}
                formatedCounter={FORMATED_COUNTER}
            />
            <TypingArea
                sentence={sentence}
                isRunning={isRunning}
                handleStart={handleStart}
            />
        </>
    );
};

export default TypingGame;
