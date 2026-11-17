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
import SquareButton from "../ui/square-button";
import Image from "next/image";

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
        resetTimer();
    };

    const handleRestart = () => {
        wasRunning.current = false;
        stopTimer();
        reset();
        resetTimer();
        getRandomSentence();
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
                {isRunning && (
                    <div className="flex justify-center items-center border-t border-neutral-800 text-neutral-400 py-6">
                        <SquareButton
                            onClick={handleRestart}
                            fill
                            className="px-4 py-3 text-lg rounded-xl bg-neutral-800 border-neutral-800 flex gap-2 font-bold hover:bg-neutral-600"
                        >
                            Restart text
                            <Image
                                src="/icons/icon-restart.svg"
                                alt="Refresh"
                                width={15}
                                height={15}
                            />
                        </SquareButton>
                    </div>
                )}
            </>
        );
    }
};

export default TypingGame;
