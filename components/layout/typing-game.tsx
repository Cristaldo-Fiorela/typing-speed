"use client";

import { useEffect, useRef, useState } from "react";
import { DifficultyLevel, ModeType, ResultsType } from "@/types/types";

import ScoreBar from "../typing-test/score-bar";
import TypingArea from "../typing-test/typing-area";
import {
    usePersonalBest,
    useStadistics,
    useTimer,
    useTypingTest,
} from "@/hooks/use-typing-test";
import { useOneSentence } from "@/hooks/use-fetch-data";
import Results from "./results";
import { COUNTER_TIME, MIN_ACCURACY } from "@/lib/constants";

const TypingGame = () => {
    const wasRunning = useRef<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
    const [mode, setMode] = useState<ModeType>("timed (60s)");
    const [personalBestType, setPersonalBestType] =
        useState<ResultsType>("completed");

    const direction = mode.startsWith("timed") ? "down" : "up";

    const { sentence, getRandomSentence } = useOneSentence(difficulty);
    const { formatted, elapsed, isRunning, resetTimer, startTimer, stopTimer } =
        useTimer(direction, COUNTER_TIME);

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

    const { personalBest, updatePersonalBest } = usePersonalBest();

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

    const handleGoBack = () => {
        setFinished(false);
        reset();
    };

    const handlePersonalBest = (wpm: number, accuracy: number): ResultsType => {
        if (personalBest === 0) {
            updatePersonalBest(wpm);
            return "baseline";
        }
        if (wpm > personalBest && accuracy >= MIN_ACCURACY) {
            updatePersonalBest(wpm);
            return "personalbest";
        }

        return "completed";
    };

    useEffect(() => {
        getRandomSentence();
    }, [difficulty]);

    // modo passage
    useEffect(() => {
        if (isRunning && sentence && typed.length >= sentence.text.length) {
            stopTimer();
        }
    }, [typed]);

    useEffect(() => {
        if (wasRunning.current && !isRunning) {
            setFinished(true);
            setPersonalBestType(handlePersonalBest(WPM, ACCURACY));
        }
        wasRunning.current = isRunning;
    }, [isRunning]);

    if (finished) {
        return (
            <Results
                WPM={WPM}
                accuracy={ACCURACY}
                type={personalBestType}
                totalCorrectChars={typed.length}
                totalErrorsChars={totalErrors}
                handleGoBack={handleGoBack}
            />
        );
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
