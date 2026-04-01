import { Icon } from "@iconify/react";
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>Copyright&copy; 2026</li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/about">About us</a></li>
                <li>
                    <a href="/contact">
                        Contact <Icon icon="mdi:email" width="14" style={{ verticalAlign: "middle" }} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;