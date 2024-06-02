import Instrumento from "../entities/InstrumentoEntity";
import Categoria from "../entities/CategoriaEntity"
import Pedido from "../entities/Pedido";
import PreferenceMP from "../entities/MercadoPago/PreferenceMP";
import axios from 'axios';
import Usuario, { UsuarioLogin } from "../entities/Usuario";
import Rol from "../entities/Rol";
import PedidosPorMesAnioDTO from "../entities/PedidosPorMesAnioDTO";
import PedidosPorInstrumentoDTO from "../entities/PedidosPorInstrumentoDTO";

// ---------- INSTRUMENTOS ------------

export async function getInstrumentos() {
    const INSTRUMENTOS_ENDPOINT = 'http://localhost:9000/instrumento/all';

    try {
        const response = await fetch(INSTRUMENTOS_ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as Instrumento[];
    } catch (e) {
        throw new Error('Error al hacer fetch de instrumentos')
    }
}

export async function getInstrumentoPorID(id: number) {
    const INSTRUMENTO_ENDPOINT = `http://localhost:9000/instrumento/${id}`;

    try {
        const response = await fetch(INSTRUMENTO_ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as Instrumento;
    } catch (e) {
        throw new Error('Error al hacer fetch de instrumentos')
    }
}

export async function saveInstrumento(instrumento?: Instrumento) {
    let endpoint = 'http://localhost:9000/instrumento';
    let method: string = "POST";

    if (instrumento && instrumento.id >= 1) {
        endpoint = `http://localhost:9000/instrumento/${instrumento.id}`;
        method = "PUT";
    }

    await fetch(endpoint, {
        "method": method,
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(instrumento)
    });
}


export async function deleteInstrumento(id: number) {
    const DELETE_INSTRUMENTO_ENDPOINT = `http://localhost:9000/instrumento/${id}`

    try {
        const response = await fetch(DELETE_INSTRUMENTO_ENDPOINT, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el instrumento: ${response.status} ${response.statusText}`);
        }

        const isDeleted = await response.json();
        return isDeleted as boolean;
    } catch (e) {
        throw new Error('Error al hacer fetch de instrumentos')
    }
}


// ---------- CATEGORIAS ------------

export async function getCategorias() {
    const CATEGORIAS_ENDPOINT = 'http://localhost:9000/categoria/all';

    try {
        const response = await fetch(CATEGORIAS_ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as Categoria[];
    } catch (e) {
        throw new Error('Error al hacer fetch de instrumentos')
    }
}

export async function getInstrumentosPorCategoria(idCategoria: number) {
    const INSTRUMENTOS_CATEGORIA_ENDPOINT = `http://localhost:9000/instrumento/categoria/${idCategoria}`

    try {
        const response = await fetch(INSTRUMENTOS_CATEGORIA_ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as Instrumento[];
    } catch (e) {
        throw new Error('Error al hacer fetch de instrumentos')
    }
}


// ---------- PEDIDO ------------

export async function savePedido(pedido?: Pedido) {
    const endpoint = 'http://localhost:9000/pedido';

    const response = await fetch(endpoint, {
        "method": "POST",
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(pedido)
    });

    return response.json();
}

// ---------- PEDIDO / CREATE PREFERENCE MERCADO-PAGO  ------------

export async function savePreferenceMP(pedido?: Pedido) {
    const endpoint = 'http://localhost:9000/pedido/create_preference_mp';

    const response = await fetch(endpoint, {
        "method": "POST",
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(pedido)
    });

    const json = await response.json();
    return json as PreferenceMP
}


// ---------- ROLES ----------------------
export async function getRoles() {
    const ROLES_ENDPOINT = 'http://localhost:9000/rol/all';

    try {
        const response = await fetch(ROLES_ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as Rol[];
    } catch (e) {
        throw new Error('Error al hacer fetch de ROLES')
    }
}

// ---------- LOGIN ----------------------
export async function login(usuarioLogin?: UsuarioLogin) {
    const endpoint = 'http://localhost:9000/auth/login';

    const response = await fetch(endpoint, {
        "method": "POST",
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": JSON.stringify(usuarioLogin)
    });

    console.log(response);
    const json = await response.json();
    return json as Usuario;
}

// ---------- REGISTER ------------------------
export async function register(usuario: Usuario) {
    const endpoint = 'http://localhost:9000/auth/register';

    try {
        const response = await fetch(endpoint, {
            "method": "POST",
            "headers": {
                "Content-Type": 'application/json'
            },
            "body": JSON.stringify(usuario)
        });
    
        //const json = response.json();
        console.log(response);
        return response;
    } catch (error) {
        throw new Error('Error al guardar el usuario')
    }
}


// -------------- LOG OUT ----------------


export async function logout() {
    try {
        await axios.post('http://localhost:9000/auth/logout');
        // Maneja la redirección o el estado de la aplicación después de cerrar sesión
    } catch (error) {
        console.error('Error al cerrar sesión', error);
    }
}

//--------------- GRAFICOS ----------------

export async function getPedidosPorMesAnio() {
    const ENDPOINT = 'http://localhost:9000/pedido/porMesAnio';

    try {
        const response = await fetch(ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json as PedidosPorMesAnioDTO[];
    } catch (e) {
        throw new Error('Error al hacer fetch de pedidos por mes y año');
    }
}

export async function getPedidosPorInstrumento() {
    const ENDPOINT = 'http://localhost:9000/pedido/porInstrumento';

    try {
        const response = await fetch(ENDPOINT);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log(json)
        return json as PedidosPorInstrumentoDTO[];
    } catch (e) {
        throw new Error('Error al hacer fetch de pedidos por instrumento');
    }
}