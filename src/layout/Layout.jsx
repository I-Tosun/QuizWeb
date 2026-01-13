import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Layout.css";


const Layout = ({ children }) => {
    return (
        <div className= "layout">
            <Navbar />
            <Header/>
            <main className= "layout_main">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;