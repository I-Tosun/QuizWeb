import "../assets/styles/AboutUs.css";

//Privacy policy page of quizweb
const PrivacyPolicy = () => {
    return (
        <section className="about_page">
            <div className="about_container">

                <h1>Privacy Policy</h1>

                <p>
                    Bij <strong>Quizweb</strong> hechten we veel waarde aan de privacy
                    van onze gebruikers. In deze verklaring leggen we uit welke gegevens
                    we verzamelen en hoe we deze gebruiken.
                </p>

                <h2>Gegevens die we verzamelen</h2>
                <p>
                    Bij registratie verzamelen we een e-mailadres en een schermnaam.
                    Daarnaast slaan we quizscores op om de scorelijst bij te houden.
                    Contactberichten via het contactformulier worden bewaard voor
                    administratieve doeleinden.
                </p>

                <h2>Gebruik van gegevens</h2>
                <p>
                    De verzamelde gegevens worden uitsluitend gebruikt voor het
                    functioneren van de applicatie. We delen geen gegevens met
                    derden en gebruiken ze niet voor commerciële doeleinden.
                </p>

                <h2>Beveiliging</h2>
                <p>
                    Gebruikersgegevens worden beveiligd opgeslagen via de NOVI
                    Dynamic API. Wachtwoorden worden niet in leesbare vorm opgeslagen.
                </p>

                <h2>Contact</h2>
                <p>
                    Heb je vragen over deze privacy policy? Neem dan contact op via
                    het <a href="/contact">contactformulier</a>.
                </p>

                <p className="about_team">
                    <strong>Quizweb Team</strong>
                </p>

            </div>
        </section>
    );
};

export default PrivacyPolicy;