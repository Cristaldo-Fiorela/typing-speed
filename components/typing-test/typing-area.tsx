"use client";

import { useState } from "react";
import { useOneSentence } from "@/hooks/use-fetch-data";
import SquareButton from "../ui/square-button";

const PLACEHOLDER = "Que sera sera. What will be, will be.".repeat(18);

const TypingArea = () => {
    const [itStart, setItStart] = useState(false);
    const { sentence, getRandomSentence } = useOneSentence("easy");

    const handleStart = () => {
        setItStart(true);
        getRandomSentence();
    };

    if (!itStart) {
        return (
            <div id="typing-area" className="relative flex-1 my-3">
                <p className="select-none" aria-hidden="true">
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
    } else {
        return <p>{sentence?.text}</p>;
    }
};

export default TypingArea;
