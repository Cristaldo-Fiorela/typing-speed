import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/logo-small.svg"
                    alt="Typing Speed Test"
                    width={34}
                    height={34}
                />
                <div className="flex flex-col">
                    <h1 className="font-bold">Typing Speed Test</h1>
                    <small className="text-neutral-400">
                        Type as fast as you can in 60 seconds
                    </small>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Image
                    src="/icons/icon-personal-best.svg"
                    alt="your personal best score"
                    width={16}
                    height={16}
                />
                <h2 className="text-neutral-400">
                    Personal best:{" "}
                    <span className="text-neutral-50">0 WPM</span>
                </h2>
            </div>
        </header>
    );
}
