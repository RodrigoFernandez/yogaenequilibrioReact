import { useState } from 'react';
import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css'
import ProductoStock from './ProductoStock';
import ProductoStockPopup from './ProductoStockPopup';
import ConfirmacionBajaPopup from './ConfirmacionBajaPopup';

const ListaStockCuerpo = () => {
    const {stock} = useProductos();
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    const [unProducto, setUnProducto] = useState(null);
    const [esConfirmacionAbierta, setEsConfirmacionAbierta] = useState(false);

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
        setUnProducto(null);
    };

    const cerrarConfirmacion = () => {
        setEsConfirmacionAbierta(false);
        setUnProducto(null);
    }

    const mostrarProducto = (e, unProducto) => {
        e.preventDefault();
        setEsDialogoAbierto(true);
        setUnProducto(unProducto);
    };

    const confirmarBajaProducto = (productoBaja) => {
        // TODO Lógica para eliminar el producto del stock
        console.log(`Producto ${productoBaja.nombre} (${productoBaja.id}) eliminado del stock.`);
        cerrarConfirmacion();
    };

    const bajaProducto = (e, productoBaja) => {
        e.preventDefault();

        setEsConfirmacionAbierta(true);
        setUnProducto(productoBaja);
    };

    const acciones = [{nombre: 'mostrar', clase: 'mostrar', handler: mostrarProducto}, {nombre: 'baja', clase: 'baja', handler: bajaProducto}];

    return (
        <div>
            <div className={style['lista-stock-cuerpo']}>
                {stock.length > 0 ?
                    (stock.map((producto) => (
                            <ProductoStock key={producto.id} producto={producto} acciones={acciones}></ProductoStock>
                        ))
                    )
                    : ( <div>No hay productos disponibles.</div>)
                }
            </div>
            <ProductoStockPopup esDialogoAbierto={esDialogoAbierto} producto={unProducto} cerrarDialogo={cerrarDialogo} esNuevo={false}></ProductoStockPopup>
            <ConfirmacionBajaPopup esConfirmacionAbierta={esConfirmacionAbierta} producto={unProducto} cerrarConfirmacion={cerrarConfirmacion} confirmarBaja={confirmarBajaProducto}></ConfirmacionBajaPopup>
        </div>
    );
}

export default ListaStockCuerpo;