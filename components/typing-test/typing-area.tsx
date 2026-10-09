"use client";

import { useEffect, useState } from "react";
import { useOneSentence } from "@/hooks/use-fetch-data";
import { TypingAreaProps } from "@/types/component-types";

import SquareButton from "../ui/square-button";
import TypingTest from "./typing-test";

const PLACEHOLDER = "Que sera sera. What will be, will be.".repeat(18);

const TypingArea = ({ difficulty }: TypingAreaProps) => {
    const [itStart, setItStart] = useState(false);
    const { sentence, getRandomSentence } = useOneSentence(difficulty);

    const handleStart = () => {
        setItStart(true);
        getRandomSentence();
    };

    useEffect(() => {
        getRandomSentence();
    }, [difficulty]);

    if (!itStart || !sentence) {
        return (
            <div id="typing-area" className="relative flex-1 my-3">
                <p className="select-none text-2xl m-3" aria-hidden="true">
                    {PLACEHOLDER}
                </p>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 backdrop-blur-xs">
                    <SquareButton
                        onClick={handleStart}
                        fill
                        className="px-6 py-3 text-lg"
                    >
                        Start Typing Test
                    </SquareButton>
                    <p>Or click the text and start typing</p>
                </div>
            </div>
        );
    } else return <TypingTest key={sentence?.id} sentence={sentence} />;
};

export default TypingArea;
