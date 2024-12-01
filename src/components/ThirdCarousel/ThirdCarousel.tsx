// src/components/ThirdCarousel/ThirdCarousel.tsx
import { FC } from "react";
import {
  CarouselItem, // Asegúrate de que este componente esté definido correctamente
  CarouselItemProps,
} from "../Carousel/CarouselItem/CarouselItem";
import "./ThirdCarousel.styles.scss"; // Asegúrate de que este archivo SCSS exista

interface ThirdCarouselProps {
  title: string;
  items: CarouselItemProps[];
}

const ThirdCarousel: FC<ThirdCarouselProps> = ({ title, items }) => {
  return (
    <div className="third-carousel">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-items-container">
        {items.map(({ imagesUrl, title }, index) => (
          <CarouselItem
            key={index}
            imagesUrl={imagesUrl}
            title={title}
            id={""}
            description={""}
            price={0}
          />
        ))}
      </div>
    </div>
  );
};

export { ThirdCarousel };
