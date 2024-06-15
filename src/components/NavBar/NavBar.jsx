import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './NavBar.module.css'; // Arquivo CSS de módulos
/*import Temas from './Temas'*/
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  const handleScrollToSobre = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const sobreElement = document.getElementById('sobre');
        if (sobreElement) {
          sobreElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure the page has navigated
    } else {
      const sobreElement = document.getElementById('sobre');
      if (sobreElement) {
        sobreElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar fixed-top navbar-expand-lg ${scrolled ? 'navbar-light bg-light' : 'navbar-light bg-transparent'}`;

  return (
    <nav className={navbarClasses}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/img/logo.png" alt="Logo" className={styles.navbarLogo} />
          Agroconnect
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenuVisibility}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`}>
          <div className="mx-auto d-flex align-items-center justify-content-center">
            <ul className={`navbar-nav ${styles.menu}`}>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className="nav-link" to="/" activeClassName={styles.active}>
                  <i className={`fas fa-home ${styles.iconLarge}`}></i> Home
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <span className="nav-link" onClick={handleScrollToSobre} style={{ cursor: 'pointer' }}>
                  <i className={`fas fa-info-circle ${styles.iconLarge}`}></i> Sobre
                </span>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className="nav-link" to="/login" activeClassName={styles.active}>
                  <i className={`fas fa-sign-in-alt ${styles.iconLarge}`}></i> Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex ms-auto">
  {/*<Temas></Temas>*/}
  </div>
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className={`fas fa-search ${styles.iconLarge}`}></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
