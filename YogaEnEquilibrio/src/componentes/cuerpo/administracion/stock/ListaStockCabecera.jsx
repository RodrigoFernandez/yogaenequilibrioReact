import style from './Stock.module.css';

const ListaStockCabecera = () => {
    return (
        <div className={style['lista-stock-cabecera']}>
            <div className={style['lista-stock-cabecera-titulo']}>ID</div>
            <div className={style['lista-stock-cabecera-titulo']}>Nombre</div>
            <div className={style['lista-stock-cabecera-titulo']}>Descripción</div>
            <div className={style['lista-stock-cabecera-titulo']}>Precio</div>
            <div className={style['lista-stock-cabecera-titulo']}>Novedad</div>
            <div className={style['lista-stock-cabecera-titulo']}>Destacado</div>
            <div className={style['lista-stock-cabecera-titulo']}>Imágen</div>
            <div className={style['lista-stock-cabecera-titulo-acciones']}></div>
        </div>
    );
}

export default ListaStockCabecera;