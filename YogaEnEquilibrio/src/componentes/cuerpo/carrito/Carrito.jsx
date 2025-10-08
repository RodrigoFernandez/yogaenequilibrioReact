import { useState, useEffect } from 'react'
import '../../../styles/carrito.css';
import { ProductosEnCarrito } from './ProductosEnCarrito';
import { TotalCarrito } from "./TotalCarrito";

export function Carrito({carrito, setCarrito}) {
    const [totalCarrito, setTotalCarrito] = useState(0);

    const actualizarTotal = () => {
        setTotalCarrito( carrito.reduce( (total, item) => total + (item.producto.precio * item.cantidad), 0) );
    };
    
    useEffect(() => {
        actualizarTotal();
    }, [carrito]);

    return (
        <section className="carrito">
            <h2>Carrito</h2>
            <ProductosEnCarrito carrito={carrito} setCarrito={setCarrito}></ProductosEnCarrito>
            <TotalCarrito totalCarrito={totalCarrito}></TotalCarrito>            
        </section>
    );
}