
import { NavLink } from 'react-router-dom';
import { cilBarChart, cilHome, cilMusicNote } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CImage, CNavGroup, CNavItem, CSidebar, CSidebarNav } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';
import title from "./../../assets/logo.png";
import { useContext } from 'react';
import Usuario from '../../entities/Usuario';
import { AuthContext } from '../../context/AuthContext';
import { RolName } from '../../entities/RolName';


function Sidebar() {

    const { auth } = useContext(AuthContext); // Obtiene el estado de autenticación del contexto
    const usuarioLogueado: Usuario | null = auth.usuario;

    return (
        <div className="d-flex " >
            <CSidebar colorScheme="dark" className="bg-dark collapse border-end d-md-block d-block" id="sidebarCollapse" style={{ position: 'relative', height: '100%', backgroundColor: '#E0E0E0' }} unfoldable>
                <CSidebarNav>
                    <CNavItem>
                        <NavLink to="/home" className="nav-link">
                            <CImage rounded src={title} width={40} height={40} />
                            Tienda Hendrix
                        </NavLink>
                    </CNavItem>
                    <CNavGroup
                        toggler={
                            <>
                                <CIcon customClassName="nav-icon" icon={cilHome} />
                                Home
                            </>
                        }
                    >
                        <CNavItem>
                            <NavLink to="/home" className="nav-link">
                                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                Home
                            </NavLink>
                        </CNavItem>
                        <CNavItem>
                            <NavLink to="/dondeEstamos" className="nav-link">
                                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                Donde Estamos
                            </NavLink>
                        </CNavItem>
                    </CNavGroup>

                    {(usuarioLogueado && usuarioLogueado.rol) && (
                        <>
                            <CNavGroup
                                toggler={<>
                                    <CIcon customClassName="nav-icon" icon={cilMusicNote} />
                                    Productos
                                </>}
                            >
                                <CNavItem>
                                    <NavLink to="/producto" className="nav-link">
                                        <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                        Productos
                                    </NavLink>
                                </CNavItem>

                                {usuarioLogueado.rol.rolName !== RolName.VISOR && (
                                    <CNavItem>
                                        <NavLink to="/grilla" className="nav-link">
                                            <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                            Grilla
                                        </NavLink>
                                    </CNavItem>
                                )}
                            </CNavGroup>

                            {usuarioLogueado.rol.rolName == RolName.ADMIN && (
                                <CNavGroup
                                    toggler={<>
                                        <CIcon customClassName="nav-icon" icon={cilBarChart} />
                                        Reportes
                                    </>}
                                >
                                    <CNavItem>
                                        <NavLink to="/estadisticas" className="nav-link">
                                            <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                            Estadisticas
                                        </NavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <NavLink to="/reporteExcel" className="nav-link">
                                            <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                            Excel
                                        </NavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <NavLink to="/pdf" className="nav-link">
                                            <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                            PDF
                                        </NavLink>
                                    </CNavItem>
                                </CNavGroup>
                            )}
                        </>
                    )
                    }



                </CSidebarNav>
            </CSidebar>
        </div>
    );
}

export default Sidebar;