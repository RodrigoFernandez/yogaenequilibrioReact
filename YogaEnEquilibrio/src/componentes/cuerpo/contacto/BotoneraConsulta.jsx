import style from './BotoneraConsulta.module.css';

const BotoneraConsulta = () => {
  return (
    <div className={style.botones}>
        <button className={style.boton} type="submit">Enviar</button>
        <button className={style.boton} type="reset">Borrar</button>
    </div>
  )
}

export default BotoneraConsulta;