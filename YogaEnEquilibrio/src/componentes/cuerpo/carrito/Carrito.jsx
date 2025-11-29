import { useState, useEffect } from 'react'
import { ProductosEnCarrito } from './ProductosEnCarrito';
import { TotalCarrito } from "./TotalCarrito";
import { useCarrito } from '../../../contextos/CarritoContext';
import style from './Carrito.module.css';

export function Carrito() {
    const { carrito } = useCarrito();
    const [totalCarrito, setTotalCarrito] = useState(0);

    const actualizarTotal = () => {
        setTotalCarrito( carrito.reduce( (total, item) => total + (item.producto.precio * item.cantidad), 0) );
    };
    
    useEffect(() => {
        actualizarTotal();
    }, [carrito]);

    return (
        <section className={style.carrito}>
            <h2>Carrito</h2>
            <ProductosEnCarrito></ProductosEnCarrito>
            <TotalCarrito totalCarrito={totalCarrito}></TotalCarrito>            
        </section>
    );
}