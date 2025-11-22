import { createContext, useState, useContext, useEffect } from "react";

export const productosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    setStock(productos);
  }, [productos]);


  const filtrarPor = (producto, busqueda) => {
    return producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
            || producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
            ||  producto.imagen.toLowerCase().includes(busqueda.toLowerCase())
            || producto.precio.toFixed(2).includes(busqueda.toLowerCase());
  };

  const buscarProductos = (busqueda) => {
    if(busqueda && busqueda.trim() === '') {
      setStock(productos);
      return;
    }

    setStock( productos.filter((p) => filtrarPor(p, busqueda)));
  };

  return (
    <productosContext.Provider value={{ productos, setProductos, stock, setStock, buscarProductos }}>
      {children}
    </productosContext.Provider>
  );
}

export const useProductos = () => {
  return useContext(productosContext);
};