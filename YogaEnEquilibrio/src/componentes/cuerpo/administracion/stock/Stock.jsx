import { useProductos } from '../../../../contextos/ProductosContext';
import ListaStock from './ListaStock';
import style from './Stock.module.css';

export function Stock(){
    const {productos, setProductos} = useProductos();

    return <section className={style.stock}>
                <h2>Administración de Stock</h2>
                <ListaStock></ListaStock>
           </section>;
};