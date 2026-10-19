import { TypingTestProps } from "@/types/component-types";

const TypingTest = ({ sentence }: TypingTestProps) => {
    return (
        <div id="typing-area" className="flex-1 my-3">
            <p className="text-2xl m-3 select-none" key={sentence?.id}>
                {sentence?.text}
            </p>
        </div>
    );
};

export default TypingTest;
