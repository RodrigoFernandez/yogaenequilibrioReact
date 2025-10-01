import SeccionInicio from "./SeccionInicio";

export const Inicio = ({productos}) => {
    let novedades = [];
    let destacados = [];

    if(productos){
        novedades = productos.filter((producto) => producto.esNovedad);
        destacados = productos.filter((producto) => producto.esDestacado);
    }
    
    return (
        <>
            <SeccionInicio clase="novedades" titulo="Novedades" claseExibidor="productos-novedades" claseItem="novedades-box" productos={novedades}></SeccionInicio>
            <SeccionInicio clase="destacados" titulo="Destacados" claseExibidor="productos-destacados" claseItem="destacados-box" productos={destacados}></SeccionInicio>
        </>
    );
};
