import ListaStockCabecera from './ListaStockCabecera';
import ListaStockCuerpo from './ListaStockCuerpo';
import style from './Stock.module.css';
//import { useProductos } from '../../../contextos/ProductosContext';

const ListaStock = () => {
    //const {productos, setProductos} = useProductos();

    return (
        <div className={style['lista-stock']}>
            <ListaStockCabecera></ListaStockCabecera>
            <ListaStockCuerpo></ListaStockCuerpo>
        </div>
    );
}

export default ListaStock;