import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.jsx'
import { CarritoProvider } from './contextos/CarritoContext.jsx'
import { AuthProvider } from './contextos/AuthContext.jsx'
import { ProductosProvider } from './contextos/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductosProvider>
        <CarritoProvider>      
          <App />
        </CarritoProvider>
      </ProductosProvider>
    </AuthProvider>
  </StrictMode>,
)
