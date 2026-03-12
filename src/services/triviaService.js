import { foodQuestions } from "../helpers/foodQuestions";

const categoryMap = {
    algemeen: 9,
    sport: 21,
    film: 11,
    muziek: 12,
    geografie: 22,
    geschiedenis: 23,
    kunst: 25
};

export const fetchQuizQuestions = async (category) => {

    // ⭐ BELANGRIJK:
    // Als de categorie eten-drinken is → gebruik lokale vragen
    if (category === "eten-drinken") {
        return foodQuestions;
    }

    const categoryId = categoryMap[category];

    // categorie bestaat niet
    if (!categoryId) {
        return [];
    }

    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=15&category=${categoryId}&type=multiple`
        );

        const data = await response.json();

        if (data.response_code === 0) {
            return data.results;
        }

        return [];

    } catch (error) {
        console.error("API fout:", error);
        return [];
    }
};
