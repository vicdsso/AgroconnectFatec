import React, { useEffect, useState } from "react";
import styles from './NavBar.module.css'; 
import { NavLink } from 'react-router-dom';

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

  let navbarClasses = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;

  return (
    <div className={navbarClasses}>
      <div className={styles["top-bar"]}>
        <img src="/img/logo.png" alt="Logo" className={styles.logo} />
        <h4 className={styles.agroconnect}>Agroconnect</h4>
      
        <ul className={`${styles.menu} ${menuVisible ? styles["menu-visible"] : styles["menu-hidden"]}`}>
          <li><NavLink to="/" activeClassName={styles.active}>Home</NavLink></li>
          <li><NavLink to="/sobre" activeClassName={styles.active}>Sobre</NavLink></li>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>Publicações</a>
            <div className={styles["dropdown-content"]}>
              <NavLink to="/maquinas" activeClassName={styles.active}>Máquinas</NavLink>
              <NavLink to="/servicos" activeClassName={styles.active}>Serviços</NavLink>
              <NavLink to="/produtos" activeClassName={styles.active}>Produtos</NavLink>
            </div>
          </li>
          <li>
            <input type="checkbox" id="search-toggle" className={styles["search-toggle"]} />
            <div className={styles["search-bar"]}>
              <label htmlFor="search-toggle" className={styles["search-icon"]}></label>
              <input type="text" placeholder="Pesquisar..." className={styles["search-input"]} />
            </div>
          </li>
          <li><NavLink to="/login" activeClassName={styles.active}>Login</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
