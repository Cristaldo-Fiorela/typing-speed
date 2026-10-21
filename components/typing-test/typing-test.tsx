import { CHAR_STATUS_STYLES } from "@/lib/constants";
import { getCharStatus } from "@/lib/utils";
import { TypingTestProps } from "@/types/component-types";

const TypingTest = ({ sentence, typed }: TypingTestProps) => {
    return (
        <div id="typing-area" className="flex-1 my-3">
            <p className="text-2xl m-3 select-none" key={sentence?.id}>
                {[...sentence?.text].map((char, idx) => (
                    <span
                        key={idx}
                        className={
                            CHAR_STATUS_STYLES[
                                getCharStatus(idx, typed, sentence.text)
                            ]
                        }
                    >
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default TypingTest;
