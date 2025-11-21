import style from './Stock.module.css';

const ProductoStock = ({producto, acciones}) => {

    return (
        <div className={style['producto-stock']}>
            <div className={style['producto-stock-id']}>{producto.id}</div>
            <div className={style['producto-stock-nombre']}>{producto.nombre}</div>
            <div className={style['producto-stock-descripcion']}>{producto.descripcion}</div>
            <div className={style['producto-stock-precio']}>${parseFloat(producto.precio).toFixed(2)}</div>
            <div className={style['producto-stock-novedad']}>{producto.esNovedad ? 'Sí' : 'No'}</div>
            <div className={style['producto-stock-destacado']}>{producto.esDestacado ? 'Sí' : 'No'}</div>
            <div className={style['producto-stock-imagen']}>
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className={style['producto-stock-acciones']}>
                {acciones.map((accion, index) => (
                    <a key={index} className={style[accion.clase]} onClick={(e) => (accion.handler(e, producto))} href="#"></a>
                ))}
            </div>
        </div>
    );
}

export default ProductoStock;