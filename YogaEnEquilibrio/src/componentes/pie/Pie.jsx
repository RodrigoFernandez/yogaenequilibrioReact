import {LinkRRSSFooter} from './LinkRRSSFooter.jsx'
import { redes } from "../../data/pie.json";
import style from './Pie.module.css';

export function Pie(){
    return <footer className={style.pie}>
        <div className={style['footer-redes']}>
            {
                redes.map((rs) => (
                    <LinkRRSSFooter key={rs.red} link={rs.link} imagen={`/${rs.imagen}`} alter={rs.red}></LinkRRSSFooter>
                ))
            }            
        </div>
        <div className={style['footer-poweredby']}>
            <div></div>
            <div className={style['footer-poweredby-centro']}>
                <p>&copy; 2025 Yoga en equilibrio. Todos los derechos reservados.</p>
                <p>Desarrollado por Fernandez Rodrigo</p>
            </div>
            <div></div>
        </div>
      </footer>;
}