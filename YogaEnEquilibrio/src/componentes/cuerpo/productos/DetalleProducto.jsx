import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Cargando } from '../../Cargando.jsx'
import { Error } from '../../Error.jsx'
import '../../../styles/productos.css'

export const DetalleProducto = ({carrito, setCarrito}) => {
    const { idProducto } = useParams();    
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const navegante = useNavigate();

    const actualizarCantidad = (e) => {
        
        const nuevaCantidad = parseInt(e.target.value);
        console.log(nuevaCantidad);
        if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
            setItem({...item, cantidad: nuevaCantidad});
        } else {
            e.target.value = item.cantidad;
        }
    };

    const agregarAlCarrito = () => {
        setCarrito([...carrito, item]);
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
        <section className="producto-detalle">
            <h3>{item.producto.nombre}</h3>
            <div className="producto-detalle-cuerpo">
                <div className="producto-detalle-info">
                    <div className='izquierda'>
                    <img src={item.producto.imagen} alt={item.producto.nombre} />
                    </div>
                    <div className='derecha'>
                    <p>{item.producto.descripcion}</p>
                    </div>
                </div>
                <hr className='producto-detalle-division'/>
                <p>Precio: ${item.producto.precio}</p>
                <p>Cantidad: <input type="number" className="cantidad" value={item.cantidad} min="1" max="10" onChange={actualizarCantidad}></input></p>
                <p>Total: ${item.cantidad * item.producto.precio}</p>
            </div>
            <div className="producto-detalle-botonera">
                <button className="boton" onClick={agregarAlCarrito}>Agregar</button>
                <button className="boton" onClick={volver}>Volver</button>
            </div>
        </section>);
};
