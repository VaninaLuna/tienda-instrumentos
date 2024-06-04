import InstrumentoEntity from "../entities/InstrumentoEntity";
import { useCarrito } from "../hooks/useCarrito";
import "../styles/Instrumento.css"

type InstrumentoParams = {
    instrumentoEntity: InstrumentoEntity;
}
function EnvioConCosto({ costo }: { costo: string }) {
    return (
        <p>Costo de Envio interior de Argentina: ${costo} </p>
    )
}

function EnvioGratis() {
    return (
        <div className="d-flex align-items-center">
            <img src={`/img/camion.png`} alt="imagen de un camion" style={{ marginBottom: "17px" }} />
            <p className="ml-2">Envió gratis a todo el país</p>
        </div>
    )
}


export function Instrumento(args: InstrumentoParams) {

    const instrumento = args.instrumentoEntity;

    const { addCarrito, removeCarrito, cart, removeItemCarrito } = useCarrito()

    const verificaInstrumentoEnCarrito = (product: InstrumentoEntity) => {
        return cart.some(item => item.instrumento.id === product.id)
    }

    const isInstrumentoInCarrito = verificaInstrumentoEnCarrito(instrumento)

    const toggleCarrito = () => {
        isInstrumentoInCarrito
            ? removeCarrito(instrumento)
            : addCarrito(instrumento)
    };

    const envioGratis = instrumento.costoEnvio === "G";

    return (
        < div className="card m-4 mx-auto text-center" style={{ width: '25rem' }}>
            <img src={`${instrumento.imagenPath},${instrumento.imagen}`} className="card-img-top" alt={instrumento.instrumento} />
            <div className="card-body altura-cuerpo d-flex flex-column justify-content-between">
                <h5 className="card-title">{instrumento.instrumento}</h5>
                <p className="card-text">{`$${instrumento.precio}`}</p>
                {
                    envioGratis
                        ? <EnvioGratis />
                        : <EnvioConCosto costo={instrumento.costoEnvio} />
                }
                <p>{instrumento.cantidadVendida} vendidos</p>

                <div className="text-right">
                    <a href={`producto/${instrumento.id}`} className="btn btn-success" style={{ width: '150px', backgroundColor: '#e06f72', border: '#e06f72', fontWeight: 'initial', color: 'whitesmoke' }} >Ver detalles</a>
                </div>

                <hr />
                <p>
                    {!isInstrumentoInCarrito
                        ? <a style={{ marginLeft: '20px', marginRight: '16px' }}> </a>
                        : <a className='iconoMasMenos' onClick={() => removeItemCarrito(instrumento)}> - </a>
                    }

                    <button className='colorFondoBlanco' onClick={toggleCarrito}>
                        {
                            isInstrumentoInCarrito
                                ? <img src={`./img/deleteCart.png`} title='Quitar' />
                                : <img src={`./img/addCart.png`} title='Comprar' />
                        }
                    </button>

                    <a className='iconoMasMenos' onClick={() => addCarrito(instrumento)}>
                        +
                    </a>
                </p>
            </div>
        </div >
    );
}


