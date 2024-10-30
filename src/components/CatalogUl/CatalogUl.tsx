import { FC } from "react";
import { ProductUl, ProductUlProps } from "../ProductUl/ProductUl";
import "./CatalogUl.styles.scss";

interface CatalogUlProps {
  productList: ProductUlProps[];
}

const CatalogUl: FC<CatalogUlProps> = ({ productList }) => {
  return (
    <div className="Catalog-Ul">
      {productList && productList.length > 0 ? (
        productList.map((product) => <ProductUl {...product} />)
      ) : (
        <div>Lo sentimos,no hay coches disponibles</div>
      )}
    </div>
  );
};

export { CatalogUl };
