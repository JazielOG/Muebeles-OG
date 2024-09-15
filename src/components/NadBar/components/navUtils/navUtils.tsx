import { IoCard } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import "./navUtils.styles.scss";
import { FaPaypal } from "react-icons/fa";
import { ShoppingCard } from "../ShoppingCart/ShoppingCart";

const NavUtils = () => {
  return (
    <div className="Nav-utils">
      <a href="cards">
        <IoCard />
      </a>
      <ShoppingCard />

      <a href="cards-card">
        {" "}
        <FaCarAlt />
      </a>
      <a href="react-icons/fa">
        {" "}
        <FaPaypal />
      </a>
    </div>
  );
};

export { NavUtils };
