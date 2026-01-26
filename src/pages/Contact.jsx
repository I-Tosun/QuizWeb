import "../styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact_page">
            <div className="contact_container">
                <header className="contact_header">
                    <h1>Neem contact op met ons</h1>
                    <p>
                        Gebruik het onderstaande formulier om ons een bericht te sturen.
                    </p>
                </header>

                <form className="contact_form">
                    <div className="form_group">
                        <label htmlFor="name">Uw naam</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Uw naam"
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="email">Uw e-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Uw e-mail"
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="message">Reactie voor ons</label>
                        <textarea
                            id="message"
                            placeholder="Schrijf hier uw bericht..."
                            rows="5"
                        ></textarea>
                    </div>

                    <button type="submit" className="contact_button">
                        Verstuur bericht
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
