import { EncabezadoCabecera } from "./EncabezadoCabecera";
import { MenuCabecera } from "./MenuCabecera";

export function Cabecera() {
    return <header className="cabecera">
            <EncabezadoCabecera></EncabezadoCabecera>
            <MenuCabecera></MenuCabecera>
      </header>;
}