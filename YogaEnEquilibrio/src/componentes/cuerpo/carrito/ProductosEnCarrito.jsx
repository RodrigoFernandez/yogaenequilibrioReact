import '../../../styles/carrito.css';
import { FilaCarrito } from "./FilaCarrito";
import { useCarrito } from '../../../contextos/CarritoContext';

export const ProductosEnCarrito = () => {
    const { carrito } = useCarrito();

    let filasCarrito = [<tr key={0}>
                                <td colSpan="6">No hay productos en el carrito.</td>
                            </tr>];

    if(carrito.length !== 0){
        filasCarrito = carrito.map( (item) => <FilaCarrito key={item.producto.id} item={item}></FilaCarrito> );        
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
