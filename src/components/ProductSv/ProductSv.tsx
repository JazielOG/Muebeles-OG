import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductSv.styles.scss";

export interface ProductSvProps {
  id: string;
  imagesUrl: string[];
  description: string;
  price: number;
  title: string;
  quantity?: number;
}

const ProductSv: FC<ProductSvProps> = ({
  imagesUrl,
  description,
  price,
  id,
}) => {
  return (
    <div className="product-sv">
      <a href={`/product/${id}`}>
        <img className="product-sv-img" src={imagesUrl[0]} alt={description} />
      </a>
      <div className="product-sv-footer">
        <div className="product-sv-description">{description}</div>
        <p className="product-sv-price">$MXN {price}</p>
        <ButtonLink
          href=""
          className="product-sv-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </div>
  );
};

export { ProductSv };
