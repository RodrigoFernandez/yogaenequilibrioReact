import { useState } from 'react';
import ListaStockCabecera from './ListaStockCabecera';
import ListaStockCuerpo from './ListaStockCuerpo';
import ListaStockPie from './ListaStockPie';
import ProductoStockPopup from './ProductoStockPopup';
import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css';

const ListaStock = () => {
    const {buscarProductos, actualizarProductos, setActualizarProductos} = useProductos();
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    const [criterioBusqueda, setCriterioBusqueda] = useState('');

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
    };

    const altaProducto = (e) => {
        e.preventDefault();
        setEsDialogoAbierto(true);
    };

    const buscarProductoPorCriterio = (e) => {
        e.preventDefault();
        // Lógica de búsqueda de productos
        console.log('Buscar producto:' + criterioBusqueda);
        buscarProductos(criterioBusqueda);
    };

    const verificarTeclasPresionadas = (e) => {
        if (e.key === 'Enter') {
            buscarProductoPorCriterio(e);
        }
    };
    
    return (
        <>
        <div className={style['barra-herramientas-stock']}>
            <div className={style['barra-busqueda-stock']}>
                <input type="text" placeholder="Buscar producto..." value={criterioBusqueda} onChange={(e) => setCriterioBusqueda(e.target.value)} onKeyDown={verificarTeclasPresionadas}/>
                <button className="boton" onClick={buscarProductoPorCriterio}><span className={style['barra-busqueda-buscar-leyenda']}>Buscar</span><span><img src="img/lupa.svg" alt="Buscar" className={style['barra-busqueda-buscar-icono']} /></span></button>
            </div>
            <button className="boton" onClick={altaProducto}><span className={style['barra-busqueda-stock-boton-leyenda-larga']}>Agregar Producto</span><span className={style['barra-busqueda-stock-boton-leyenda-corta']}>+</span></button>
            <ProductoStockPopup esDialogoAbierto={esDialogoAbierto} cerrarDialogo={cerrarDialogo} esNuevo={true} actualizarProductos={actualizarProductos} setActualizarProductos={setActualizarProductos}></ProductoStockPopup>
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