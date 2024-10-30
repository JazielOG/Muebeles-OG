import { FC, useEffect, useRef, useCallback } from "react";

import {
  CarouselItem,
  CarouselItemProps,
} from "../Carousel/CarouselItem/CarouselItem";
import "./Carousel.styles.scss";

interface CarouselProps {
  title: string;
  items: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ title, items }) => {
  const firstContainerRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef<HTMLDivElement>(null);
  const firstScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const secondScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollItems = useCallback(
    (container: HTMLDivElement | null): NodeJS.Timeout | null => {
      if (!container) return null;

      const scrollAmount = container.scrollWidth / items.length; // Cantidad a desplazar
      let direction: "forward" | "backward" = "forward"; // Dirección del scroll

      return setInterval(() => {
        if (direction === "forward") {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });

          // Comprobar si ha llegado al final
          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            direction = "backward"; // Cambiar dirección
          }
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

          // Comprobar si ha regresado al inicio
          if (container.scrollLeft <= 0) {
            direction = "forward"; // Cambiar dirección
          }
        }
      }, 1000); // Cambia cada 2 segundos
    },
    [items.length] // Solo dependerá de la longitud de los items
  );

  useEffect(() => {
    // Iniciar el desplazamiento automático para el primer carrusel
    firstScrollIntervalRef.current = scrollItems(firstContainerRef.current);
    // Iniciar el desplazamiento automático para el segundo carrusel
    secondScrollIntervalRef.current = scrollItems(secondContainerRef.current);

    // Limpieza al desmontar el componente
    return () => {
      if (firstScrollIntervalRef.current) {
        clearInterval(firstScrollIntervalRef.current);
      }
      if (secondScrollIntervalRef.current) {
        clearInterval(secondScrollIntervalRef.current);
      }
    };
  }, [items.length, scrollItems]); // Asegúrate de incluir scrollItems aquí

  // Limitar a 6 productos en el carrusel
  const visibleItems = items.slice(0, 6);
  const remainingItems = items.slice(6); // Resto de los productos

  return (
    <div className="the-carousel">
      <h2 className="carousel-title">{title}</h2>

      {/* Primer carrusel con scroll automático */}
      <div className="carousel-items-container" ref={firstContainerRef}>
        {visibleItems.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </div>

      {/* Segunda fila con scroll automático, solo si hay elementos restantes */}
      {remainingItems.length > 0 && (
        <div className="carousel-remaining-items" ref={secondContainerRef}>
          {remainingItems.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Carousel };
