import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [language, setLanguage] = useState("NL");

    return (
        <nav className={'navbar'}>
            <div className='navbar_left'>
                <img
                    src={logo}
                    alt='Quiz logo'
                    className={"navbar_logo"}
                />

              <div className='menu'>
                <button
                    className='menu_text'
                    onClick={()=>setMenuOpen(!menuOpen)}
                >
                    Menu <span className={'menu_arrow'}>▼</span>
                </button>

                {menuOpen && (
                    <ul className={'dropdown'}>
                      <li>
                          <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                          </Link>
                      </li>

                      <li>
                          <Link to="quiz?category=algemeen" onClick={() => setMenuOpen(false)}>
                              Algemeen
                          </Link>
                      </li>

                      <li>Sport</li>
                      <li>Film</li>
                      <li>Eten & Drinken</li>
                      <li>Muziek</li>
                      <li>Geografie</li>
                      <li>Kunst</li>
                      <li>Geschiedenis</li>
                      <li>Scorelijst</li>
                      <li>Contact</li>
                    </ul>
                )}
              </div>
            </div>

            <input
                type='text'
                className='search'
                placeholder='Search quizzes'
            />

            <div className='navbar_right'>
                <button className={'nav-text'}>Sign up</button>
                <button className={'nav-text'}>Login</button>
                <div className='language'>
                    <button
                        className='language_switch'
                        onClick={()=>setLanguageOpen(!languageOpen)}
                    >
                        {language}
                        <span className={'language_arrow'}>▼</span>
                    </button>

                    {languageOpen && (
                        <ul className={'dropdown'}>
                            <li onClick={()=> {setLanguage('NL'); setLanguageOpen(false); }}>
                                Nederlands
                            </li>
                            <li onClick={()=> {setLanguage('EN'); setLanguageOpen(false); }}>
                                English
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;