import {useState} from 'react';
import { useCarrito } from "../../../contextos/CarritoContext";
import FinalizarCompraPopup from "./FinalizarCompraPopup";

export const TotalCarrito = () => {
    const { carrito, getTotalCarrito } = useCarrito();
    const [esFinalizarPopupAbierto, setEsFinalizarPopupAbierto] = useState(false);
    
    const finalizarCompra = (e) => {
        // Lógica para finalizar la compra
        console.log("Acá debería salir el formulario para terminar la compra.");
        setEsFinalizarPopupAbierto(true);
    };

    const cerrarDialogo = () => {
        setEsFinalizarPopupAbierto(false);
    };

    const getEstiloBoton = () => {
        return getTotalCarrito() === 0 ? "boton boton-deshabilitado" : "boton";
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
            <button type="button" className={getEstiloBoton()} id="finalizarCompraBtn" disabled={getTotalCarrito() === 0} onClick={finalizarCompra} >Finalizar compra</button>
            <FinalizarCompraPopup esDialogoAbierto={esFinalizarPopupAbierto} cerrarDialogo={cerrarDialogo}></FinalizarCompraPopup>
        </div>
    )
};
