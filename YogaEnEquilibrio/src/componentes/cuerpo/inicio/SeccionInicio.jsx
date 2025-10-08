import Exibidor from "./Exibidor";
import { ItemExibidorDetalle } from "./ItemExibidor";

const SeccionInicio = ({clase, titulo, claseExibidor, claseItem, productos}) => {
  return (
    <section className={clase}>
        <h2>{titulo}</h2>
        <Exibidor clase={claseExibidor}>
            {productos.map((producto) => (
                <ItemExibidorDetalle key={producto.id} clase={claseItem} item={producto}></ItemExibidorDetalle>
            ))}
        </Exibidor>
    </section>
  );
};

export default SeccionInicio;