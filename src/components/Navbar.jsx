import { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import { menuItems } from "../helpers/menuItems";
import { languages } from "../helpers/languages";

import { getToken, logoutUser, getUserFromToken } from "../services/authService";

const Navbar = ({ openLogin, openSignUp }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [language, setLanguage] = useState("NL");

    const token = getToken();
    const username = getUserFromToken();

    return (
        <nav className="navbar">

            <div className="navbar_left">

                <img
                    src={logo}
                    alt="Quiz logo"
                    className="navbar_logo"
                />

                <div className="menu">

                    <button
                        className="menu_text"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Menu <span className="menu_arrow">▼</span>
                    </button>

                    {menuOpen && (
                        <ul className="dropdown">

                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    )}

                </div>

            </div>


            <input
                type="text"
                className="search"
                placeholder="Search quizzes"
            />


            <div className="navbar_right">

                {!token ? (

                    <>
                        <button
                            className="nav-text"
                            onClick={openSignUp}
                        >
                            Sign up
                        </button>

                        <button
                            className="nav-text"
                            onClick={openLogin}
                        >
                            Login
                        </button>
                    </>

                ) : (

                    <div className="user_section">

                        <span className="username">
                            Hello {username}
                        </span>

                        <button
                            className="nav-text"
                            onClick={() => {
                                logoutUser();
                                window.location.reload();
                            }}
                        >
                            Logout
                        </button>

                    </div>

                )}

                <div className="language">

                    <button
                        className="language_switch"
                        onClick={() => setLanguageOpen(!languageOpen)}
                    >
                        {language}
                        <span className="language_arrow">▼</span>
                    </button>

                    {languageOpen && (
                        <ul className="dropdown">

                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setLanguageOpen(false);
                                    }}
                                >
                                    {lang.label}
                                </li>
                            ))}

                        </ul>
                    )}

                </div>

            </div>

        </nav>
    );
};

export default Navbar;
