import style from './Stock.module.css';

const ProductoStock = ({producto, acciones}) => {
    return (
        <div className={style['producto-stock']}>
            <div className="producto-stock-id">{producto.id}</div>
            <div className="producto-stock-nombre">{producto.nombre}</div>
            <div className="producto-stock-descripcion">{producto.descripcion}</div>
            <div className="producto-stock-precio">{producto.precio}</div>
            <div className="producto-stock-novedad">{producto.esNovedad ? 'Sí' : 'No'}</div>
            <div className="producto-stock-destacado">{producto.esDestacado ? 'Sí' : 'No'}</div>
            <div className={style['producto-stock-imagen']}>
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="producto-stock-acciones">
                {acciones.map((accion, index) => (
                    <button key={index} className={style[accion.clase]} onClick={() => accion.handler(producto)}>{accion.nombre}</button>
                ))}
            </div>
        </div>
    );
}

export default ProductoStock;