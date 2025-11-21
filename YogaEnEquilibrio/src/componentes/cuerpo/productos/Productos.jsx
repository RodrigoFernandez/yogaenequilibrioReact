import { useProductos } from '../../../contextos/ProductosContext'
import ListadoProductos from "./ListadoProductos"
import '../../../styles/productos.css'

export const Productos = () => {
    const {productos} = useProductos();

    return (
        <section className="productos">
            <h2>Productos</h2>
            <ListadoProductos productos={productos}></ListadoProductos>
        </section>
    )
};