import '../../styles/productos.css'

const PopUpProducto = ({item, esDialogoAbierto, cerrarDialogo}) => {
    
    return (
        <dialog className="modal-producto" open={esDialogoAbierto} aria-modal="true">
            <div className="imagen-card">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="cuerpo-card">
                <h3>{item.nombre}</h3>
                <p className="descripcion-cuerpo-card">{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: <input className="cantidad" type="number" min="1" max="10"></input></p>
                <p>Total: $10</p>
            </div>
            <div className="botonera-card">
                <button className="boton">Agregar</button>
                <button className="boton" onClick={cerrarDialogo}>Cancelar</button>
            </div>
        </dialog>
    );
};

export default PopUpProducto;