import { Articulo } from "./Articulo";
import { LadoIzquierdo } from "./LadoIzquierdo";
import { LadoDerecho } from "./LadoDerecho";
import style from './Descripcion.module.css';

export function Descripcion({articulos}) {
    
    return ( 
        <div className={style['nosotros-descripcion']}>
            <Articulo claseArticulo={style.impar}>
                <LadoIzquierdo claseLado={style.izquierda}>
                    <p>{articulos[0].texto}</p>
                </LadoIzquierdo>
                <LadoDerecho claseLado={style.derecha}>
                    <img src={articulos[0].imagen}></img>
                </LadoDerecho>
            </Articulo>
            <Articulo claseArticulo={`${style.par} ${style['restar-margen-superior']}`}>
                <LadoIzquierdo claseLado={style.izquierda}>
                    <img src={articulos[1].imagen}></img>
                </LadoIzquierdo>
                <LadoDerecho claseLado={style.derecha}>
                    <p>{articulos[1].texto}</p>
                </LadoDerecho>
            </Articulo>
            <Articulo claseArticulo={`${style.impar} ${style['restar-margen-superior']}`}>
                <LadoIzquierdo claseLado={style.izquierda}>
                    <p>{articulos[2].texto}</p>
                </LadoIzquierdo>
                <LadoDerecho claseLado={style.derecha}>
                    <img src={articulos[2].imagen}></img>
                </LadoDerecho>
            </Articulo>
        </div>
        );
}