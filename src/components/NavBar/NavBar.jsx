import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './NavBar.module.css'; // Arquivo CSS de módulos

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
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

  const navbarClasses = `navbar fixed-top navbar-expand-lg ${scrolled ? 'navbar-light bg-light' : 'navbar-light bg-light'}`;

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName={styles.active}>
                <i className={`fas fa-home ${styles.iconLarge}`}></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre" activeClassName={styles.active}>
                <i className={`fas fa-info-circle ${styles.iconLarge}`}></i> Sobre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName={styles.active}>
                <i className={`fas fa-sign-in-alt ${styles.iconLarge}`}></i> Login
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
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
