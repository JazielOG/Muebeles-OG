import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingCards } from "../../data/trending-card";
import { newArrivals } from "../../data/newArrivals"; // Asegúrate de tener los datos para este carrusel
import { motion } from "framer-motion";
import { ThirdCarousel } from "../../components/ThirdCarousel/ThirdCarousel";

const HeroProps = {
  imageUrl: "https://lalur.com.mx/images/nota_130_02.jpg",
  imageText: "Muebles Ortega",
  headline: "'El arte de amueblar con distinción'",
  button: {
    href: "/Mostrar y Comprar",
    label: "Conline shop",
  },
};

const Homepage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Hero {...HeroProps} />
      </motion.div>
      <div className="app-body">
        {/* Primer Carousel */}
        <Carousel
          title="'La perfección en cada rincón de tu hogar'"
          items={trendingCards}
        />

        {/* Aquí inserté la imagen */}
        <div className="image-container">
          <img
            src="https://veracruz.anahuac.mx/hubfs/UAV%20APREU%20BLOG%20%284%29.png"
            alt="Diseño muebles"
            style={{
              width: "100%",
              height: "90vh", // Ocupa toda la altura de la ventana
              display: "block", // Elimina el margen inferior que algunos navegadores aplican
            }}
          />
        </div>

        {/* Segundo Carousel */}
        <Carousel title="'INSPIRACIÓN A UN CLICK'" items={sales} />
      </div>

      {/* Última imagen */}
      <img
        src="https://lalur.com.mx/images/header_nota_70.jpg"
        alt="Disponibilidad de BMW"
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "cover", // Cubre el área del contenedor manteniendo la proporción de la imagen
        }}
      />

      {/* Tercer Carousel (Nuevo) */}
      <div className="app-body">
        <ThirdCarousel
          title="'Con nuestros muebles industriales de alta calidad, no solo amueblas tu espacio, sino que también creas un hogar que refleja tu personalidad y elegancia. Cada pieza es una oportunidad para contar tu historia'"
          items={newArrivals}
        />

        <img
          src="https://yolodecoro.pe/wp-content/uploads/2022/10/Mesa-de-comedor-extra-grande-de-10-plazas-Lomond-madera-de-mango-3.jpg"
          alt="Muebles"
          style={{
            width: "100%", // Ocupa todo el ancho disponible
            height: "70vh", // Ocupa toda la altura de la pantalla
            objectFit: "cover", // Cubre el contenedor manteniendo la proporción
            display: "block", // Elimina el espacio inferior (si está en línea)
          }}
        />
      </div>
    </>
  );
};

export { Homepage };
