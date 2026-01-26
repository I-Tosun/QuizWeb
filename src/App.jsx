import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import {useState} from "react";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
      <>
          {showLogin && <Login onClose={() => setShowLogin(false)} />}
          {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}

          <div style = {{padding:'10px'}}>
              <button onClick={()=>setShowLogin(true)}>Test Login</button>
              <button onClick={()=>setShowSignUp(true)}>Test Sign Up</button>
          </div>

        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/quiz" element={<Quiz/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<AboutUs/>} />
                </Routes>
            </Layout>
        </Router>
      </>
    );
}

export default App;