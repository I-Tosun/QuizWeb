import axios from "axios";
import { foodQuestions } from "../helpers/foodQuestions";

// axios open trivia API
const TRIVIA_API = axios.create({
    baseURL: "https://opentdb.com"
});

//category mapping
const categoryMap = {
    algemeen: 9,
    sport: 21,
    film: 11,
    muziek: 12,
    geografie: 22,
    geschiedenis: 23,
    kunst: 25
};

const questionCache = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuten

let isFetching = false;

export const fetchQuizQuestions = async (category) => {

    // Local question
    if (category === "eten-drinken") {
        return foodQuestions;
    }
    const categoryId = categoryMap[category];
    if (!categoryId) return [];
    // cache key
    const cacheKey = `${category}_${categoryId}`;
    const cached = questionCache[cacheKey];
    //  cache check
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        if (import.meta.env.DEV) {
            console.log(`Cache gebruikt voor categorie: ${category}`);
        }
        return cached.questions;
    }
    if (isFetching) {
        console.log("Request geblokkeerd al bezig");
        return cached.questions || foodQuestions;
    }
    isFetching = true;

    try {
        await new Promise(resolve => setTimeout(resolve, 300));
        // axios params
        const response = await TRIVIA_API.get("/api.php", {
            params: {
                amount: 15,
                category: categoryId,
                type: "multiple"
            }
        });

        const { response_code, results } = response.data;

        if (response_code === 0) {

            const questions = results || [];
            //   save cache
            questionCache[cacheKey] = {
                questions,
                timestamp: Date.now()
            };
            return questions;
        }
        return cached.questions || foodQuestions;

    } catch (error) {
        if (error.response?.status === 429) {
            console.warn("rate limit bereikt")
        } else {
            console.error("API fout:", error);
        }
        //  cache fallback
        if (cached) {
            if (import.meta.env.DEV) {
                console.log("Fout bij ophalen, cache gebruikt als fallback");
            }
            return cached.questions;
        }
        return foodQuestions;
    } finally {
        isFetching = false;
    }
};