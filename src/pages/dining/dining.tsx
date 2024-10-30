import { CatalogCt } from "../../components/CatalogCt/CatalogCt";
import { LivingCt } from "../../data/living"; // Asegúrate de que el nombre del catálogo coincida

const DiningPage = () => {
  return <CatalogCt productList={LivingCt} />;
};

export { DiningPage };
