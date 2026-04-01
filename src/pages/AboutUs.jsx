import "../assets/styles/AboutUs.css";

// Info page about the quizweb
const AboutUs = () => {
    return (
        <section className="about_page">
            <div className="about_container">

                <h1>Over Ons</h1>

                <p>
                    Welkom bij <strong>Quizweb</strong> — een interactieve quizwebsite
                    ontwikkeld als eindopdracht voor de Frontend opleiding bij NOVI Hogeschool.
                </p>

                <p>
                    Het doel van Quizweb is om een toegankelijke en leuke leeromgeving te bieden
                    waar gebruikers hun kennis kunnen testen op uiteenlopende onderwerpen zoals
                    sport, film, muziek, geografie en meer.
                </p>

                <p>
                    De applicatie is gebouwd met <strong>React</strong> en maakt gebruik van
                    de <strong>Open Trivia API</strong> voor quizvragen en de
                    <strong> NOVI Dynamic API</strong> voor gebruikersbeheer en scoreopslag.
                    Gebruikers kunnen zich registreren, inloggen en hun scores terugvinden
                    in de scorelijst.
                </p>

                <p>
                    Beheerders hebben toegang tot een apart admin dashboard waar zij
                    gebruikers, scores en contactberichten kunnen beheren.
                </p>

                <p>
                    Heb je vragen of feedback? Gebruik dan het{" "}
                    <a href="/contact">contactformulier</a> om ons te bereiken.
                    We horen graag van je!
                </p>

                <p className="about_team">
                    <strong>Quizweb team</strong>
                </p>

            </div>
        </section>
    );
};

export default AboutUs;