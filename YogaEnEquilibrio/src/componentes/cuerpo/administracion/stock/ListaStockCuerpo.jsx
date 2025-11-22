import { useState } from 'react';
import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css'
import ProductoStock from './ProductoStock';
import ProductoStockPopup from './ProductoStockPopup';

const ListaStockCuerpo = () => {
    const {stock} = useProductos();
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    const [unProducto, setUnProducto] = useState(null);

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
        setUnProducto(null);
    };

    const mostrarProducto = (e, unProducto) => {
        e.preventDefault();
        setEsDialogoAbierto(true);
        setUnProducto(unProducto);
    };

    const confirmarBajaProducto = (productoBaja) => {
        // TODO Lógica para eliminar el producto del stock
    };

    const bajaProducto = (e, productoBaja) => {
        e.preventDefault();

        // TODO Mostrar popup de confirmación antes de eliminar
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
        </div>
    );
}

export default ListaStockCuerpo;