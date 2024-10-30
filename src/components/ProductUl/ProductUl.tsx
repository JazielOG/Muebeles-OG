import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductUl.styles.scss";

export interface ProductUlProps {
  id: string;
  imagesUrl: string[];
  description: string;
  price: number;
  title: string;
  quantity?: number;
}

const ProductUl: FC<ProductUlProps> = ({
  imagesUrl,
  description,
  price,
  id,
}) => {
  return (
    <div className="product-ul">
      <a href={`/product/${id}`}>
        <img className="product-ul-img" src={imagesUrl[0]} alt={description} />
      </a>
      <div className="product-ul-footer">
        <div className="product-ul-description">{description}</div>
        <p className="product-ul-price">$MXN {price}</p>
        <ButtonLink
          href=""
          className="product-ul-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </div>
  );
};

export { ProductUl };
