import { useState } from "react";
import style from './MenuAdmin.module.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contextos/AuthContext";

export function MenuAdmin({usuario}){
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { logout } = useAuth();

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const salir = () => {
        toggleMenu();
        logout();
    };

    return (
        <div className={style.menuAdmin}>
            <button className={style.botonMenu} onClick={toggleMenu}>
                {usuario}
            </button>
            {menuAbierto && (
                <ul className={style.listaMenu}>
                    <li><Link to='/stock' onClick={toggleMenu}>Stock</Link></li>
                    <li><Link to='/' onClick={salir}>Salir</Link></li>
                </ul>
            )}
        </div>
    );
};