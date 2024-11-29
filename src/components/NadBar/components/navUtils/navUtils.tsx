import { IoCard } from "react-icons/io5";
import "./navUtils.styles.scss";
import { ShoppingCard } from "../ShoppingCart/ShoppingCart";
import { Favorites } from "../Favorites/Favorites";

const NavUtils = () => {
  return (
    <div className="Nav-utils">
      <a href="cards">
        <IoCard />
      </a>
      <ShoppingCard />

      <a href="react-icons/fa">
        {" "}
        <Favorites />
      </a>
    </div>
  );
};

export { NavUtils };
