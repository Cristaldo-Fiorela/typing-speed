type SquareButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    fill?: boolean;
};

const SquareButton = ({ children, fill, ...props }: SquareButtonProps) => {
    return (
        <button
            className={`text-neutral-50 border rounded py-1 px-2 transition-colors cursor-pointer text-sm ${fill ? "border-blue-600 hover:text-neutral-50 bg-blue-600" : "hover:border-blue-600 hover:text-blue-400"}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default SquareButton;
