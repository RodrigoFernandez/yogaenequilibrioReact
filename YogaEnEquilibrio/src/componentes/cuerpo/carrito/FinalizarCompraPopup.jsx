import {Portal} from '../../../Portal';
import { useCarrito } from "../../../contextos/CarritoContext";
import style from './FinalizarCompraPopup.module.css';

const ItemCompra = ({item}) => {
    return (
        <tr>
            <td>{item.producto.nombre}</td>
            <td>(x{item.cantidad})</td>
            <td></td>
            <td className={style['total-producto']}>${item.cantidad * item.producto.precio}</td>
        </tr>
    );
};

const TablaItemsCompra = ({carrito, getTotalCarrito}) => {
    return (
        <table className={style['tabla-items-compra']}>
            <tbody>
                {carrito.map( (item) => <ItemCompra key={item.producto.id} item={item}></ItemCompra>)}
            </tbody>
            <tfoot>
                <tr>
                    <td className={style['resaltado']} colSpan={3}>Total:</td>
                    <td className={`${style.resaltado} ${style['total-producto']}`}>$ {getTotalCarrito()}</td>
                </tr>
            </tfoot>
        </table>
    );
};

const ListadoFinalizarCompra = ({cerrarDialogo, carrito, getTotalCarrito, finalizarCompra}) => {
    
    const accionFinalizarCompra = (e) => {
        finalizarCompra();
        cerrarDialogo();
    };

    return (
        <div className={style['modal-finalizar-compra-contenido']}>
            <header className={style['modal-finalizar-compra-header']}>
                <h3>Finalizar Compra</h3>
            </header>
            <div className={style['modal-finalizar-compra-body']}>
                <p>Detalle de la compra:</p>
                <TablaItemsCompra carrito={carrito} getTotalCarrito={getTotalCarrito}></TablaItemsCompra>
            </div>
                    
            <div className={style['modal-botonera']}>
                <button className="boton" onClick={accionFinalizarCompra}>Confirmar compra</button>
                <button className="boton" onClick={cerrarDialogo}>Cancelar</button>
            </div>
        </div>
    );
}

const FinalizarCompraPopup = ({esDialogoAbierto, cerrarDialogo, finalizarCompra}) => { 
    const { carrito, getTotalCarrito } = useCarrito();

    return (
        <>
            {esDialogoAbierto && 
            <Portal>
                <div className={style['modal-overlay']}></div>
                <div className={style['modal-finalizar-compra']} open={esDialogoAbierto} aria-modal="true">
                    <ListadoFinalizarCompra cerrarDialogo={cerrarDialogo} carrito={carrito} getTotalCarrito={getTotalCarrito} finalizarCompra={finalizarCompra}></ListadoFinalizarCompra>
                </div>
            </Portal>}
        </>
    );
};

export default FinalizarCompraPopup;