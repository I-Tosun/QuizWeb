import { useState } from "react";
import "../assets/styles/Contact.css";
import { sendMessage } from "../services/messageService";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendMessage(name, email, message);
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="contact_page">
            <div className="contact_container">

                <header className="contact_header">
                    <h1>Neem contact op met ons</h1>
                    <p>Gebruik het onderstaande formulier om ons een bericht te sturen.</p>
                </header>

                <form className="contact_form" onSubmit={handleSubmit}>

                    <div className="form_group">
                        <label htmlFor="name">Uw naam</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Uw naam"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                    </div>

                    <div className="form_group">
                        <label htmlFor="email">Uw e-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Uw e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>

                    <div className="form_group">
                        <label htmlFor="message">Reactie voor ons</label>
                        <textarea
                            id="message"
                            placeholder="Schrijf hier uw bericht..."
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required/>
                    </div>

                    {status === "success" && (
                        <p className="contact_success">Bericht succesvol verstuurd!</p>
                    )}

                    {status === "error" && (
                        <p className="contact_error">Versturen mislukt, probeer opnieuw.</p>
                    )}

                    <button type="submit" className="contact_button">
                        Verstuur bericht
                    </button>

                </form>

            </div>
        </section>
    );
};

export default Contact;