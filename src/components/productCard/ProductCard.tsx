import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductCard.styles.scss";

export interface ProductCardProps {
  id: string;
  imagesUrl: string[];
  description: string;
  price: number;
  title: string;
  quantity?: number;
  //start: number;
  //discount: number;
}

const ProductCard: FC<ProductCardProps> = ({
  imagesUrl,
  description,
  price,
  id,
}) => {
  return (
    <a className="product-card" href={`product/${id}`}>
      <img className="product-card-img" src={imagesUrl[0]} alt={""} />

      <label>{description}</label>

      <div className="produc-card-footer">
        <p>
          <label className="product-card-price">$MXN {price}</label>
        </p>
        <ButtonLink
          href=""
          className="product-card-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </a>
  );
};

export { ProductCard };
