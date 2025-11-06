import { createContext, useState, useContext } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarItemAlCarrito = (item) => {
    const existeItem = carrito.find( (unItem) => unItem.producto.id === item.producto.id );

    if (existeItem) {
      const carritoActualizado = carrito.map( (unItem) => {
        if (unItem.producto.id === item.producto.id) {
          //unItem.cantidad = item.cantidad;
          return {...unItem, cantidad: item.cantidad };
        }
        return unItem;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, item]);
    }
  };

  const eliminarItemDelCarrito = (productoId) => {
    setCarrito(carrito.filter( (unItem) => unItem.producto.id !== productoId ));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const getTotalItems = () => {
    return carrito.reduce( (total, item) => total + item.cantidad, 0);
  };

  const getTotalCarrito = () => {
    return carrito.reduce( (total, item) => total + (item.producto.precio * item.cantidad), 0);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarItemAlCarrito, eliminarItemDelCarrito, vaciarCarrito, getTotalItems, getTotalCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => {
  return useContext(CarritoContext);
};