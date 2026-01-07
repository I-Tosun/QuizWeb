import React from 'react';
import './styles/General.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import QuizCard from './components/QuizCard.jsx';
import Footer from './components/Footer';

const App = () => {
    return (
        <div id="root">
            <Navbar />
            <Header />
            <QuizCard />
            <Footer />
        </div>
    );
};

export default App;