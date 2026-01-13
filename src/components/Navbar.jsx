import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/logo.png";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={'navbar'}>
            <div className='navbar_left'>
                <img
                    src={logo}
                    alt='Quiz logo'
                    className={"navbar_logo"}
                />

              <div className='menu'>
                <button
                    className='menu_text'
                    onClick={()=>setMenuOpen(!menuOpen)}
                >
                    Menu <span className={'menu_arrow'}>▼</span>
                </button>

                {menuOpen && (
                    <ul className={'dropdown'}>
                      <li>Algemeen</li>
                      <li>Sport</li>
                      <li>Film</li>
                      <li>Eten & Drinken</li>
                      <li>Muziek</li>
                      <li>Geografie</li>
                      <li>Kunst</li>
                      <li>Geschiedenis</li>
                      <li>Scorelijst</li>
                      <li>Contact</li>
                    </ul>
                )}
              </div>
            </div>

            <input
                type='text'
                className='search'
                placeholder='Search quizzes'
            />

            <div className='navbar_right'>
                <button className={'nav-text'}>Sign up</button>
                <button className={'nav-text'}>Login</button>

                <select>
                    <option>NL</option>
                    <option>EN</option>
                </select>
            </div>

        </nav>
    );
};

export default Navbar;