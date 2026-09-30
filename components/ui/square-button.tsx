type SquareButtonProps = {
    children: React.ReactNode;
};

const SquareButton = ({ children }: SquareButtonProps) => {
    return <button>{children}</button>;
};

export default SquareButton;
