import { useState } from "react";
import PopUpProducto from "../PopUpProducto";

const Producto = ({producto}) => {
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    
    const keyModal = `modal-${producto.id}`;
    
    const abrirDialogo = () => {
        setEsDialogoAbierto(true);
    }

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
    }

    return (
        <article className="producto-card">
            <div className="imagen-card">
                <img src={producto.imagen} alt={producto.nombre}></img>
            </div>
            <div className="cuerpo-card">
                <h3>{producto.nombre}</h3>
                <p className="descripcion-cuerpo-card">{producto.descripcion}</p>
                <p className="precio">Precio: ${producto.precio}</p>
            </div>
            <button className="boton" onClick={abrirDialogo}>Agregar al carrito</button>
            <PopUpProducto key={keyModal} item={producto} esDialogoAbierto={esDialogoAbierto} cerrarDialogo={cerrarDialogo}></PopUpProducto>
        </article>
    )
}

export default Producto;
