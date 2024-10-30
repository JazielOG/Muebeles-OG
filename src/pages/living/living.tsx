import { CatalogUl } from "../../components/CatalogUl/CatalogUl";
import { DiningUl } from "../../data/dining";

const LivingPage = () => {
  return <CatalogUl productList={DiningUl} />;
};

export { LivingPage };
