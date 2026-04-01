import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";

import logo from "../assets/images/logo.png";

import { menuItems } from "../helpers/menuItems";
import { languages } from "../helpers/languages";
import { t } from "../helpers/translate";

import {
    getToken,
    logoutUser,
    getUserFromToken,
    isAdmin
} from "../services/authService";

const Navbar = ({ openLogin, openSignUp }) => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "NL"
    );

    const token = getToken();
    const username = getUserFromToken();

    // Ref for click outside
    const menuRef = useRef(null);
    const langRef = useRef(null);

    // click outside close
    useEffect(() => {
        const handleClick = (e) => {

            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }

            if (langRef.current && !langRef.current.contains(e.target)) {
                setLanguageOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    // Language switch
    const changeLanguage = (langCode) => {
        setLanguage(langCode);
        localStorage.setItem("language", langCode);
        setLanguageOpen(false);
        window.location.reload();
    };

    // Search
    const handleSearch = (e) => {

        if (e.key !== "Enter") return;

        const value = searchTerm.toLowerCase().trim();

        const match = menuItems.find(item =>
            item.path.includes(value)
        );

        if (match) {
            navigate(match.path);
            setSearchTerm("");
        } else {
            alert("Quiz categorie niet gevonden");
        }
    };

    return (
        <nav className="navbar">

            {/* Left */}
            <div className="navbar_left">

                <img
                    src={logo}
                    alt="Quiz logo"
                    className="navbar_logo"/>

                <div className="menu" ref={menuRef}>

                    <button
                        className="menu_text"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {t("menu")}
                        <span className="menu_arrow">▼</span>
                    </button>

                    {menuOpen && (
                        <ul className="dropdown">

                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}>
                                        {t(item.key)}
                                    </Link>
                                </li>
                            ))}

                            {isAdmin() && (
                                <li>
                                    <Link
                                        to="/admin"
                                        onClick={() => setMenuOpen(false)}>
                                        Admin
                                    </Link>
                                </li>
                            )}

                        </ul>
                    )}

                </div>

            </div>


            {/* Search */}
            <input
                type="text"
                className="search"
                placeholder={t("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}/>


            {/* Right */}
            <div className="navbar_right">

                {!token ? (
                    <>
                        <button
                            className="nav-text"
                            onClick={openSignUp}>
                            {t("signup")}
                        </button>

                        <button
                            className="nav-text"
                            onClick={openLogin}>
                            {t("login")}
                        </button>
                    </>
                ) : (
                    <div className="user_section">

                        <span className="username">
                            {t("hello")} {username}
                        </span>

                        <button
                            className="nav-text"
                            onClick={() => {
                                logoutUser();
                                window.location.reload();
                            }}>
                            {t("logout")}
                        </button>

                    </div>
                )}

                {/* Language */}
                <div className="language" ref={langRef}>

                    <button
                        className="language_switch"
                        onClick={() => setLanguageOpen(!languageOpen)}>
                        {language}
                        <span className="language_arrow">▼</span>
                    </button>

                    {languageOpen && (
                        <ul className="dropdown">

                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}>
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