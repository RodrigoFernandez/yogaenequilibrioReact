import {LinkRRSSFooter} from './LinkRRSSFooter.jsx'

const redes = [
    {
        red: 'facebook',
        link: 'https://www.facebook.com',
        imagen: 'img/iconos/icons8-facebook-nuevo.svg'
    },
    {
        red: "instagram",
        link: "https://www.instagram.com",
        imagen: "img/iconos/icons8-instagram.svg"
    },
    {
        red: "pinterest",
        link: "https://ar.pinterest.com",
        imagen: "img/iconos/icons8-pinterest.svg"
    },
    {
        red: "reddit",
        link: "https://www.reddit.com",
        imagen: "img/iconos/icons8-reddit.svg"
    },
    {
        red: "tik-tok",
        link: "https://www.tiktok.com/es",
        imagen: "img/iconos/icons8-tik-tok.svg"
    },
    {
        red: "twitter",
        link: "https://twitter.com",
        imagen: "img/iconos/icons8-twitter.svg"
    }
];

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