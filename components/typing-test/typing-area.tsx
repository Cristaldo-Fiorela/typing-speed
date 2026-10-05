"use client";

import { useOneSentence } from "@/hooks/use-fetch-data";

const TypingArea = () => {
    const { sentence, getRandomSentence } = useOneSentence("easy");
    return (
        <div id="typing-area">
            <p>{sentence?.text ?? "Cargando oración..."}</p>
        </div>
    );
};

export default TypingArea;
