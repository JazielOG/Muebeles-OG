import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductMb.styles.scss";

export interface ProductMbProps {
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

const ProductMb: FC<ProductMbProps> = ({
  imagesUrl,
  description,
  extraDescription, // Añadir extraDescription
  price,
  id,
}) => {
  return (
    <a className="product-Mb" href={`/product/${id}`}>
      <img className="product-Mb-img" src={imagesUrl[0]} alt={description} />

      <div className="product-Mb-footer">
        <label>{description}</label>
        {/* Mostrar extraDescription si existe */}
        {extraDescription && (
          <p className="product-Mb-extra">{extraDescription}</p>
        )}
        <p>
          <label className="product-Mb-price">$MXN {price}</label>
        </p>
        <ButtonLink
          href=""
          className="product-Mb-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </a>
  );
};

export { ProductMb };

//RECAMARAS
