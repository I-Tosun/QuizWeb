import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import {useState} from "react";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ScoreList from "./pages/ScoreList.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
      <>
          {showLogin && <Login onClose={() => setShowLogin(false)} />}
          {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}


        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/quiz/:category" element={<Quiz/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/scores" element={<ScoreList />} />
                </Routes>
            </Layout>
        </Router>
      </>
    );
}

export default App;