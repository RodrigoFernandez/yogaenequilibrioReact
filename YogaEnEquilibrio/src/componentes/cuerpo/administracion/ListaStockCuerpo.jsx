import { useProductos } from '../../../contextos/ProductosContext';
import style from './Stock.module.css'
import ProductoStock from './ProductoStock';

const ListaStockCuerpo = () => {
    const {productos, setProductos} = useProductos();

    const editarProducto = (productoEditado) => {
        console.log(productoEditado);
    };

    const bajaProducto = (productoBaja) => {
        console.log(productoBaja);
    };

    const acciones = [{nombre: 'editar', clase: 'edicion', handler: editarProducto}, {nombre: 'baja', clase: 'baja', handler: bajaProducto}];

    return (
        <div className={style['lista-stock-cuerpo']}>
            {productos.length > 0 ?
                (productos.map((producto) => (
                        <ProductoStock producto={producto} acciones={acciones}></ProductoStock>
                    ))
                )
                : ( <div>No hay productos disponibles.</div>)
            }
        </div>
    );
}

export default ListaStockCuerpo;