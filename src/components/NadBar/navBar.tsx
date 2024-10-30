import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/menu";
import { NavUtils } from "./components/navUtils/navUtils";

import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="/">
        <ImageFrame
          src="https://st4.depositphotos.com/11433486/20755/v/450/depositphotos_207552596-stock-illustration-illustration-vector-element-of-a.jpg"
          alt="Logo-bmw"
          whidth="130"
        />
      </a>
      <Menu />
      <NavUtils />
    </div>
  );
};

export default NavBar;
