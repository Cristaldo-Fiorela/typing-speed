import { SquareButtonProps } from "@/types/component-types";

const SquareButton = ({
    children,
    fill,
    className,
    active,
    ...props
}: SquareButtonProps) => {
    return (
        <button
            className={`border rounded py-1 px-2 transition-colors cursor-pointer text-sm 
                ${
                    fill
                        ? "text-neutral-50 border-blue-600 bg-blue-600 hover:bg-blue-400"
                        : active
                          ? "text-blue-400 border-blue-600"
                          : "text-neutral-50 hover:border-blue-600 hover:text-blue-400"
                } 
                ${className ?? ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default SquareButton;
