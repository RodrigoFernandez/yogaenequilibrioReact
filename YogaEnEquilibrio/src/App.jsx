import { useState } from 'react'
//import './App.css'
import './styles/inicial.css'
import {Pie} from './pie/Pie.jsx'
import {Cabecera} from './encabezado/Cabecera.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera></Cabecera>

      <main className="principal">
        Cuerpo
      </main>

      <Pie></Pie>
    </>
  )
}

export default App
