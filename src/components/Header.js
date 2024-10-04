import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import BARS from '../assets/bars.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="Navbar" className='navbar--main'>
        <h1 className='Logo'>at</h1>
        <img alt="" className='nav--bars' src={BARS} onClick={toggleMenu} />
        <div className={`ul ${isMenuOpen ? 'open' : ''}`}>
          <li>
              <Link to="Home" smooth={true} duration={1000} offset={-100}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={1000} offset={-50}>
                About
              </Link>
            </li>
            <li>
              <Link to="Service" smooth={true} duration={1000} offset={-100}>
                Services
              </Link>
            </li>
        </div>
        <button className='navbar--button'>
          <Link to="Contact" smooth={true} duration={1000}>
            Contact Me
          </Link>
        </button>
    </section>
  );
}

export default Header;
