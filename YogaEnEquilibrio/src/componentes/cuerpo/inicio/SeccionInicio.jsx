import Exibidor from "./Exibidor";
import ItemExibidor from "./ItemExibidor";

const SeccionInicio = ({clase, titulo, claseExibidor, claseItem, productos}) => {
  return (
    <section className={clase}>
        <h2>{titulo}</h2>
        <Exibidor clase={claseExibidor}>
            {productos.map((producto) => (
                <ItemExibidor key={producto.id} clase={claseItem} item={producto}></ItemExibidor>
            ))}
        </Exibidor>
    </section>
  );
};

export default SeccionInicio;