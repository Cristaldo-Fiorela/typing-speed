import SquareButton from "@/components/ui/square-button";
import StadisticBox from "@/components/ui/stadistic-box";
import Image from "next/image";

const Results = () => {
    return (
        <main className="flex flex-col flex-1 items-center justify-center gap-8">
            <section className="flex flex-col items-center gap-8">
                <span
                    className={
                        true &&
                        "flex items-center justify-center w-11 h-11 rounded-full bg-green-500 shadow-[0_0_0_10px_rgba(74,222,128,0.18),0_0_0_20px_rgba(74,222,128,0.08)]"
                    }
                >
                    <Image
                        src="/icons/icon-completed.svg"
                        alt="Refresh"
                        width={40}
                        height={40}
                    />
                </span>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">TITULO RESULTADO</h2>
                    <p className="text-neutral-400">SUBTITULO RESULTADO</p>
                </div>
            </section>

            <div className="flex gap-4">
                <StadisticBox title="ESTADISTICA">
                    <p>RESULTADO ESTADISTICA</p>
                </StadisticBox>
                <StadisticBox title="ESTADISTICA">
                    <p className={true ? "text-green-500" : "text-red-500"}>
                        RESULTADO ESTADISTICA
                    </p>
                </StadisticBox>
                <StadisticBox title="ESTADISTICA">
                    <p className="text-green-500">
                        RESULTADO{" "}
                        <span className="text-neutral-400 font-bold">/</span>
                        <span className="text-red-500">ESTADISTICA</span>
                    </p>
                </StadisticBox>
            </div>

            <SquareButton
                fill
                className="bg-neutral-200 border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50"
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
