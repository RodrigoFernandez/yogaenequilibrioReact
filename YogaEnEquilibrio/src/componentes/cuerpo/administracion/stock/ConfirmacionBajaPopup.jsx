import { Portal } from "../../../../Portal";
import style from "./ConfirmacionBajaPopup.module.css";

const ConfirmacionBajaPopup = ({esConfirmacionAbierta, producto, cerrarConfirmacion, confirmarBaja}) => {

    return (
        <>
            {esConfirmacionAbierta && 
            <Portal>
                <div className={style['modal-overlay']}></div>
                <div className={style['modal-producto']} open={esConfirmacionAbierta} aria-modal="true">
                    <div className={style['modal-producto-contenido']}>
                        <header className={style['modal-producto-header']}>
                            <h3>Baja de {producto.nombre} ({producto.id})</h3>
                        </header>
                        <div className={style['modal-producto-body']}>
                            <p>¿Está seguro que desea eliminar este producto {producto.nombre}?</p>
                        </div>
                        <div className={style['modal-botonera']}>
                            <button className="boton" onClick={() => confirmarBaja(producto)}>Confirmar</button>
                            <button className="boton" onClick={cerrarConfirmacion}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Portal>}
        </>
    );
};

export default ConfirmacionBajaPopup;
