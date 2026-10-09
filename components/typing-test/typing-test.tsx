import { useTypingTest } from "@/hooks/use-typing-test";
import { Sentence } from "@/types/types";

type TypingTestProps = {
    sentence: Sentence;
};

const TypingTest = ({ sentence }: TypingTestProps) => {
    const { typed, totalErrors } = useTypingTest(sentence);

    console.log(typed);
    console.log("ERRORS", totalErrors);

    return (
        <div id="typing-area" className="flex-1 my-3">
            <p className="text-2xl m-3 select-none" key={sentence?.id}>
                {sentence?.text}
            </p>
        </div>
    );
};

export default TypingTest;
