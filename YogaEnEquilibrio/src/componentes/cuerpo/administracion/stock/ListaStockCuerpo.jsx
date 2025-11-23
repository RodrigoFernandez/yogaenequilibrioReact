import { useState } from 'react';
import { useProductos } from '../../../../contextos/ProductosContext';
import style from './Stock.module.css'
import ProductoStock from './ProductoStock';
import ProductoStockPopup from './ProductoStockPopup';
import ConfirmacionBajaPopup from './ConfirmacionBajaPopup';
import { ToastContainer } from 'react-toastify';

const ListaStockCuerpo = () => {
    const {stockPaginado} = useProductos();
    const [esDialogoAbierto, setEsDialogoAbierto] = useState(false);
    const [unProducto, setUnProducto] = useState(null);
    const [esConfirmacionAbierta, setEsConfirmacionAbierta] = useState(false);

    const cerrarDialogo = () => {
        setEsDialogoAbierto(false);
        setUnProducto(null);
    };

    const cerrarConfirmacion = () => {
        setEsConfirmacionAbierta(false);
        setUnProducto(null);
    }

    const mostrarProducto = (e, unProducto) => {
        e.preventDefault();
        setEsDialogoAbierto(true);
        setUnProducto(unProducto);
    };

    const confirmarBajaProducto = (productoBaja) => {
        const url = `https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productos/${productoBaja.id}`;

        // TODO ver si esto funciona correctamente
        //fetch(url,
        fetch("https://68d32750cc7017eec5461dcb.mockapi.io/api/v1/productosPrueba",
            {
                method: "delete",
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            
            if (response.ok) {
                toast.success("Producto dado de baja con éxito.");
                cerrarConfirmacion();
            } else {
                console.error(response);
                throw "Error al dar de baja el producto.";
            }
        }).catch(error => {
            toast.error(error + " Aguarde un momento e intente nuevamente.");
        });
    };

    const bajaProducto = (e, productoBaja) => {
        e.preventDefault();

        setEsConfirmacionAbierta(true);
        setUnProducto(productoBaja);
    };

    const acciones = [{nombre: 'mostrar', clase: 'mostrar', handler: mostrarProducto}, {nombre: 'baja', clase: 'baja', handler: bajaProducto}];

    return (
        <div>
            <div className={style['lista-stock-cuerpo']}>
                {stockPaginado.length > 0 ?
                    (stockPaginado.map((producto) => (
                            <ProductoStock key={producto.id} producto={producto} acciones={acciones}></ProductoStock>
                        ))
                    )
                    : ( <div>No hay productos disponibles.</div>)
                }
            </div>
            <ProductoStockPopup esDialogoAbierto={esDialogoAbierto} producto={unProducto} cerrarDialogo={cerrarDialogo} esNuevo={false}></ProductoStockPopup>
            <ConfirmacionBajaPopup esConfirmacionAbierta={esConfirmacionAbierta} producto={unProducto} cerrarConfirmacion={cerrarConfirmacion} confirmarBaja={confirmarBajaProducto}></ConfirmacionBajaPopup>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default ListaStockCuerpo;