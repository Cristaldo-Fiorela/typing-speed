import SquareButton from "@/components/ui/square-button";

const Results = () => {
    return (
        <main className="flex flex-col flex-1">
            <section>
                <span>ICONO</span>
                <h2>TITULO RESULTADO</h2>
                <p>SUBTITULO RESULTADO</p>
            </section>

            <div>
                <div>
                    <h3>ESTADISTICA</h3>
                    <p>RESULTADO ESTADISTICA</p>
                </div>
                <div>
                    <h3>ESTADISTICA</h3>
                    <p>RESULTADO ESTADISTICA</p>
                </div>
                <div>
                    <h3>ESTADISTICA</h3>
                    <p>RESULTADO ESTADISTICA</p>
                </div>
            </div>

            <SquareButton>Go again</SquareButton>
        </main>
    );
};

export default Results;
