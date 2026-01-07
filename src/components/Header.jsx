import React from 'react';
import '../styles/Header.css';


const Header = () => {
    return (
        <header>
            <h1>Welkom bij onze QuizWebsite!</h1>
            <p  className={'subtext'}>Ben jij klaar om je kennis te testen?</p>
            <p className={'subtext'}>Doe mee en leer nieuwe dingen!</p>
        </header>
    );
};

export default Header;