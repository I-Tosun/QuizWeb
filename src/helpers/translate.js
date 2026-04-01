import { translations } from "./languages";

export const t = (key) => {
    const language = localStorage.getItem("language") || "NL";
    return translations[language][key] || key;
};
