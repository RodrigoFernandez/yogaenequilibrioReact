import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      const storedUsuario = localStorage.getItem('usuario');
      if (storedUsuario) {
        setUsuario(JSON.parse(storedUsuario));
      }
    }
  }, []);

  const login = (usuarioLogueado, token) => {
    setUsuario(usuarioLogueado);
    setToken(token);
    localStorage.setItem('authToken', token);
    localStorage.setItem('usuario', JSON.stringify(usuarioLogueado));
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuario');
  };

  const usuarioConRoles = (rolesAutorizados) => {
    if(!rolesAutorizados || rolesAutorizados.length == 0){
      return true;
    }
    
    let rtas = [];
    if(usuario){
      rtas = usuario.roles.map(rolUsuario => rolesAutorizados.includes(rolUsuario));
    }

    return rtas.includes(true);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, token, usuarioConRoles }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};