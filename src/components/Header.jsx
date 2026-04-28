import "../assets/styles/Header.css";
import { useLanguage } from "../context/useLanguage";

const Header = () => {
    const { t } = useLanguage();
    return (
        <header className="header">
            <div className="header_container">
                <h1>{t("welcomeTitle")}</h1>
                <p>{t("welcomeSubtitle")}
                    <br />
                    {t("welcomeSubtitle2")}
                </p>
            </div>
        </header>
    );
};

export default Header;
