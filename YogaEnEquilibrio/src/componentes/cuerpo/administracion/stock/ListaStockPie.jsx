import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css';

const ListaStockPie = () => {
    const {productos} = useProductos();

    return (
        <div className={style['lista-stock-pie']}>
            <div className={style['lista-stock-pie-texto']}>Total de productos en stock</div>
            <div className={style['lista-stock-pie-cantidad']}>{productos.length}</div>
        </div>
    );
};

export default ListaStockPie;