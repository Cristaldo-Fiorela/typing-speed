"use client";

import { useState } from "react";
import { useOneSentence } from "@/hooks/use-fetch-data";
import SquareButton from "../ui/square-button";

const PLACEHOLDER = "Que sera sera. What will be, will be.".repeat(8);

const TypingArea = () => {
    const [itStart, setItStart] = useState(false);
    const { sentence, getRandomSentence } = useOneSentence("easy");

    const handleStart = () => {
        setItStart(true);
        getRandomSentence();
    };

    if (!itStart) {
        return (
            <div id="typing-area">
                <p>{PLACEHOLDER}</p>
                <SquareButton onClick={handleStart} fill>
                    Start Typing Test
                </SquareButton>
            </div>
        );
    } else {
        return <p>{sentence?.text}</p>;
    }
};

export default TypingArea;
