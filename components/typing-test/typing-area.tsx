"use client";

import { useOneSentence } from "@/hooks/use-fetch-data";

const TypingArea = () => {
    useOneSentence("easy");
    return <div id="typing-area">TypingArea</div>;
};

export default TypingArea;
