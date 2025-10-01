import { Articulo } from "./Articulo";
import { LadoIzquierdo } from "./LadoIzquierdo";
import { LadoDerecho } from "./LadoDerecho";

export function Descripcion({articulos}) {
    
    return ( 
        <div className="nosotros-descripcion">
            <Articulo claseArticulo="impar">
                <LadoIzquierdo>
                    <p>{articulos[0].texto}</p>
                </LadoIzquierdo>
                <LadoDerecho>
                    <img src={articulos[0].imagen}></img>
                </LadoDerecho>
            </Articulo>
            <Articulo claseArticulo="par restar-margen-superior">
                <LadoIzquierdo>
                    <img src={articulos[1].imagen}></img>
                </LadoIzquierdo>
                <LadoDerecho>
                    <p>{articulos[1].texto}</p>
                </LadoDerecho>
            </Articulo>
            <Articulo claseArticulo="impar restar-margen-superior">
                <LadoIzquierdo>
                    <p>{articulos[2].texto}</p>
                </LadoIzquierdo>
                <LadoDerecho>
                    <img src={articulos[2].imagen}></img>
                </LadoDerecho>
            </Articulo>
        </div>
        );
}