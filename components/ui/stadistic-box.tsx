const StadisticBox = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    return (
        <article className="border rounded p-5 border-neutral-800">
            <h3 className="text-neutral-400">{title}</h3>
            {children}
        </article>
    );
};

export default StadisticBox;
