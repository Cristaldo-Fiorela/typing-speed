import SquareButton from "../ui/square-button";

const ScoreBar = () => {
    return (
        <div className="flex justify-between items-center border-b border-neutral-800 text-neutral-400">
            <div className="grid grid-cols-4 divide-x divide-neutral-800 p-3 text-center">
                <h2 className="col-span-1">
                    WPM: <span className="text-neutral-50 font-bold">0</span>
                </h2>
                <h2 className="col-span-2">
                    Accuracy:{" "}
                    <span className="text-neutral-50 font-bold">100%</span>
                </h2>
                <h2 className="col-span-1 text-right">
                    Time:{" "}
                    <span className="text-neutral-50 font-bold">0:60</span>
                </h2>
            </div>
            <div className="grid grid-cols-2 divide-x divide-neutral-800 p-3 text-center">
                <div className="col-span-1 flex gap-3">
                    <h2>Difficulty:</h2>
                    <SquareButton>Easy</SquareButton>
                    <SquareButton>Medium</SquareButton>
                    <SquareButton>Hard</SquareButton>
                </div>
                <div className="col-span-1 flex gap-3">
                    <h2>Mode:</h2>
                    <SquareButton>Timed (60s)</SquareButton>
                    <SquareButton>Passage</SquareButton>
                </div>
            </div>
        </div>
    );
};

export default ScoreBar;
