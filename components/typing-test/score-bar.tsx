import { DIFFICULTY_LEVELS, MODE_TYPE } from "@/types/types";
import { ScoreBarProps } from "@/types/component-types";

import SquareButton from "../ui/square-button";

// TODO hola

const ScoreBar = ({
    difficulty,
    setDifficulty,
    mode,
    setMode,
    counter,
}: ScoreBarProps) => {
    return (
        <div className="flex justify-between items-center border-b border-neutral-800 text-neutral-400 pb-3">
            <div className="divide-x divide-neutral-800 text-center flex">
                <h2 className="px-3">
                    WPM: <span className="text-neutral-50 font-bold">0</span>
                </h2>
                <h2 className="px-3">
                    Accuracy:{" "}
                    <span className="text-neutral-50 font-bold">100%</span>
                </h2>
                <h2 className="px-3">
                    Time:{" "}
                    <span className="text-neutral-50 font-bold">
                        0:{counter}
                    </span>
                </h2>
            </div>
            <div className="divide-x divide-neutral-800 text-center flex">
                <div className="flex gap-3 px-3">
                    <h2>Difficulty:</h2>
                    {DIFFICULTY_LEVELS.map((level) => (
                        <SquareButton
                            key={level}
                            id={level}
                            value={level}
                            className={"capitalize"}
                            active={level === difficulty}
                            onClick={() => setDifficulty(level)}
                        >
                            {level}
                        </SquareButton>
                    ))}
                </div>
                <div className="flex gap-3 px-3">
                    <h2>Mode:</h2>
                    {MODE_TYPE.map((m) => (
                        <SquareButton
                            key={m}
                            id={m}
                            value={m}
                            className="capitalize"
                            active={m === mode}
                            onClick={() => setMode(m)}
                        >
                            {m}
                        </SquareButton>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScoreBar;
