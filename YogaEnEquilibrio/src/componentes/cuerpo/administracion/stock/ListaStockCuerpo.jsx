import { useState } from 'react';
import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css'
import ProductoStock from './ProductoStock';
import ProductoStockPopup from './ProductoStockPopup';

const ListaStockCuerpo = () => {
    const {productos, setProductos} = useProductos();
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    const [unProducto, setUnProducto] = useState(null);

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
        setUnProducto(null);
    };

    const mostrarProducto = (e, unProducto) => {
        e.preventDefault();
        console.log(unProducto);
        setEsDialogoAbierto(true);
        setUnProducto(unProducto);
    };

    const bajaProducto = (e, productoBaja) => {
        e.preventDefault();
        console.log(productoBaja);
    };

    const acciones = [{nombre: 'mostrar', clase: 'mostrar', handler: mostrarProducto}, {nombre: 'baja', clase: 'baja', handler: bajaProducto}];

    return (
        <div>
            <div className={style['lista-stock-cuerpo']}>
                {productos.length > 0 ?
                    (productos.map((producto) => (
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