import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeDropdown = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Lógica para alternar entre os modos escuro e claro
  };

  return (
    <div className="dropdown">
      <button className="btn btn-dark dropdown-toggle" type="button" id="darkModeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {darkMode ? 'Clarear' : 'Escurecer'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="darkModeDropdown">
        <li>
          <button className="dropdown-item" onClick={toggleDarkMode}>
            {darkMode ? 'Mudar para Modo Escuro' : 'Mudar para Modo Claro'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DarkModeDropdown;
