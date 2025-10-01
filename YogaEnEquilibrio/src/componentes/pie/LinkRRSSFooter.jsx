
export function LinkRRSSFooter({link, imagen, alter}){
    return <a href={link}>
                    <img src={imagen} alt={alter}></img>
                </a>;
}
