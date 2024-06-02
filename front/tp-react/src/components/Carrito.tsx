import { useId, useState } from "react"
import Pedido from "../entities/Pedido"
import PedidoDetalle from "../entities/PedidoDetalle"
import { useCarrito } from "../hooks/useCarrito"
import { savePedido } from "../services/FuncionesApi"
import { ModalMensaje } from "./ModalMensaje"
import "../styles/Carrito.css"
import { CheckoutMP } from "./CheckoutMP"
import Usuario from "../entities/Usuario"
import { RolName } from "../entities/RolName"
import CIcon from "@coreui/icons-react"
import { cilCart } from "@coreui/icons"


function CartItem(item: PedidoDetalle) {
    return (
        <li key={item.id}>
            <img
                src={`/img/${item.instrumento.imagen}`}
                alt={item.instrumento.instrumento}
            />
            <div>
                <strong>{item.instrumento.instrumento}</strong> - ${item.instrumento.precio}
            </div>

            <footer>
                <small>
                    {item.cantidad} {item.cantidad == 1 ? 'unidad' : 'unidades'}
                </small>
                <hr></hr>
            </footer>
        </li>



        // <div key={item.id}>
        //     <span>
        //         <img width={50} height={50}
        //             src={`/img/${item.instrumento.imagen}`}
        //             alt={item.instrumento.instrumento}
        //         />
        //         <br />
        //         <strong>{item.instrumento.instrumento}</strong> - ${item.instrumento.precio}
        //         <div>
        //             <b>{item.cantidad} {item.cantidad == 1 ? 'unidad' : 'unidades'} </b>
        //         </div>
        //     </span>
        //     <hr></hr>
        // </div>
    )
}

export function Carrito() {

    const { cart, limpiarCarrito, totalPedido } = useCarrito()
    const [showModal, setShowModal] = useState(false);
    const [savedPedido, setSavedPedido] = useState<Pedido>(new Pedido())
    const [message, setMessage] = useState<string>('');
    const cartCheckboxId = useId()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [jsonUsuario] = useState<any>(localStorage.getItem('usuario'));
    const usuarioLogueado: Usuario = JSON.parse(jsonUsuario) as Usuario;

    const guardarPedido = async () => {

        if (cart.length === 0) {
            setMessage("Al menos debe agregar un instrumento al carrito")
            //Al abrir el modal se detiene la ejecucion hasta cerrarlo
            setShowModal(true)
            //Una vez que se cierra el modal se accede al return
            return


        }
        const pedido = new Pedido();

        pedido.totalPedido = totalPedido ?? 0
        pedido.pedidoDetalles = cart;

        const pedidoFromDB: Pedido = await savePedido(pedido);

        limpiarCarrito();

        setMessage(`El pedido con id ${pedidoFromDB.id} se guardó correctamente`)
        setShowModal(true)
        setSavedPedido(pedidoFromDB);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CIcon className="text-success" size="xl" icon={cilCart} />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className="cart text-center">
                <h3 className="mb-4" style={{ marginTop: '30px' }}>
                    {/* <CIcon className="text-success" size="xl" style={{ marginRight: '10px' }} icon={cilCart} /> */}
                    Carrito
                </h3>

                <ul>
                    {
                        cart.map(detalle =>
                            <CartItem id={detalle.instrumento.id} instrumento={detalle.instrumento} key={detalle.instrumento.id} cantidad={detalle.cantidad} />
                        )
                    }
                </ul>
                <div>
                    <h3>${totalPedido}</h3>
                </div>
                <br />
                <button title='Limpiar Todo' onClick={limpiarCarrito}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                        <path d='M17 17a2 2 0 1 0 2 2' />
                        <path d='M17 17h-11v-11' />
                        <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
                        <path d='M3 3l18 18' />
                    </svg>
                </button>
                <br />
                <br />

                {
                    savedPedido.id === 0 && (usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName !== RolName.VISOR)
                        ? <button onClick={guardarPedido}> Generar Pedido </button>
                        : null
                }

            </aside >

            <CheckoutMP pedido={savedPedido} />

            <ModalMensaje
                showModal={showModal}
                message={message}
                handleClose={handleCloseModal}
            />
        </>

    )
}