import { useInstrumento } from "../hooks/useInstrumento";
import { Instrumento } from "./Instrumento";
import { Carrito } from "./Carrito";
import { CarritoContextProvider } from "../context/CarritoContext";
import "../styles/Producto.css"
import { useState } from "react";

export default function Producto() {
    const { instrumentos } = useInstrumento();
    const [verCarrito, setVerCarrito] = useState(false);

    const handleVerCarrito = () => {
        setVerCarrito(true);
    }

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
                        <button type="button" className="btn btn-success mt-4" style={{ width: '150px', backgroundColor: '#e06f72', border: '#e06f72', fontWeight: 'initial', color: 'whitesmoke' }} onClick={handleVerCarrito}>Ver Carrito</button>
                    </div>
                    <Carrito visible={verCarrito}
                        setVisible={setVerCarrito} />
                </main>
            </CarritoContextProvider>
        </>
    )
}