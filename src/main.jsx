import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import ScoreContextProvider from "./context/ScoreProvider.jsx";
import LanguageContextProvider from "./context/LanguageProvider.jsx";
import AuthContextProvider from "./context/AuthProvider.jsx";
import QuizProvider from "./context/QuizProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <AuthContextProvider>
                <LanguageContextProvider>
                    <QuizProvider>
                        <ScoreContextProvider>
                            <App />
                        </ScoreContextProvider>
                    </QuizProvider>
                </LanguageContextProvider>
            </AuthContextProvider>
        </Router>
    </StrictMode>
);