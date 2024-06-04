import { useInstrumento } from "../hooks/useInstrumento"
import { useCategoria } from "../hooks/useCategoria";

import Instrumento from "../entities/InstrumentoEntity";
import Categoria from "../entities/CategoriaEntity"
import Usuario from "../entities/Usuario";
import { useState } from "react";
import { RolName } from "../entities/RolName";



export default function GrillaInstrumentos() {

    const { instrumentos, eliminarInstrumento, setIdCategoria } = useInstrumento();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [jsonUsuario] = useState<any>(localStorage.getItem('usuario'));
    const usuarioLogueado: Usuario = JSON.parse(jsonUsuario) as Usuario;

    return (
        <>
            <OpcionesGrilla setIdCategoria={setIdCategoria} usuarioLogueado={usuarioLogueado} />
            <TablaInstrumentos instrumentos={instrumentos} eliminarInstrumento={eliminarInstrumento} usuarioLogueado={usuarioLogueado} />
        </>
    )
}

function OpcionesGrilla({ setIdCategoria, usuarioLogueado }: { setIdCategoria: (id: number) => void, usuarioLogueado: Usuario }) {

    const { categorias } = useCategoria();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setIdCategoria(parseInt(selectedId));
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-4 mt-5" style={{ gap: '400px' }}>

                {(usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName == RolName.ADMIN) ? <a className="btn btn-primary mr-3" style={{ width: '150px', backgroundColor: '#e06f72', border: '#e06f72', fontWeight: 'initial', color: 'whitesmoke' }} href={`/formulario/0`}>Nuevo</a> : <p></p>}

                <div className="d-flex flex-row align-items-center" style={{ gap: '10px' }}>
                    <label htmlFor="comboCategoria">Filtrar por Categoria: </label>
                    <select id="comboCateogira" className="form-select" style={{ width: '200px' }} name="select" onChange={handleSelectChange}>

                        <option value={0}> TODOS </option>

                        {categorias.map((categoria: Categoria) =>
                            <option key={categoria.id} value={categoria.id}> {categoria.denominacion} </option>
                        )}
                    </select></div>

            </div>
        </>
    )
}


function TablaInstrumentos({ instrumentos, eliminarInstrumento, usuarioLogueado }: { instrumentos: Instrumento[], eliminarInstrumento: (id: number) => void, usuarioLogueado: Usuario }) {
    return (
        <div className="container-fluid text-center">
            <table className="table table-striped w-75 m-auto">

                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Instrumento</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        {(usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName == RolName.ADMIN) ? <th>Modificar</th> : <th> </th>}
                        {(usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName == RolName.ADMIN) ? <th>Eliminar</th> : <th> </th>}
                    </tr>
                </thead>

                <tbody>
                    {instrumentos.map((instrumento: Instrumento) =>
                        <tr key={instrumento.id}>
                            {/* <td>{instrumento.id}</td> */}
                            <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={instrumento.instrumento}>
                                {instrumento.instrumento}
                            </td>
                            <td>{instrumento.marca}</td>
                            <td>{instrumento.modelo}</td>
                            <td>{instrumento.categoriaInstrumento?.denominacion}</td>
                            <td>{instrumento.precio}</td>

                            {
                                (usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName == RolName.ADMIN)
                                    ? <td>
                                        <a className="btn btn-success" style={{ marginBottom: 10, backgroundColor: '#2AB827', fontWeight: 'initial', color: 'whitesmoke' }} href={`/formulario/${instrumento.id}`}>Modificar</a>
                                    </td>
                                    :
                                    <td> </td>
                            }

                            {
                                (usuarioLogueado && usuarioLogueado.rol && usuarioLogueado.rol.rolName == RolName.ADMIN)
                                    ? <td>
                                        <a className="btn btn-danger" style={{ marginBottom: 10, backgroundColor: '#B82727', fontWeight: 'initial', color: 'whitesmoke' }} onClick={() => eliminarInstrumento(Number(instrumento.id))}>Eliminar</a>
                                    </td>
                                    :
                                    <td> </td>
                            }

                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}


