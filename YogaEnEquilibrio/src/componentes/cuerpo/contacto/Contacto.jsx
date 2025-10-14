import BotoneraConsulta from "./BotoneraConsulta";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../../../styles/contacto.css';
import style from './Contacto.module.css';

export const Contacto = () => {
    const navegante = useNavigate();

    const getDefaultMensajeContacto = () => {
        return {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        };
    };

    const [mensajeContacto, setMensajeContacto] = useState(getDefaultMensajeContacto());
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(false);

    const asignarNombre = (e) => {
        setMensajeContacto({...mensajeContacto, nombre: e.target.value});
    }

    const asignarEmail = (e) => {
        setMensajeContacto({...mensajeContacto, email: e.target.value});
    }

    const asignarTelefono = (e) => {
        setMensajeContacto({...mensajeContacto, telefono: e.target.value});
    }

    const asignarMensaje = (e) => {
        setMensajeContacto({...mensajeContacto, mensaje: e.target.value});
    }

    const enviarConsulta = (e) => {
        e.preventDefault();
        
        setEnviando(true);

        fetch("https://formspree.io/f/mjkwgkov",
            {
                method: "post",
                body: JSON.stringify(mensajeContacto),
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.ok) {
                borrarCampos(); // Resetea el formulario
                navegante('/gracias'); // Redirige a la página de agradecimiento
            } else {
                setError(true);
            }
        }).catch(error => {
            setError(true);
        }).finally(() => {
            setEnviando(false);
        });
    };

    const borrarCampos = (e) => {
        setMensajeContacto(getDefaultMensajeContacto());1
    }

    return (
        <section className={style.contacto}>
            <h2>Contacto</h2>

            <div className={style['contacto-form']}>
                <div></div>
                <form onSubmit={enviarConsulta} onReset={borrarCampos}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" required value={mensajeContacto.nombre} onChange={asignarNombre}></input>
                    <label htmlFor="email" >Email:</label>
                    <input type="email" name="email" required value={mensajeContacto.email} onChange={asignarEmail}></input>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" name="telefono" value={mensajeContacto.telefono} onChange={asignarTelefono}></input>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea name="mensaje" rows={10} required  value={mensajeContacto.mensaje} onChange={asignarMensaje}></textarea>
                    {
                        !enviando && <BotoneraConsulta></BotoneraConsulta>
                    }
                    {
                        enviando && <div className={style.enviando}><img src="/img/circulo_carga.svg" alt="Cargando..."></img></div>
                    }
                    {
                        error && <div className={`${style['mensaje-error']} ${style.mensajeVisible}`} id="mensajeErrorEnvio">
                            <p>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>
                        </div>
                    }
                </form>
            </div>
        </section>
    )
};
