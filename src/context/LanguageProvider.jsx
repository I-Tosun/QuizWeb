import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../helpers/languages";

function LanguageContextProvider({ children }) {

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "NL"
    );

    function changeLanguage(langCode) {
        setLanguage(langCode);
        localStorage.setItem("language", langCode);
    }

    function t(key) {
        return translations[language][key] || key;
    }

    return (
        <LanguageContext.Provider value={{
            language,
            changeLanguage,
            t
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;