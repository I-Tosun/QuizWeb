import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={'navbar'}>
            <div className='navbar_left'>
              <span className='logo'>Quiz!</span>

              <div className='Menu'>
                <button className='Menu' onClick={()=>setMenuOpen(!menuOpen)}>Menu</button>
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
                <span>Sign up</span>
                <span>Login</span>
                <select>
                    <option>NL</option>
                    <option>EN</option>
                </select>
            </div>

        </nav>
    );
};

export default Navbar;