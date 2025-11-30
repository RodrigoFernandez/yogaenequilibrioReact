import style from './Stock.module.css';

const ListaStockCabecera = () => {
    return (
        <div className={style['lista-stock-cabecera']}>
            <div className={style['lista-stock-cabecera-titulo']}>ID</div>
            <div className={style['lista-stock-cabecera-titulo']}>Nombre</div>
            <div className={`${style['lista-stock-cabecera-titulo']} ${style['lista-stock-cabecera-titulo-descripcion']}`}>Descripción</div>
            <div className={style['lista-stock-cabecera-titulo']}>Precio</div>
            <div className={`${style['lista-stock-cabecera-titulo']} ${style['lista-stock-cabecera-titulo-novedad']}`}>Novedad</div>
            <div className={`${style['lista-stock-cabecera-titulo']} ${style['lista-stock-cabecera-titulo-destacado']}`}>Destacado</div>
            <div className={`${style['lista-stock-cabecera-titulo']} ${style['lista-stock-cabecera-titulo-imagen']}`}>Imágen</div>
            <div className={style['lista-stock-cabecera-titulo-acciones']}></div>
        </div>
    );
}

export default ListaStockCabecera;