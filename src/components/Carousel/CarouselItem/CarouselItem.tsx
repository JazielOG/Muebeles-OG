// CarouselItem.tsx
import { FC } from "react";
import { Tag } from "../../Tag/Tag";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa"; // Ícono del carrito

import "./CarouselItem.styles.scss";

export interface CarouselItemProps {
  id: string;
  imagesUrl: string[];
  description: string;
  price: number;
  title: string;
  quantity?: number;
}

const CarouselItem: FC<CarouselItemProps> = ({
  id,
  imagesUrl,
  title,
  description,
  price,
}) => {
  return (
    <a className="carousel-item" href={`/product/${id}`}>
      <img className="carousel-item-image" src={imagesUrl[0]} alt={title} />
      <div className="carousel-item-info">
        <Tag color="black" backgroundColor="white" label={title} />
        <p className="carousel-item-description">{description}</p>
        <p className="carousel-item-price">$MXN {price}</p>
        <ButtonLink
          href={`/cart/${id}`} // Redirige al carrito con el ID del producto
          className="carousel-item-button"
          iconAfter={() => <FaShoppingCart />}
        ></ButtonLink>
      </div>
    </a>
  );
};

export { CarouselItem };
