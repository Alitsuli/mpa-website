import React, {useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './style/Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MPA Rakennus
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Etusivu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projektit
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Meistä
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Ota Yhteyttä
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Ota yhteyttä</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar
