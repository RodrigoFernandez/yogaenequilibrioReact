const opcionesMenu = [
    {
        id: "productos",
        link: "/",
        texto: "Productos"
    },
    {
        id: "carrito",
        link: "/",
        //texto: 'Carrito de compra<span id="contador-carrito" className="contador-carrito">0</span>'
        texto: 'Carrito de compra'
    },
    {
        id: "nosotros",
        link: "/",
        texto: "Sobre Yoga en equilibrio"
    },
    {
        id: "contacto",
        link: "/",
        texto: "Contacto"
    }
];

function OpcionMenu({children, link}){
    return <li><a href={link}>{children}</a></li>;
}

export function MenuCabecera(){
    return <nav className="menu">
                <input type="checkbox" id="menu-toggle" className="menu-toggle"></input>
                <label htmlFor="menu-toggle" className="menu-hamburguesa">
                    ☰
                </label>
                <ul>
                    {
                        opcionesMenu.map((opcion) => (
                            <OpcionMenu key={opcion.id} link={opcion.link}>
                                {opcion.texto}
                            </OpcionMenu>
                        ))
                    }
                </ul>
            </nav>;
}