import { FC } from "react";
import { ProductCt, ProductCtProps } from "../ProductCt/ProductCt";

import "./CatalogCt.styles.scss";

interface CatalogCtProps {
  productList: ProductCtProps[];
}

const CatalogCt: FC<CatalogCtProps> = ({ productList }) => {
  return (
    <div className="Catalog-Ct">
      {productList && productList.length > 0 ? (
        productList.map((product) => <ProductCt {...product} />)
      ) : (
        <div>Lo sentimos,no hay coches disponibles</div>
      )}
    </div>
  );
};

export { CatalogCt };

//COMEDORES
