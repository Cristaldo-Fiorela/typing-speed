import ScoreBar from "@/components/typing-test/score-bar";
import TypingArea from "@/components/typing-test/typing-area";

export default function Home() {
    return (
        <main className="flex flex-col flex-1">
            <ScoreBar />
            <TypingArea />
        </main>
    );
}
