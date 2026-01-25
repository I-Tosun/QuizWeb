import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Layout.css";
import {useLocation} from "react-router-dom";


const Layout = ({ children }) => {
    const location = useLocation();

    const showHeader = location.pathname === "/";

    return (
        <div className= "layout">
            <Navbar />
            {showHeader && <Header/>}
            <main className= "layout_main">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;