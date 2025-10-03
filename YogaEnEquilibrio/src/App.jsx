import { use, useEffect, useState } from 'react'
//import './App.css'
import './styles/inicial.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import {Pie} from './componentes/pie/Pie.jsx'
import {Cabecera} from './componentes/encabezado/Cabecera.jsx'
import {Inicio} from './componentes/cuerpo/inicio/Inicio.jsx'
import {Productos} from './componentes/cuerpo/productos/Productos.jsx'
import {Carrito} from './componentes/cuerpo/carrito/Carrito.jsx'
import {Nosotros} from './componentes/cuerpo/nosotros/Nosotros.jsx'
import {Contacto} from './componentes/cuerpo/contacto/Contacto.jsx'
import { Cargando } from './componentes/Cargando.jsx'
import { Error } from './componentes/Error.jsx'

function App() {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  //const [carrito, setCarrito] = useState([{cantidad:2, producto:{"id":"1","nombre":"Almohadilla Beige","descripcion":"Descripción de Almohadilla Beige.","precio":10,"imagen":"https://i.imgur.com/mifCxvU.png","esNovedad":true,"esDestacado":false}}, {cantidad: 5, producto: {"id":"13","nombre":"Porta mat ojo","descripcion":"Descripción Porta mat ojo.","precio":20,"imagen":"https://i.imgur.com/jVifEfI.png","esNovedad":false,"esDestacado":true}}]);

  useEffect(() => {
    fetch('https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos')
      .then(response => response.json())
      .then(data => {
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
          <Route path='/' element={<Inicio productos={productos}> </Inicio>}></Route>
          <Route path='/productos' element={<Productos productos={productos}></Productos>}></Route>
          <Route path='/carrito' element={<Carrito carrito={carrito} setCarrito={setCarrito}></Carrito>}></Route>
          <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        </Routes>
      </main>

      <Pie></Pie>
    </BrowserRouter>
  )
}

export default App
