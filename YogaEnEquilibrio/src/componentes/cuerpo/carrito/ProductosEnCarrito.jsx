import '../../../styles/carrito.css';
import { FilaCarrito } from "./FilaCarrito";

export const ProductosEnCarrito = ({carrito, setCarrito}) => {
    const eliminarItem = (itemId) => {
        setCarrito(carrito.filter( (unItem) => unItem.producto.id !== itemId ));
    }

    let filasCarrito = [<tr key={0}>
                                <td colSpan="6">No hay productos en el carrito.</td>
                            </tr>];

    if(carrito.length !== 0){
        filasCarrito = carrito.map( (item) => <FilaCarrito key={item.producto.id} item={item} carrito={carrito} setCarrito={setCarrito} eliminarItem={eliminarItem}></FilaCarrito> );        
    }

    return (
        <div className="productos-carrito">
            <table className="productos-carrito-table">
                <tbody id="itemsCarrito">
                    {filasCarrito}
                </tbody>
            </table>
        </div>
    );
};
