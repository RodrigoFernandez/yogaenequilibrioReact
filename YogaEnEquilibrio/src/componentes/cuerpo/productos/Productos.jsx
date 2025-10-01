import ListadoProductos from "./ListadoProductos"
import '../../../styles/productos.css'

export const Productos = ({productos}) => {

    return (
        <section className="productos">
            <h2>Productos</h2>
            <ListadoProductos productos={productos}></ListadoProductos>
        </section>
    )
};