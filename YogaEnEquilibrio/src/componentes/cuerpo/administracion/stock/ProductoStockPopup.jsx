import { useState, useEffect, use } from 'react';
import style from './ProductoStockPopup.module.css';
import { Portal } from '../../../../Portal';
import { toast, ToastContainer } from 'react-toastify';

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

const EditorProducto = ({ cerrarDialogo, producto }) => {
    const getDefaultProducto = () => ({
        nombre: '',     
        precio: '',
        esNovedad: false,
        esDestacado: false,
        imagen: '',
        descripcion: ''
    });

    const [productoEdicion, setProductoEdicion] = useState(producto || getDefaultProducto());
    const [errorValidacion, setErrorValidacion] = useState({});
    const [titulo, setTitulo] = useState(producto ? `${producto.nombre} (${producto.id})` : 'Nuevo Producto');
    
    const validarCampos = () => {
        let errores = {};

        if (!productoEdicion.nombre || productoEdicion.nombre.trim() === '') {
            errores.nombre = 'El nombre es obligatorio.';
        }
        
        if (!productoEdicion.precio || isNaN(productoEdicion.precio) || parseFloat(productoEdicion.precio) <= 0) { 
            errores.precio = 'El precio debe ser un número positivo.';
        }

        if (!productoEdicion.imagen || productoEdicion.imagen.trim() === '') {
            errores.imagen = 'La URL de la imagen es obligatoria.';
        }

        if (productoEdicion.descripcion
            && productoEdicion.descripcion.length > 0
            && productoEdicion.descripcion.trim() === '') {
            errores.descripcion = 'La descripción no deben ser solo espacios en blanco.';
        }

        return errores;
    };

    const persistirProducto = () =>{
        const metodo = productoEdicion.id ? "put" : "post";
        const url = "https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos" + (productoEdicion.id ? `/${productoEdicion.id}` : "");

        // TODO ver si esto funciona correctamente
        //fetch(url,
        fetch("https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productosPrueba",
            {
                method: metodo,
                body: JSON.stringify(productoEdicion),
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
            if (response.ok) {
                toast.success("Producto guardado con éxito.");
                limpiarYCerrarDialogo();
            } else {
                throw "Error al guardar el producto.";
            }
        }).catch(error => {
            toast.error(error + " Aguarde un momento e intente nuevamente.");
        });
    }

    const guardarProducto = (e) => {
        e.preventDefault();

        const rtaValidacion = validarCampos();
        setErrorValidacion(rtaValidacion)

        if(Object.keys(rtaValidacion).length == 0) {
            persistirProducto();
        }
    };

    const limpiarYCerrarDialogo = (e) => {
        if(e){
            e.preventDefault();
        }

        setProductoEdicion(getDefaultProducto());
        setErrorValidacion({})
        cerrarDialogo();
    };

    const asignarCampo = (e) => {
        const { name, value, type, checked } = e.target;
        setProductoEdicion({
            ...productoEdicion,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className={style['modal-producto-contenido']}>
            <header className={style['modal-producto-header']}>
                <h3>{titulo}</h3>
            </header>
            <div className={style['modal-producto-body']}>
                <form className={style['modal-producto-form']} onSubmit={guardarProducto} onReset={limpiarYCerrarDialogo}>
                    <div className={style['modal-producto-campos']} >
                        <div  className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <label  className={style['etiqueta-campo']} htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" value={productoEdicion.nombre} onChange={asignarCampo} required />
                            </div>
                            <div>
                                {errorValidacion.nombre && <p className={style['modal-error']}>{errorValidacion.nombre}</p>}
                            </div>
                        </div>
                        <div className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <label className={style['etiqueta-campo']} htmlFor="precio">Precio:</label>
                                <input type="number" name="precio" step="0.01" required value={productoEdicion.precio} onChange={asignarCampo} />
                            </div>
                            <div>
                                {errorValidacion.precio && <p className={style['modal-error']}>{errorValidacion.precio}</p>}
                            </div>
                        </div>
                        <div className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <label className={style['etiqueta-campo']} htmlFor="esNovedad">Es novedad:</label>
                                <div className={style['modal-checkbox']}>
                                    <input type="checkbox" name="esNovedad" checked={productoEdicion.esNovedad} onChange={asignarCampo} />
                                </div>
                            </div>
                        </div>
                        <div  className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <label className={style['etiqueta-campo']} htmlFor="esDestacado">Es destacado:</label>
                                <div className={style['modal-checkbox']}>
                                    <input type="checkbox" name="esDestacado" checked={productoEdicion.esDestacado} onChange={asignarCampo}/>
                                </div>
                            </div>
                        </div>
                        <div className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <label className={style['etiqueta-campo']} htmlFor="imagen">Imagen URL:</label>
                                <input type="url" name="imagen" required  value={productoEdicion.imagen} onChange={asignarCampo}/>
                            </div>
                            <div>
                            {errorValidacion.imagen && <p className={style['modal-error']}>{errorValidacion.imagen}</p>}
                            </div>
                        </div>
                        <div className={style['modal-producto-fila-editor']}>
                            <div className={style['modal-producto-campor-editor']}>
                                <div className={style['modal-descripcion-label']}>
                                    <label className={style['etiqueta-campo']} htmlFor="descripcion">Descripción:</label>
                                </div>
                                <textarea name="descripcion" rows={10} required  value={productoEdicion.descripcion} onChange={asignarCampo}></textarea>
                            </div>
                            <div>
                                {errorValidacion.descripcion && <p className={style['modal-error']}>{errorValidacion.descripcion}</p>}
                            </div>
                        </div>
                    </div>
                    <div className={style['modal-botonera']}>
                        <button className="boton">Guardar</button>
                        <button className="boton" onClick={cerrarDialogo}>Cancelar</button>
                        <ToastContainer></ToastContainer>
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

    useEffect(() => {
        if (!esDialogoAbierto) {
            setEsModificacion(false);
        }
    }, [esDialogoAbierto]);

    return (
        <>
        {esDialogoAbierto &&
        <Portal>
            <div className={style['modal-overlay']}></div>
            
            <div className={style['modal-producto']} open={esDialogoAbierto} aria-modal="true">
                { !esNuevo && producto && !esModificacion && (
                    <ExhibidorProducto producto={producto} cerrarDialogo={cerrarDialogo} modificar={modificarProducto}></ExhibidorProducto>
                )}

                { !esNuevo && producto && esModificacion && (
                    <EditorProducto cerrarDialogo={cerrarDialogo} producto={producto}></EditorProducto>
                )}

                { esNuevo && (
                    <EditorProducto cerrarDialogo={cerrarDialogo} producto={producto}></EditorProducto>
                )}
            </div>
        </Portal>}
        </>
    );
};

export default ProductoStockPopup;