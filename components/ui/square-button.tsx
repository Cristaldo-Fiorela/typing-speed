import { SquareButtonProps } from "@/types/component-types";

const SquareButton = ({
    children,
    fill,
    className,
    ...props
}: SquareButtonProps) => {
    return (
        <button
            className={`text-neutral-50 border rounded py-1 px-2 transition-colors cursor-pointer text-sm ${fill ? "border-blue-600 bg-blue-600 hover:text-neutral-50 hover:bg-blue-400" : "hover:border-blue-600 hover:text-blue-400"} ${className ?? ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default SquareButton;
