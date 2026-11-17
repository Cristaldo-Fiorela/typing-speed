import SquareButton from "@/components/ui/square-button";
import StadisticBox from "@/components/ui/stadistic-box";
import { RESULTS_INFO } from "@/lib/constants";
import { ResultsProps } from "@/types/component-types";
import Image from "next/image";

const Results = ({
    WPM,
    accuracy,
    type,
    totalCorrectChars,
    totalErrorsChars,
    handleGoBack,
}: ResultsProps) => {
    const isPersonalBest = type === "personalbest";

    return (
        <main className="relative flex flex-1 flex-col">
            <div className="flex flex-col flex-1 items-center justify-center gap-8">
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
                            width={60}
                            height={60}
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
                        <p className="font-bold">{WPM}</p>
                    </StadisticBox>
                    <StadisticBox title="Accuracy">
                        <p
                            className={
                                accuracy === 100
                                    ? "text-green-500 font-bold"
                                    : "text-red-500 font-bold"
                            }
                        >
                            {!accuracy ? "0" : String(accuracy.toFixed(2))}%
                        </p>
                    </StadisticBox>
                    <StadisticBox title="Characters">
                        <p className="text-green-500 font-bold">
                            {totalCorrectChars}{" "}
                            <span className="text-neutral-400">/</span>
                            <span className="text-red-500">
                                {totalErrorsChars}
                            </span>
                        </p>
                    </StadisticBox>
                </div>

                <SquareButton
                    fill
                    className="bg-neutral-200 border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50 capitalize px-4 py-3 text-lg rounded-xl"
                    onClick={handleGoBack}
                >
                    <span className="flex items-center gap-2">
                        {" "}
                        {type === "completed" ? "Go again" : "Beat this score"}
                        <Image
                            src="/icons/icon-restart.svg"
                            alt="Refresh"
                            width={15}
                            height={15}
                            className="invert"
                        />
                    </span>
                </SquareButton>
            </div>
            {isPersonalBest && (
                <div
                    aria-hidden
                    className="pointer-events-none relative h-40 shrink-0 w-screen ml-[calc(50%-50vw)]"
                >
                    <Image
                        src="/icons/pattern-confetti.svg"
                        alt=""
                        fill
                        className="object-cover object-bottom"
                    />
                </div>
            )}

            {!isPersonalBest && (
                <>
                    <Image
                        src="/icons/pattern-star-2.svg"
                        alt=""
                        aria-hidden
                        width={32}
                        height={32}
                        className="pointer-events-none absolute left-0 top-1/4"
                    />
                    <Image
                        src="/icons/pattern-star-1.svg"
                        alt=""
                        aria-hidden
                        width={64}
                        height={64}
                        className="pointer-events-none absolute right-0 top-1/2"
                    />
                </>
            )}
        </main>
    );
};

export default Results;
