import { Descripcion } from "./Descripcion";
import style from "./Nosotros.module.css";
import { articulos, descripcionMeta } from "../../../data/nosotros.json";

export function Nosotros() {
    return (
        <>
            <meta name="description" content={descripcionMeta}></meta>
            <section className={style.nosotros}>
                <h2>Sobre Yoga en equilibrio</h2>
                <Descripcion articulos={articulos}></Descripcion>
            </section>
        </>
    );
}