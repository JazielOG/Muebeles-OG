// src/data/sales.ts
import { CarouselItemProps } from "../components/Carousel/CarouselItem/CarouselItem"; // Importa el tipo

const sales: CarouselItemProps[] = [
  {
    id: "12453534", // Asegúrate de que tienes un id único
    imagesUrl: [
      "https://http2.mlstatic.com/D_NQ_NP_891676-MLA72125647895_102023-O.webp",
    ],
    title: "Mueble Industrial",
    description: "DLibrero industrial",
    price: 14000, // Añade el precio correspondiente
  },
  {
    id: "2234234",
    imagesUrl: [
      "https://regaloscircus.com/58594/mueble-bar-gonnie-2-puertas-botellero-acacia-90x45x167.jpg",
    ],
    title: "Cantina",
    description: "Cantina industrial bace de herreria",
    price: 22000,
  },
  {
    id: "3038047",
    imagesUrl: [
      "https://mueblesfaymex.com/wp-content/uploads/2021/07/7b9d9625-9f97-40cc-9172-36f6eaca7731-removebg-preview.png",
    ],
    title: "Buroe",
    description: "buroe en madera de pino",
    price: 3500,
  },
  {
    id: "439840",
    imagesUrl: [
      "https://http2.mlstatic.com/D_NQ_NP_879536-MLM76769042131_062024-O.webp",
    ],
    title: "Mueble Lavamanos",
    description: "mueble lavamanos indstrial",
    price: 9000,
  },
];

export { sales };

//EL SEGUNDO CAROUSELD DEL MI HOMPAGE
