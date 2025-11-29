import { use, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Cargando } from '../../Cargando.jsx'
import { Error } from '../../Error.jsx'
import style from './DetalleProducto.module.css'
import { useCarrito } from '../../../contextos/CarritoContext.jsx';

export const DetalleProducto = () => {
    const { carrito, agregarItemAlCarrito } = useCarrito();
    const { idProducto } = useParams();    
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const navegante = useNavigate();

    const actualizarCantidad = (e) => {
        
        const nuevaCantidad = parseInt(e.target.value);
        
        if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
            setItem({...item, cantidad: nuevaCantidad});
        } else {
            e.target.value = item.cantidad;
        }
    };

    const agregarAlCarrito = () => {
        agregarItemAlCarrito(item);
        navegante('/carrito');
    };

    const volver = () => {
        navegante(-1);
    }

    useEffect(() => {
        fetch(`https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos/${idProducto}`)
          .then(response => response.json())
          .then(data => {
            setItem({cantidad: 1, producto: data});
          })
          .catch(error => {
            console.error('Error al obtener el producto:', error);
            setError('Error al obtener el producto. Por favor, intente nuevamente más tarde.');
          })
          .finally( () => setCargando(false) );
    }, []);

    if (cargando) {
        return (
          <Cargando></Cargando>
        );
    }
    
    if (error) {
        return <Error mensaje={"Error al obtener los productos. Por favor, intente nuevamente más tarde."}></Error>;
    }

    return (
        <>
            <title>{`${item.producto.nombre} | Yoga en equilibrio`}</title>
            <meta name="description" content={`${item.producto.nombre}. ${item.producto.descripcion}.`} />

            <section className={style['producto-detalle']}>
                <h3>{item.producto.nombre}</h3>
                <div className={style['producto-detalle-cuerpo']}>
                    <div className={style['producto-detalle-info']}>
                        <div className={style['izquierda']}>
                        <img src={item.producto.imagen} alt={item.producto.nombre} />
                        </div>
                        <div className={style['derecha']}>
                        <p>{item.producto.descripcion}</p>
                        </div>
                    </div>
                    <hr className={style['producto-detalle-division']}/>
                    <p>Precio: ${item.producto.precio}</p>
                    <p>Cantidad: <input type="number" className={style['cantidad']} value={item.cantidad} min="1" max="10" onChange={actualizarCantidad}></input></p>
                    <p>Total: ${item.cantidad * item.producto.precio}</p>
                </div>
                <div className={style['producto-detalle-botonera']}>
                    <button className="boton" onClick={agregarAlCarrito}>Agregar</button>
                    <button className="boton" onClick={volver}>Volver</button>
                </div>
            </section>
        </>);
};
