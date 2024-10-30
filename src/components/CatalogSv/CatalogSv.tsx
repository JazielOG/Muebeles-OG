import { FC } from "react";
import { ProductSv, ProductSvProps } from "../ProductSv/ProductSv";
import "./CatalogSv.styles.scss";

interface CatalogSvProps {
  productList: ProductSvProps[];
}

const CatalogSv: FC<CatalogSvProps> = ({ productList }) => {
  return (
    <div className="Catalog-Sv">
      {productList && productList.length > 0 ? (
        productList.map((product) => <ProductSv {...product} />)
      ) : (
        <div>Lo sentimos,no hay coches disponibles</div>
      )}
    </div>
  );
};

export { CatalogSv };
