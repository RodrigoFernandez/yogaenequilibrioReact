import { useState } from "react";
import PopUpProducto from "../PopUpProducto";
import { Link } from 'react-router-dom';
//import style from './ItemExibidor.module.css';

export const ItemExibidor = ({clase, claseEnlace, item}) => {
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    
    const keyModal = `modal-${item.id}`;
    
    const abrirDialogo = () => {
        setEsDialogoAbierto(true);
    }

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
    }
    
    return (
        <div className={clase}>
            <a className={claseEnlace} onClick={abrirDialogo}>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h3>{item.nombre}</h3>
                </div>
            </a>
            <PopUpProducto key={keyModal} item={item} esDialogoAbierto={esDialogoAbierto} cerrarDialogo={cerrarDialogo}></PopUpProducto>
        </div>
    );
};

export const ItemExibidorDetalle = ({clase, claseEnlace, item}) => {
    return (
        <div className={clase}>
            <Link to={`/productos/${item.id}`} className={claseEnlace}>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h3>{item.nombre}</h3>
                </div>
            </Link>
        </div>
    );
};

