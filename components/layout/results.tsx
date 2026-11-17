import SquareButton from "@/components/ui/square-button";
import StadisticBox from "@/components/ui/stadistic-box";
import { RESULTS_INFO } from "@/lib/constants";
import { ResultsProps } from "@/types/component-types";
import Image from "next/image";

const Results = ({
    WPM,
    accuracy,
    type,
    counter,
    setFinished,
}: ResultsProps) => {
    return (
        <main className="flex flex-col flex-1 items-center justify-center gap-8">
            <section className="flex flex-col items-center gap-8">
                <span
                    className={
                        type !== "personalbest"
                            ? "flex items-center justify-center w-11 h-11 rounded-full bg-green-500 shadow-[0_0_0_10px_rgba(74,222,128,0.18),0_0_0_20px_rgba(74,222,128,0.08)]"
                            : ""
                    }
                >
                    <Image
                        src={RESULTS_INFO[type]?.icon}
                        alt="Refresh"
                        width={40}
                        height={40}
                    />
                </span>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">
                        {RESULTS_INFO[type]?.title}
                    </h2>
                    <p className="text-neutral-400">
                        {RESULTS_INFO[type]?.message}
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                <StadisticBox title="WPM">
                    <p>{WPM}</p>
                </StadisticBox>
                <StadisticBox title="Accuracy">
                    <p
                        className={
                            accuracy === 100 ? "text-green-500" : "text-red-500"
                        }
                    >
                        {!accuracy ? "0" : String(accuracy.toFixed(2))}%
                    </p>
                </StadisticBox>
                <StadisticBox title="Characters">
                    <p className="text-green-500">
                        {counter}{" "}
                        <span className="text-neutral-400 font-bold">/</span>
                        <span className="text-red-500">5</span>
                    </p>
                </StadisticBox>
            </div>

            <SquareButton
                fill
                className="bg-neutral-200 border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50"
                onClick={() => setFinished(false)}
            >
                <span className="flex items-center gap-2">
                    {" "}
                    Go again
                    <Image
                        src="/icons/icon-restart.svg"
                        alt="Refresh"
                        width={15}
                        height={15}
                        className="invert"
                    />
                </span>
            </SquareButton>
        </main>
    );
};

export default Results;
