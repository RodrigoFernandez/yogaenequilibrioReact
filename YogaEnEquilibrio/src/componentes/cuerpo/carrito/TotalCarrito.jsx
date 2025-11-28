import {useState} from 'react';
import { useCarrito } from "../../../contextos/CarritoContext";
import { useAuth } from '../../../contextos/AuthContext';
import FinalizarCompraPopup from "./FinalizarCompraPopup";
import { ToastContainer, toast } from 'react-toastify';

export const TotalCarrito = () => {
    const { carrito, getTotalCarrito, finalizarCompra } = useCarrito();
    const { usuario } = useAuth();
    const [esFinalizarPopupAbierto, setEsFinalizarPopupAbierto] = useState(false);
    
    
    const mostrarPopupFinalizarCompra = (e) => {
        setEsFinalizarPopupAbierto(true);
    };

    const cerrarDialogo = () => {
        setEsFinalizarPopupAbierto(false);
    };

    const getEstiloBoton = () => {
        return desactivarFinalizarCompra() ? "boton boton-deshabilitado" : "boton";
    }

    const finalizarCompraCarrito = () =>{
        finalizarCompra();
        toast.success("Gracias por su compra. Recibirá un mail con el detalle de la compra.");
    };

    const desactivarFinalizarCompra = () => {
        return  getTotalCarrito() === 0
                || usuario == null;
    };

    const mostrarMensajeLoginObligatorio = () => {
        return usuario == null;
    }

    return (
        <div className="total-carrito">
            <div className="cuerpo-total-carrito">
                <div className="cuerpo-card">
                    <p>Total:</p>
                </div>
                <div className="precio-card" id="precioTotal">
                    <p>${getTotalCarrito()}</p>
                </div>
            </div>
            <button type="button" className={getEstiloBoton()} id="finalizarCompraBtn" disabled={desactivarFinalizarCompra()} onClick={mostrarPopupFinalizarCompra} >Finalizar compra</button>
            <FinalizarCompraPopup esDialogoAbierto={esFinalizarPopupAbierto} cerrarDialogo={cerrarDialogo} finalizarCompra={finalizarCompraCarrito}></FinalizarCompraPopup>
            {mostrarMensajeLoginObligatorio() && <div className="aviso-login-finalizacion">Debe ingresar a la aplicación para finalizar la compra</div>}
            <ToastContainer></ToastContainer>
        </div>
    )
};
