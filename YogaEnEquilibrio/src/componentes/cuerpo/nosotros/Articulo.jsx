
export function Articulo({children, claseArticulo}) {
    return (
        <article className={claseArticulo}>
            {children}
        </article>
    );
}