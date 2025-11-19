import { createContext, useState, useContext } from "react";

export const productosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  return (
    <productosContext.Provider value={{ productos, setProductos }}>
      {children}
    </productosContext.Provider>
  );
}

export const useProductos = () => {
  return useContext(productosContext);
};