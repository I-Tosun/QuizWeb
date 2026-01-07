import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
           <ul>
               <li>Copyright&copy; 2025</li>
               <li><a href="/privacy-policy" >Privacy Pollicy</a></li>
               <li>
                   <a href="/About us">About us</a></li>
               <li>
                   <a href="/contact">
                       Contact <i className={"fas fa-envelope"}></i></a></li>
           </ul>
        </footer>
    );
};

export default Footer;