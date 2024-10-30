import { FC } from "react";
import { ProductCard, ProductCardProps } from "../productCard/ProductCard";
import "./Catalog.styles.scss";

interface CatalogProps {
  productList: ProductCardProps[];
}

const Catalog: FC<CatalogProps> = ({ productList }) => {
  return (
    <div className="catalog">
      {productList && productList.length > 0 ? (
        productList.map((product) => <ProductCard {...product} />)
      ) : (
        <div>Lo sentimos,no hay coches disponibles</div>
      )}
    </div>
  );
};

export { Catalog };

//RECAMARAS
