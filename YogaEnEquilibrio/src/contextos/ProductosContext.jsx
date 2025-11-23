import { createContext, useState, useContext, useEffect } from "react";

export const productosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [stock, setStock] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(5);
  const [stockPaginado, setStockPaginado] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;

  useEffect(() => {
    setStock(productos);
  }, [productos]);

  useEffect(() => {
    setStockPaginado(stock.slice(indicePrimerProducto, indiceUltimoProducto));
    setTotalPaginas(Math.ceil(stock.length / productosPorPagina));

  }, [stock, paginaActual, productosPorPagina]);

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

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <productosContext.Provider value={{ productos, setProductos, stock, setStock, buscarProductos, stockPaginado, setStockPaginado, paginaActual, cambiarPagina, totalPaginas }}>
      {children}
    </productosContext.Provider>
  );
}

export const useProductos = () => {
  return useContext(productosContext);
};