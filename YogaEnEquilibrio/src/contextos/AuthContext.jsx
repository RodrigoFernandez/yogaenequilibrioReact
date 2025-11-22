import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  const login = (usuarioLogueado, token) => {
    setUsuario(usuarioLogueado);
    setToken(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};