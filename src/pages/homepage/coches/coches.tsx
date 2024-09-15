import { Hero } from "../../../components/Hero/Hero";
import { Catalog } from "../../../components/Catalog/Catalog";
import { catalogCar } from "../../../data/catalog";

const heroCochesPage = {
  imageUrl:
    "https://cdn.bmwblog.com/wp-content/uploads/2022/08/bmw-m8-gte-for-sale-02.jpg",
  imageText: "BMW: El placer de conducir, reinventado.",
  headline:
    "Un modelo específico de BMW: Enfocándonos en sus características únicas.",
};

const CochesPage = () => {
  return (
    <>
      <Hero {...heroCochesPage} />
      <Catalog productList={catalogCar} />
    </>
  );
};

export { CochesPage };
