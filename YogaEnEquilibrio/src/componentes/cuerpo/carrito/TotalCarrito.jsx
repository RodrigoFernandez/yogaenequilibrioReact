import { useCarrito } from "../../../contextos/CarritoContext";

export const TotalCarrito = () => {
    const { carrito, getTotalCarrito } = useCarrito();
    
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
            <button type="button" className={getEstiloBoton()} id="finalizarCompraBtn" disabled={getTotalCarrito() === 0}>Finalizar compra</button>
        </div>
    )
};
