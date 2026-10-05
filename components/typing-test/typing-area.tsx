"use client";

import { useOneSentence } from "@/hooks/use-fetch-data";

const TypingArea = () => {
    useOneSentence("easy");
    return <div>TypingArea</div>;
};

export default TypingArea;
