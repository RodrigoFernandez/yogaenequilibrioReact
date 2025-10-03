import { Descripcion } from "./Descripcion";
import '../../../styles/nosotros.css'
import { articulos } from "../../../data/nosotros.json";

export function Nosotros() {
    return (
        <section className="nosotros">
            <h2>Sobre Yoga en equilibrio</h2>
            <Descripcion articulos={articulos}></Descripcion>
        </section>
    );
}