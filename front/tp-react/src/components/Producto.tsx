import { useInstrumento } from "../hooks/useInstrumento";
import { Instrumento } from "./Instrumento";
import { Carrito } from "./Carrito";
import { CarritoContextProvider } from "../context/CarritoContext";
import "../styles/Producto.css"
import { useEffect, useState } from "react";
import InstrumentoEntity from "../entities/InstrumentoEntity";
import { Form } from "react-bootstrap";

export default function Producto() {
    const { instrumentos } = useInstrumento();
    const [verCarrito, setVerCarrito] = useState(false);
    const [filteredInstrumentos, setFilteredInstrumentos] = useState<InstrumentoEntity[]>([]);
    const [filter, setFilter] = useState("");

    const handleVerCarrito = () => {
        setVerCarrito(true);
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilter(value);

        const filtered = instrumentos.filter(instrumento =>
            instrumento.instrumento.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredInstrumentos(filtered);
    };

    useEffect(() => {
        setFilteredInstrumentos(instrumentos);
    }, [instrumentos]);

    return (
        <>
            <CarritoContextProvider>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form.Control
                        type="text"
                        placeholder="Filtrar por Nombre"
                        value={filter}
                        onChange={handleFilterChange}
                        style={{ margin: 50, width: '300px', height: '50px' }}
                    />
                    <div style={{ margin: 30 }}>
                        <button type="button" className="btn btn-success mt-4"
                            style={{ width: '150px', backgroundColor: '#e06f72', border: '#e06f72', fontWeight: 'initial', color: 'whitesmoke' }}
                            onClick={handleVerCarrito}>Ver Carrito</button>
                    </div>
                </div>

                <div className="main container">
                    <div className="row justify-content-center">
                        {
                            filteredInstrumentos.map((instrumento) => {
                                return (
                                    <Instrumento key={instrumento.id} instrumentoEntity={instrumento} />
                                )
                            })
                        }
                    </div>
                </div>

                <Carrito visible={verCarrito}
                    setVisible={setVerCarrito} />
            </CarritoContextProvider>
        </>
    )
}