import BotoneraConsulta from "./BotoneraConsulta";
import { useState } from "react";
import '../../../styles/contacto.css';

export const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviarConsulta = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}, Mensaje: ${mensaje}`);
    }

    const borrarCampos = (e) => {
        setNombre('');
        setEmail('');
        setTelefono('');
        setMensaje('');
    }

    return (
        <section className="contacto">
            <h2>Contacto</h2>

            <div className="contacto-form">
                <div></div>
                <form onSubmit={enviarConsulta} onReset={borrarCampos}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label htmlFor="email" >Email:</label>
                    <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea name="mensaje" rows={10} required  value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                    <BotoneraConsulta></BotoneraConsulta>
                    <div className="mensaje-error" style={{display: 'none'}}>
                        <p>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>
                    </div>
                </form>
            </div>
        </section>
    )
};
