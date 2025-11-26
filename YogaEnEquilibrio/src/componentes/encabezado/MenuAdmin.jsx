import { useState } from "react";
import style from './MenuAdmin.module.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contextos/AuthContext";

export function MenuAdmin({usuario}){
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { logout, usuarioConRoles } = useAuth();

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const salir = () => {
        toggleMenu();
        logout();
    };

    const opcionesDisponibles = [
        {destino: '/stock', titulo: 'Stock', accion: toggleMenu, autorizados: ['admin']},
        {destino: '/', titulo: 'Salir', accion: salir, autorizados: []}
    ];

    const opcionesDeMenu = opcionesDisponibles
                                            .filter(opcion => usuarioConRoles(opcion.autorizados))
                                            .map((opcion) => <li key={opcion.titulo}><Link to={opcion.destino} onClick={opcion.accion}>{opcion.titulo}</Link></li>);

    return (
        <div className={style.menuAdmin}>
            <button className={style.botonMenu} onClick={toggleMenu}>
                {usuario}
            </button>
            {menuAbierto && (
                <ul className={style.listaMenu}>
                    {opcionesDeMenu}
                </ul>
            )}
        </div>
    );
};