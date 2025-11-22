import { useState } from 'react';
import ListaStockCabecera from './ListaStockCabecera';
import ListaStockCuerpo from './ListaStockCuerpo';
import ListaStockPie from './ListaStockPie';
import ProductoStockPopup from './ProductoStockPopup';
import style from './Stock.module.css';

const ListaStock = () => {
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
    };

    const altaProducto = (e) => {
        e.preventDefault();
        setEsDialogoAbierto(true);
    };

    const buscarProducto = (e) => {
        e.preventDefault();
        // Lógica de búsqueda de productos
        console.log('Buscar producto');
    };

    return (
        <>
        <div className={style['barra-herramientas-stock']}>
            <div className={style['barra-busqueda-stock']}>
                <input type="text" placeholder="Buscar producto..." />
                <button className="boton" onClick={buscarProducto}>Buscar</button>
            </div>
            <button className="boton" onClick={altaProducto}>Agregar Producto</button>
            <ProductoStockPopup esDialogoAbierto={esDialogoAbierto} cerrarDialogo={cerrarDialogo} esNuevo={true}></ProductoStockPopup>
        </div>
        <div className={style['lista-stock']}>
            <ListaStockCabecera></ListaStockCabecera>
            <ListaStockCuerpo></ListaStockCuerpo>
            <ListaStockPie></ListaStockPie>
        </div>
        </>
    );
}

export default ListaStock;