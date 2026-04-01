import "../assets/styles/Header.css";
import { t } from "../helpers/translate";

const Header = () => {
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
