import { CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from "@coreui/react";
import Instrumento from "../entities/InstrumentoEntity";

export default function CarritoOff({ visible, setVisible, instrumento }: { visible: boolean, setVisible: (visible: boolean) => void, instrumento: Instrumento | null }) {
    return (
        <COffcanvas placement="end" visible={visible} scroll={true} onHide={() => setVisible(false)}>
            <COffcanvasHeader>
                <COffcanvasTitle>Carrito de Compras</COffcanvasTitle>
                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>
                {instrumento ? (
                    <div>
                        <img src={`/img/${instrumento.imagen}`} alt={instrumento.instrumento} style={{ width: '100%' }} />
                        <p>Instrumento: {instrumento.instrumento}</p>
                        <p>Marca: {instrumento.marca}</p>
                        <p>Modelo: {instrumento.modelo}</p>
                        <p>Precio: ${instrumento.precio}</p>
                        <p>Cantidad Vendida: {instrumento.cantidadVendida}</p>
                        <p>Descripcion: {instrumento.descripcion}</p>
                        {instrumento.costoEnvio === "G" ? (
                            <p>Envío Gratis</p>
                        ) : (
                            <p>Costo de Envío: ${instrumento.costoEnvio}</p>
                        )}
                    </div>
                ) : (
                    <p>No hay instrumento en el carrito.</p>
                )}
            </COffcanvasBody>
        </COffcanvas>
    );
}
