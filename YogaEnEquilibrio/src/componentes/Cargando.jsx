import style from './Cargando.module.css';

export const Cargando = () => {
    return (
        <main className="principal">
            <section className={style.cargando}>
                <img src="/img/circulo_carga.svg" alt="Cargando..."></img>
            </section>
        </main>
    );
};