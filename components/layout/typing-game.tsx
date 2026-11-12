"use client";

import { useEffect, useRef, useState } from "react";
import { DifficultyLevel, ModeType } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";
import {
    useStadistics,
    useTimer,
    useTypingTest,
} from "@/hooks/use-typing-test";
import { useOneSentence } from "@/hooks/use-fetch-data";
import Results from "./results";

const COUNTER_TIME: number = 20;

const TypingGame = () => {
    const wasRunning = useRef<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");

    const direction = mode.startsWith("timed") ? "down" : "up";

    const { sentence, getRandomSentence } = useOneSentence(difficulty);
    const {
        formatted,
        elapsed,
        isRunning,
        resetTimer,
        seconds,
        startTimer,
        stopTimer,
    } = useTimer(direction, COUNTER_TIME);

    const { typed, totalErrors, reset, totalTypedWithErrors } = useTypingTest(
        sentence,
        isRunning,
    );
    const { WPM, ACCURACY } = useStadistics(
        typed,
        totalTypedWithErrors,
        totalErrors,
        elapsed,
        sentence?.text ?? "",
    );

    const handleStart = () => {
        reset();
        getRandomSentence();
        startTimer();
    };

    const handleDifficultyChange = (level: DifficultyLevel) => {
        if (!isRunning) {
            setDifficulty(level);
        }
    };

    const handleModeChange = (mode: ModeType) => {
        if (!isRunning) {
            setMode(mode);
            resetTimer();
        }
    };

    useEffect(() => {
        getRandomSentence();
    }, [difficulty]);

    // modo passage
    useEffect(() => {
        if (
            direction === "up" &&
            sentence &&
            typed.length >= sentence.text.length
        ) {
            stopTimer();
        }
    }, [typed]);

    useEffect(() => {
        if (wasRunning.current && !isRunning) {
            setFinished(true);
        }
        wasRunning.current = isRunning;
    }, [isRunning]);

    if (finished) {
        return <Results WPM={WPM} accuracy={ACCURACY} counter={formatted} />;
    } else {
        return (
            <>
                <ScoreBar
                    difficulty={difficulty}
                    mode={mode}
                    handleModeChange={handleModeChange}
                    formatedCounter={formatted}
                    handleDifficultyChange={handleDifficultyChange}
                    WPM={WPM}
                    accuracy={ACCURACY}
                    isRunning={isRunning}
                />
                <TypingArea
                    sentence={sentence}
                    isRunning={isRunning}
                    handleStart={handleStart}
                    typed={typed}
                />
            </>
        );
    }
};

export default TypingGame;
