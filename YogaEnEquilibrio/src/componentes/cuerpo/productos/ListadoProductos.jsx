import { Producto } from "./Producto";

const ListadoProductos = ({productos}) => {
  return (
    <div className="listado-productos">
        {productos.map((producto) => (
            <Producto key={producto.id} producto={producto}></Producto>
        ))}
    </div>
  )
}

export default ListadoProductos