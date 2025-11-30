import { useProductos } from '../../../../contextos/ProductosContext';
import style from './ListaStockPie.module.css';
import anteriorIcon from '/img/anterior.svg';
import siguienteIcon from '/img/siguiente.svg';

const NavegadorPagina = ({paginaActual, totalPaginas, cambiarPagina}) => {

    return (
        <div className={style['navegador-pagina']}>
            <button className={`boton ${style['boton-navegador']}`} onClick={() => cambiarPagina(paginaActual-1)} disabled={paginaActual === 1}>
                <img className={style['boton-navegador-img']} src={anteriorIcon} alt="Anterior" />
            </button>
            {Array.from({length: totalPaginas}, (_, i) => (
                <button className={`boton ${style['boton-navegador']} ${style['boton-navegador-nro-pag']}`} key={i+1} onClick={() => cambiarPagina(i+1)}>{i+1}</button>
            ))}
            <button className={`boton ${style['boton-navegador']}`} onClick={() => cambiarPagina(paginaActual+1)} disabled={paginaActual === totalPaginas}>
                <img className={style['boton-navegador-img']} src={siguienteIcon} alt="Siguiente" />
            </button>
        </div>
    );
};


const ListaStockPie = () => {
    const {stock, paginaActual, totalPaginas, cambiarPagina} = useProductos();

    return (
        <div className={style['lista-stock-pie']}>
            <NavegadorPagina paginaActual={paginaActual} totalPaginas={totalPaginas} cambiarPagina={cambiarPagina}></NavegadorPagina>
        </div>
    );
};

export default ListaStockPie;