import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/menu";
import { NavUtils } from "./components/navUtils/navUtils";

import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="/">
        <ImageFrame
          src="https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfinderbmwlogo4140436-115966_115915.png"
          alt="Logo-bmw"
          whidth="60"
        />
      </a>
      <Menu />
      <NavUtils />
    </div>
  );
};

export default NavBar;
