import { use, useEffect, useState } from 'react'
//import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cargando } from './componentes/Cargando.jsx'
import { Login } from './componentes/cuerpo/administracion/Login.jsx'
import { Carrito } from './componentes/cuerpo/carrito/Carrito.jsx'
import { Contacto } from './componentes/cuerpo/contacto/Contacto.jsx'
import { Gracias } from './componentes/cuerpo/gracias/Gracias.jsx'
import { Inicio } from './componentes/cuerpo/inicio/Inicio.jsx'
import { Nosotros } from './componentes/cuerpo/nosotros/Nosotros.jsx'
import { DetalleProducto } from './componentes/cuerpo/productos/DetalleProducto.jsx'
import { Productos } from './componentes/cuerpo/productos/Productos.jsx'
import { Cabecera } from './componentes/encabezado/Cabecera.jsx'
import { Error } from './componentes/Error.jsx'
import { Pie } from './componentes/pie/Pie.jsx'
import { ProtectedRoute } from './componentes/ProtectedRoute.jsx'
import { Stock } from './componentes/cuerpo/administracion/Stock.jsx'
import { useProductos } from './contextos/ProductosContext.jsx'
import './styles/inicial.css'

function App() {

  //const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const {setProductos} = useProductos()

  useEffect(() => {
    fetch('https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos')
      .then(response => response.json())
      .then(data => {

        if(data === "Not found"){
          throw "Link no encontrado";
        }
        
        setProductos(data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        setError('Error al obtener los productos. Por favor, intente nuevamente más tarde.');
      })
      .finally( () => setCargando(false) );
  }, []);

  if (cargando) {
    return (
      <Cargando></Cargando>
    );
  }

  if (error) {
    return <Error mensaje={"Error al obtener los productos. Por favor, intente nuevamente más tarde."}></Error>;
  }

  return (
    <BrowserRouter>
      <Cabecera></Cabecera>

      <main className="principal">
        <Routes>
          <Route path='/' element={<Inicio> </Inicio>}></Route>
          <Route path='/productos' element={<Productos></Productos>}></Route>
          <Route path='/productos/:idProducto' element={<DetalleProducto></DetalleProducto>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/gracias' element={<Gracias></Gracias>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/stock' element={<ProtectedRoute> <Stock></Stock> </ProtectedRoute>}></Route>
        </Routes>
      </main>

      <Pie></Pie>
    </BrowserRouter>
  )
}

export default App
