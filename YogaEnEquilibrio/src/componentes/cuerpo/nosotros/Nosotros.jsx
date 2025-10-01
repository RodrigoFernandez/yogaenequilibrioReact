import { Descripcion } from "./Descripcion";
import '../../../styles/nosotros.css'

const articulos = [
    {
        texto: "Somos una tienda online especializada en productos de yoga pensados para acompañarte en cada etapa de tu práctica.",
        imagen: "/img/yoga_05.svg"
    },
    {
        texto: "Ofrecemos productos seleccionados con cuidado: funcionales, duraderos y estéticamente armoniosos.",
        imagen: "/img/yoga_03.svg"
    },
    {
        texto: "Somos un espacio donde podes encontrar todo lo que necesitás para conectar con tu cuerpo, tu respiración y tu energía.",
        imagen: "/img/yoga_06.svg"
    }
];

export function Nosotros() {
    return (
        <section className="nosotros">
            <h2>Sobre Yoga en equilibrio</h2>
            <Descripcion articulos={articulos}></Descripcion>
        </section>
    );
}