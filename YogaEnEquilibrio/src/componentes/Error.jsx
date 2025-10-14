import style from './Error.module.css';

export const Error = ({mensaje}) => {
    return (
        <main className="principal">
            <section className={style.error}>
                <div>{mensaje}</div>
            </section>
        </main>
    );
};