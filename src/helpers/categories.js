export const categoryTranslations = {

    algemeen: {
        NL: "Algemeen",
        EN: "General"
    },

    sport: {
        NL: "Sport",
        EN: "Sport"
    },

    film: {
        NL: "Film",
        EN: "Film"
    },

    "eten-drinken": {
        NL: "Eten & Drinken",
        EN: "Food & Drinks"
    },

    muziek: {
        NL: "Muziek",
        EN: "Music"
    },

    geografie: {
        NL: "Geografie",
        EN: "Geography"
    },

    kunst: {
        NL: "Kunst",
        EN: "Art"
    },

    geschiedenis: {
        NL: "Geschiedenis",
        EN: "History"
    }

};

export const translateCategory = (category) => {

    const language = localStorage.getItem("language") || "NL";

    if (!categoryTranslations[category]) {
        return category;
    }

    return categoryTranslations[category][language];
};
