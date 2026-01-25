import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/quiz" element={<Quiz/>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;