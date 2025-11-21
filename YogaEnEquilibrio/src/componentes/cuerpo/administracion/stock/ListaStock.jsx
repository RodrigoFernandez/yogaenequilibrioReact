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

    return (
        <>
        <div className={style['barra-herramientas-stock']}>
            <div>
                <input type="text" placeholder="Buscar producto..." />
                <button className="boton" onClick={altaProducto}>Buscar</button>
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