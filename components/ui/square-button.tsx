type SquareButtonProps = {
    children: React.ReactNode;
};

const SquareButton = ({ children }: SquareButtonProps) => {
    return (
        <button className="text-neutral-50 border rounded py-1 px-2 hover:border-blue-600 hover:text-blue-400 transition-colors cursor-pointer text-sm">
            {children}
        </button>
    );
};

export default SquareButton;
