import { useLocation } from "react-router-dom";
import OpcionMenu from "./OpcionMenu.jsx";
import style from './MenuCabecera.module.css';

export function MenuCabecera({carrito}) {
    const location = useLocation();

    const sumarioCarrito = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    };

    return (<nav className={style.menu}>
                <input type="checkbox" id="menu-toggle" className={style['menu-toggle']}></input>
                <label htmlFor="menu-toggle" className={style['menu-hamburguesa']}>
                    ☰
                </label>
                <ul>
                    <OpcionMenu location={location} to="/">Inicio</OpcionMenu>
                    <OpcionMenu location={location} to="/productos">Productos</OpcionMenu>
                    <OpcionMenu location={location} to="/carrito">Carrito de compra <span id="contador-carrito" className={style['contador-carrito']}>{carrito.length > 0 ? sumarioCarrito() : 0}</span></OpcionMenu>
                    <OpcionMenu location={location} to="/nosotros">Sobre Yoga en equilibrio</OpcionMenu>
                    <OpcionMenu location={location} to="/contacto">Contacto</OpcionMenu>
                </ul>
            </nav>);
}