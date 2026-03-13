import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { useState } from "react";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ScoreList from "./pages/ScoreList.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageQuizzes from "./pages/admin/ManageQuizzes";
import ManageScores from "./pages/admin/ManageScores";
import ManageUsers from "./pages/admin/ManageUsers";


function App() {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
            {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}

            <Router>
                <Layout
                    openLogin={() => setShowLogin(true)}
                    openSignUp={() => setShowSignUp(true)}
                >
                    <Routes>
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/admin/quizzes" element={<ManageQuizzes />} />
                        <Route path="/admin/scores" element={<ManageScores />} />
                        <Route path="/admin/users" element={<ManageUsers />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz/:category" element={<Quiz />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/scores" element={<ScoreList />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
