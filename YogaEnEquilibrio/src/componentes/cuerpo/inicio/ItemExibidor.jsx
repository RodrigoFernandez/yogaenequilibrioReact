import { useState } from "react";
import PopUpProducto from "../PopUpProducto";

const ItemExibidor = ({clase, item}) => {
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
            <a className="enlace-producto" onClick={abrirDialogo}>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h3>{item.nombre}</h3>
                </div>
            </a>
            <PopUpProducto key={keyModal} item={item} esDialogoAbierto={esDialogoAbierto} cerrarDialogo={cerrarDialogo}></PopUpProducto>
        </div>
    );
};

export default ItemExibidor;