import {LinkRRSSFooter} from './LinkRRSSFooter.jsx'
import { redes } from "../../data/pie.json";

export function Pie(){
    return <footer className="pie">
        <div className="footer-redes">
            {
                redes.map((rs) => (
                    <LinkRRSSFooter key={rs.red} link={rs.link} imagen={rs.imagen} alter={rs.red}></LinkRRSSFooter>
                ))
            }            
        </div>
        <div className="footer-poweredby">
            <div></div>
            <div className="footer-poweredby-centro">
                <p>&copy; 2025 Yoga en equilibrio. Todos los derechos reservados.</p>
                <p>Desarrollado por Fernandez Rodrigo</p>
            </div>
            <div></div>
        </div>
      </footer>;
}