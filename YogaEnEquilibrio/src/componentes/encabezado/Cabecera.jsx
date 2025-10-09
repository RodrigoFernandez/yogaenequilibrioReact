import { EncabezadoCabecera } from "./EncabezadoCabecera";
import { MenuCabecera } from "./MenuCabecera";

export function Cabecera({carrito}) {
    return <header className="cabecera">
            <EncabezadoCabecera></EncabezadoCabecera>
            <MenuCabecera carrito={carrito}></MenuCabecera>
      </header>;
}