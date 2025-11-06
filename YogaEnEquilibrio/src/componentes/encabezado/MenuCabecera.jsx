import { useLocation } from "react-router-dom";
import OpcionMenu from "./OpcionMenu.jsx";
import style from './MenuCabecera.module.css';
import { useCarrito } from '../../contextos/CarritoContext.jsx';

export function MenuCabecera() {
    const { carrito, getTotalItems } = useCarrito();
    const location = useLocation();

    return (<nav className={style.menu}>
                <input type="checkbox" id="menu-toggle" className={style['menu-toggle']}></input>
                <label htmlFor="menu-toggle" className={style['menu-hamburguesa']}>
                    ☰
                </label>
                <ul>
                    <OpcionMenu location={location} to="/">Inicio</OpcionMenu>
                    <OpcionMenu location={location} to="/productos">Productos</OpcionMenu>
                    <OpcionMenu location={location} to="/carrito">Carrito de compra <span id="contador-carrito" className={style['contador-carrito']}>{carrito.length > 0 ? getTotalItems() : 0}</span></OpcionMenu>
                    <OpcionMenu location={location} to="/nosotros">Sobre Yoga en equilibrio</OpcionMenu>
                    <OpcionMenu location={location} to="/contacto">Contacto</OpcionMenu>
                </ul>
            </nav>);
}