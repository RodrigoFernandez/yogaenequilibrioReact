export const TotalCarrito = ({totalCarrito}) => {
    const getEstiloBoton = () => {
        return totalCarrito === 0 ? "boton boton-deshabilitado" : "boton";
    }

    return (
        <div className="total-carrito">
            <div className="cuerpo-total-carrito">
                <div className="cuerpo-card">
                    <p>Total:</p>
                </div>
                <div className="precio-card" id="precioTotal">
                    <p>${totalCarrito}</p>
                </div>
            </div>
            <button type="button" className={getEstiloBoton()} id="finalizarCompraBtn" disabled={totalCarrito === 0}>Finalizar compra</button>
        </div>
    )
};
