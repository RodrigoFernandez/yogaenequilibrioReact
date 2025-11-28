import { useProductos } from '../../../contextos/ProductosContext'
import style from './Inicio.module.css'

import SeccionInicio from "./SeccionInicio";

export const Inicio = () => {
    const {productos} = useProductos();
    let novedades = [];
    let destacados = [];

    if(productos){
        novedades = productos.filter((producto) => producto.esNovedad);
        destacados = productos.filter((producto) => producto.esDestacado);
    }
    
    return (
        <>
            <meta name="description" content="Explora las últimas novedades y productos destacados de Yoga en equilibrio."></meta>
            
            <SeccionInicio clase={style.novedades} titulo="Novedades" claseExibidor={style['productos-novedades']} claseItem={style['novedades-box']} claseEnlace={style['enlace-producto']} productos={novedades}></SeccionInicio>
            <SeccionInicio clase={style.destacados} titulo="Destacados" claseExibidor={style['productos-destacados']} claseItem={style['destacados-box']} claseEnlace={style['enlace-producto']} productos={destacados}></SeccionInicio>
        </>
    );
};
