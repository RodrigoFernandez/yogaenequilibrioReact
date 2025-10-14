//import '../../../styles/gracias.css';
import style from './Gracias.module.css';

export function Gracias(){
    return (
        <section className={style.contacto}>
            <div className={style.agradecimiento}>
                <h3>Gracias por contactarte con nosotros. Nos pondremos en contacto a la brevedad.</h3>
            </div>
        </section>
    );
}

export function GraciasCompra(){
    return <section className={style.contacto}>
                Contacto
           </section>;
}