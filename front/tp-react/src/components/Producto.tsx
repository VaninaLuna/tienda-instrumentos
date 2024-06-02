import { useInstrumento } from "../hooks/useInstrumento";
import { Instrumento } from "./Instrumento";
import { Carrito } from "./Carrito";
import { CarritoContextProvider } from "../context/CarritoContext";
import "../styles/Producto.css"

export default function Producto() {
    const { instrumentos } = useInstrumento();

    return (
        <>
            <CarritoContextProvider>
                <main className="d-flex flex-row justify-content-center">
                    <div className="main container">
                        <div className="row justify-content-center">
                            {
                                instrumentos.map((instrumento) => {
                                    return (
                                        <Instrumento key={instrumento.id} instrumentoEntity={instrumento} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ width: '10rem' }}>
                    </div>
                    <Carrito />
                </main>
            </CarritoContextProvider>
        </>
    )
}