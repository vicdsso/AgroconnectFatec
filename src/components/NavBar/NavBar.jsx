// Importe useState e useEffect no início do arquivo
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './NavBar.module.css'; // Arquivo CSS de módulos

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState('claro'); // Estado para controlar o tema selecionado
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

  const toggleTheme = (selectedTheme) => { // Função para alternar o tema
    setTheme(selectedTheme);
  };

  const navbarClasses = `navbar fixed-top navbar-expand-lg ${
    scrolled ? 'navbar-light' : 'navbar-dark'
  } ${theme === 'escuro' ? 'bg-dark text-white' : theme === 'dinamico' ? 'bg-primary text-white' : 'bg-light'}`;

  const textColorClass = theme === 'escuro' ? 'text-white' : 'text-dark'; // Classe para controlar a cor do texto

  return (
    <nav className={navbarClasses}>
      <div className="container-fluid">
        <a className={`navbar-brand ${textColorClass}`} href="/">
          <img src="/img/logo.png" alt="Logo" className={styles.navbarLogo} />
          Agroconnect
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenuVisibility}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`}>
          <div className="mx-auto d-flex align-items-center justify-content-center">
            <ul className={`navbar-nav ${styles.menu}`}>
              {/* Dropdown de tema */}
              <li className={`nav-item dropdown ${styles.navItem}`}>
                <a className={`nav-link dropdown-toggle ${textColorClass}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tema
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-item" onClick={() => toggleTheme('claro')}>Claro</span>
                  <span className="dropdown-item" onClick={() => toggleTheme('escuro')}>Escuro</span>
                  <span className="dropdown-item" onClick={() => toggleTheme('dinamico')}>Dinâmico</span>
                </div>
              </li>
              {/* Fim do dropdown */}
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className={`nav-link ${textColorClass}`} to="/" activeClassName={styles.active}>
                  <i className={`fas fa-home ${styles.iconLarge}`}></i> Home
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <span className={`nav-link ${textColorClass}`} onClick={handleScrollToSobre} style={{ cursor: 'pointer' }}>
                  <i className={`fas fa-info-circle ${styles.iconLarge}`}></i> Sobre
                </span>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className={`nav-link ${textColorClass}`} to="/login" activeClassName={styles.active}>
                  <i className={`fas fa-sign-in-alt ${styles.iconLarge}`}></i> Login
                </NavLink>
              </li>
            </ul>
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
