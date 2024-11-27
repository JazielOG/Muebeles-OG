import { useState } from "react";
import "./Menu.styles.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <a href="/coches" className="menu-link">
          Industriales
        </a>
        <a href="/bedrooms" className="menu-link">
          Recamaras
        </a>
        <a href="/stove" className="menu-link">
          Cocinas
        </a>
        <a href="/living" className="menu-link">
          Salas
        </a>
        <a href="/dining" className="menu-link">
          Comedores
        </a>
      </div>
    </div>
  );
};

export { Menu };
