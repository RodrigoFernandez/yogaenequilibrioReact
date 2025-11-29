import { useState } from "react";
import { useCarrito } from "../../../contextos/CarritoContext";
import style from './FilaCarrito.module.css';

export const FilaCarrito = ({item}) => {
    const { agregarItemAlCarrito, eliminarItemDelCarrito } = useCarrito();
    const [itemFila, setItemFila] = useState(item);

    const actualizarCantidad = (e) => {
        const nuevaCantidad = parseInt(e.target.value);
        if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
            const itemActualizado = {...itemFila, cantidad: nuevaCantidad};
            setItemFila(itemActualizado);
            agregarItemAlCarrito(itemActualizado);
        } else {
            e.target.value = itemFila.cantidad;
        }
    };

    const eliminarEsteItem = (e) => {
        eliminarItemDelCarrito(e.target.getAttribute('item-id'));
    };

    return (
        <tr className={style['producto-card-carrito']}>
            <td className="boton-eliminar-td">
                <button type="button" className="boton boton-error" item-id={itemFila.producto.id} onClick={eliminarEsteItem}>Eliminar</button>
            </td>
            <td className={style['imagen-card-carrito']}>
                <img src={itemFila.producto.imagen} alt={itemFila.producto.nombre}></img>
            </td>
            <td className={style['descripcion-card-td']}>
                <h3>{itemFila.producto.nombre}</h3>
            </td>
            <td className={style['precio-card-td']}>
                <p>${itemFila.producto.precio}</p>
            </td>
            <td className={style['precio-card-td']}>
                <label htmlFor="cantidad">Cantidad: </label>
                <input type="number" name="cantidad" value={itemFila.cantidad} min="1" max="10" item-id={itemFila.id} onChange={actualizarCantidad}></input>
            </td>
            <td className={style['total-card-td']}>
                <p>${itemFila.cantidad * itemFila.producto.precio}</p>
            </td>
        </tr>
    );
};