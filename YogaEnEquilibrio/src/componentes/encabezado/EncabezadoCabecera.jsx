import style from './EncabezadoCabecera.module.css';

function LogoEncabezado({linkHome, logo}){
    return <div className={style.logo}>
                <a href={linkHome}>
                    <img src={logo} alt="logo"></img>
                </a>
            </div>;
}

function TituloEncabezado({children, titulo}){
    return <div className={style.titulo}>
                <h1>{titulo}</h1>
                <p>{children}</p>
            </div>;
}

export function EncabezadoCabecera(){
    return <div className={style['encabezado-cabecera']}>
                <LogoEncabezado linkHome="/" logo="img/logo.svg"></LogoEncabezado>
                <TituloEncabezado titulo="Yoga en equilibrio">
                    Conectá cuerpo y mente con productos pensados para vos
                </TituloEncabezado>
        </div>;
}