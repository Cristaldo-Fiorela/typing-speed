import SquareButton from "@/components/ui/square-button";

const Results = () => {
    return (
        <main className="flex flex-col flex-1">
            <section>
                <span>ICONO</span>
                <h2>TITULO RESULTADO</h2>
                <p>SUBTITULO RESULTADO</p>
            </section>

            <SquareButton>Go again</SquareButton>
        </main>
    );
};

export default Results;
