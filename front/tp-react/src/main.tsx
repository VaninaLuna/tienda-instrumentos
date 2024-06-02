import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InstrumentoDetalle } from './components/InstrumentoDetalle.tsx'
import { Home } from './components/Home.tsx'
import Login from './components/Login.tsx'
import { RutaPrivada } from './controlAcceso/RutaPrivada.tsx'
import RolUsuario from './controlAcceso/RolUsuario.tsx'
import { RolName } from './entities/RolName.ts'
import { AuthProvider } from './context/AuthContext.tsx'
import Register from './components/Register.tsx'
import DondeEstamos from './components/DondeEstamos.tsx'
import Sidebar from './components/layout/Sidebar.tsx'
import { MenuOpciones } from './components/layout/MenuOpciones.tsx'
import Producto from './components/Producto'
import GrillaInstrumentos from './components/GrillaInstrumentos'
import Formulario from './components/Formulario'
import './styles/Index.css'
import Estadisticas from './components/Estadisticas.tsx'
import ReporteExcel from './components/ReporteExcel.tsx'

//const GrillaInstrumentos = lazy(() => import('./components/GrillaInstrumentos'));
//const Producto = lazy(() => import('./components/Producto'));
// const DondeEstamos = lazy(() => import('./components/DondeEstamos'));
//const Formulario = lazy(() => import('./components/Formulario'));


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Sidebar />
        <div className="h-100 w-100 flex-grow-1 ">
          <MenuOpciones />
          <div className='content' style={{ marginLeft: 60, marginRight: 60 }}>

            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dondeEstamos' element={<DondeEstamos />} />

              {/* Rutas Privadas */}
              <Route path='/producto' element={
                <RutaPrivada>
                  <Producto />
                </RutaPrivada>
              } />

              <Route path='/producto' >
                <Route path=':idInstrumento' element={
                  <RutaPrivada>
                    <InstrumentoDetalle />
                  </RutaPrivada>
                } />
              </Route>

              {/* Rutas por roles */}
              <Route element={<RolUsuario roles={[RolName.ADMIN, RolName.OPERADOR]} />}>
                <Route path="/grilla" element={<GrillaInstrumentos />} />
              </Route>

              <Route element={<RolUsuario roles={[RolName.ADMIN]} />}>
                <Route path="/formulario/:idInstrumento" element={<Formulario />} />
              </Route>

              <Route element={<RolUsuario roles={[RolName.ADMIN]} />}>
                <Route path="/estadisticas" element={<Estadisticas />} />
              </Route>

              <Route element={<RolUsuario roles={[RolName.ADMIN]} />}>
                <Route path="/reporteExcel" element={<ReporteExcel />} />
              </Route>
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
