export const Error = ({mensaje}) => {
    return (
        <main className="principal">
            <section className="error">
                <div>{mensaje}</div>
            </section>
        </main>
    );
};