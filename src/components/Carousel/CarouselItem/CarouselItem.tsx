import { FC } from "react";
import { Tag } from "../../Tag/Tag";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { FaShoppingCart } from "react-icons/fa"; // Importa el ícono del carrito

import "./CarouselItem.styles.scss";

export interface CarouselItemProps {
  id: string;
  imageUrl: string; // Asegúrate de que sea un string
  description: string;
  price: number;
  title: string;
  quantity?: number;
}

const CarouselItem: FC<CarouselItemProps> = ({
  id, // Añadido para usarlo en ButtonLink
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item-image" src={imageUrl} alt={title} />
      <div className="carousel-item-info">
        <Tag color="black" backgroundColor="white" label={title} />
        <p className="carousel-item-description">{description}</p>
        <p className="carousel-item-price">$MXN {price}</p>
        <ButtonLink
          href=""
          className="carousel-item-button"
          iconAfter={() => <FaShoppingCart />}
        />
      </div>
    </div>
  );
};

export { CarouselItem };
