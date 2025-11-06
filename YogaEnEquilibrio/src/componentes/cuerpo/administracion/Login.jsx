import style from './Login.module.css';
import { useState } from 'react';
import { useAuth } from '../../../contextos/AuthContext.jsx';
import { useNavigate } from "react-router-dom";

export function Login(){
    const navegante = useNavigate();

    const getDefaultLogin = () => {
        return {
            usuario: '',
            contrasenia: ''
        };
    };

    const [usuarioLogin, setUsuarioLogin] = useState(getDefaultLogin());
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(false);
    const {login} = useAuth();

    const asignarUsuario = (e) => {
        setUsuarioLogin({...usuarioLogin, usuario: e.target.value});
    }

    const asignarContrasenia = (e) => {
        setUsuarioLogin({...usuarioLogin, contrasenia: e.target.value});
    }

    const ingresar = (e) => {
        e.preventDefault();
        
        setEnviando(true);

        login(usuarioLogin.usuario);
        navegante('/'); // Redirige a la página principal después del login
        // Aquí iría la lógica para enviar los datos de login al servidor
    };

    return <section className={style.login}>
                <h2>Ingresar</h2>
                <div className={style['login-form']}>
                    <div></div>
                    <form onSubmit={ingresar}>
                        <label htmlFor="usuario">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" required value={usuarioLogin.usuario} onChange={asignarUsuario}></input>
                        
                        <label htmlFor="contrasenia">Contraseña:</label>
                        <input type="password" id="contrasenia" name="contrasenia" required value={usuarioLogin.contrasenia} onChange={asignarContrasenia}></input>
                        
                        <div className={style.botones}>
                            <button className={style.boton} type="submit">Ingresar</button>
                        </div>
                    </form>
                </div>
           </section>;
}