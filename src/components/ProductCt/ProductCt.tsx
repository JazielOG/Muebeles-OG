import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductCt.styles.scss";

export interface ProductCtProps {
  id: string;
  imagesUrl: string[];
  description: string;
  extraDescription?: string; // Nueva propiedad opcional
  price: number;
  title: string;
  quantity?: number;
  //start: number;
  //discount: number;
}

const ProductCt: FC<ProductCtProps> = ({
  imagesUrl,
  description,
  extraDescription, // Añadir extraDescription
  price,
  id,
}) => {
  return (
    <a className="product-Ct" href={`/product/${id}`}>
      <img className="product-Ct-img" src={imagesUrl[0]} alt={description} />

      <div className="product-Ct-footer">
        <label>{description}</label>
        {/* Mostrar extraDescription si existe */}
        {extraDescription && (
          <p className="product-Ct-extra">{extraDescription}</p>
        )}
        <p>
          <label className="product-Ct-price">$MXN {price}</label>
        </p>
        <ButtonLink
          href=""
          className="product-Ct-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </a>
  );
};

export { ProductCt };

//COMEDORES
