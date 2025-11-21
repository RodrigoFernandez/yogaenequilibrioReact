import { useState } from 'react';
import style from './ProductoStockPopup.module.css';

const ExhibidorProducto = ({producto, cerrarDialogo, modificar}) => {
   return (
        <div className={style['modal-producto-contenido']}>
            <header className={style['modal-producto-header']}>
                <h3>{producto.nombre} ({producto.id})</h3>
            </header>
            <div className={style['modal-producto-body']}>
                <div className={style['modal-producto-campos-exhibidor']} >
                    <div className={style['modal-producto-label']}>Descripción:</div>
                    <div className={style['modal-producto-valor']}>{producto.descripcion}</div>
                    <div className={style['modal-producto-label']}>Precio:</div>
                    <div className={style['modal-producto-valor']}>${parseFloat(producto.precio).toFixed(2)}</div>
                    <div className={style['modal-producto-label']}>Es novedad:</div>
                    <div className={style['modal-producto-valor']}>{producto.esNovedad ? 'Sí' : 'No'}</div>
                    <div className={style['modal-producto-label']}>Es destacado:</div>
                    <div className={style['modal-producto-valor']}>{producto.esDestacado ? 'Sí' : 'No'}</div>
                </div>
                <div className={style['modal-imagen']}>
                        <img src={producto.imagen} alt={producto.nombre} />
                    </div>
            </div>
            
            <div className={style['modal-botonera']}>
                <button className="boton" onClick={modificar}>Modificar</button>
                <button className="boton" onClick={cerrarDialogo}>Cancelar</button>
            </div>
        </div>
    );
};

const AltaProducto = ({ cerrarDialogo, producto }) => {
    const guardarProducto = (e) => {
        e.preventDefault();
        // Lógica para guardar el nuevo producto
        cerrarDialogo();
    };

    const limpiarYCerrarDialogo = (e) => {
        e.preventDefault();
        cerrarDialogo();
    };

    //si viene el producto, cargar los datos en el formulario para edición

    return (
        <div className={style['modal-producto-contenido']}>
            <header className={style['modal-producto-header']}>
                <h3>Nuevo Producto</h3>
            </header>
            <div className={style['modal-producto-body']}>
                <form className={style['modal-producto-form']} onSubmit={guardarProducto} onReset={limpiarYCerrarDialogo}>
                    <div className={style['modal-producto-campos']} >
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" name="nombre" required />
                        <label htmlFor="precio">Precio:</label>
                        <input type="number" name="precio" step="0.01" required />
                        <label htmlFor="esNovedad">Es novedad:</label>
                        <div className={style['modal-checkbox']}>
                            <input type="checkbox" name="esNovedad" />
                        </div>
                        <label htmlFor="esDestacado">Es destacado:</label>
                        <div className={style['modal-checkbox']}>
                            <input type="checkbox" name="esDestacado" />
                        </div>
                        <label htmlFor="imagen">Imagen URL:</label>
                        <input type="url" name="imagen" required />
                        <div className={style['modal-descripcion-label']}>
                            <label htmlFor="descripcion">Descripción:</label>
                        </div>
                        <textarea name="descripcion" rows={10} required></textarea>
                    </div>
                    <div className={style['modal-botonera']}>
                        <button className="boton">Guardar</button>
                        <button className="boton" onClick={cerrarDialogo}>Cancelar</button>
                    </div>
                </form>
            </div> 
        </div>
    );
};


const ProductoStockPopup = ({ producto, esDialogoAbierto, cerrarDialogo, esNuevo }) => {
    const [esModificacion, setEsModificacion] = useState(false);
    
    const modificarProducto = () => {
        setEsModificacion(true);
    };

    return (
        <>
            {esDialogoAbierto && (
                    <div className={style['modal-overlay']}></div>
                )}

            <dialog className={style['modal-producto']} open={esDialogoAbierto} aria-modal="true">
                { !esNuevo && producto && !esModificacion && (
                    <ExhibidorProducto producto={producto} cerrarDialogo={cerrarDialogo} modificar={modificarProducto}></ExhibidorProducto>
                )}

                { !esNuevo && producto && esModificacion && (
                    <>aca se modifica</>
                )}

                { esNuevo && (
                    <AltaProducto cerrarDialogo={cerrarDialogo} producto={producto}></AltaProducto>
                )}
            </dialog>
        </>
    );
};

export default ProductoStockPopup;