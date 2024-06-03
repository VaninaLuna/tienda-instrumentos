import { useContext } from "react";
import Usuario from "../../entities/Usuario";
import "../../styles/MenuOpciones.css";
import Logout from "../Logout"
import { AuthContext } from "../../context/AuthContext";

export function MenuOpciones() {
    const { auth } = useContext(AuthContext); // Obtiene el estado de autenticación del contexto
    const usuarioLogueado: Usuario | null = auth.usuario;

    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#d1cbc0' }} >
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingRight: '50px' }}>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {(!usuarioLogueado || !usuarioLogueado.rol) ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: 'bold', color: 'white' }} href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ fontWeight: 'bold', color: 'white' }} href="/register">Register</a>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Logout />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <br />
        </>
    )
}
