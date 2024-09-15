import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingCards } from "../../data/trending-card";

const HeroProps = {
  imageUrl: "https://sportscar365.com/wp-content/uploads/2021/11/BWMM8.jpg",
  imageText: "BMW MEXICO",
  headline: "BMW Mexico City",
  button: {
    href: "/Mostrar y Comprar",
    label: "Comprar ahora",
  },
};

const Homepage = () => {
  return (
    <>
      {" "}
      <Hero {...HeroProps} />
      <div className="app-body">
        <Carousel
          title="BMW: Elevando tu experiencia de conducción al siguiente nivel"
          items={trendingCards}
        />
        <Carousel title="Disponibilidad de BMW" items={sales} />
      </div>
    </>
  );
};

export { Homepage };
