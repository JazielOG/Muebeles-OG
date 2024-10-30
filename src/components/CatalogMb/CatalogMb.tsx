import { FC } from "react";
import { ProductMb, ProductMbProps } from "../ProductMb/ProductMb";
import "./CatalogMb.styles.scss";

interface CatalogMbProps {
  productList: ProductMbProps[];
}

const CatalogMb: FC<CatalogMbProps> = ({ productList }) => {
  return (
    <div className="Catalog-mb">
      {productList && productList.length > 0 ? (
        productList.map((product) => <ProductMb {...product} />)
      ) : (
        <div>Lo sentimos,no hay coches disponibles</div>
      )}
    </div>
  );
};

export { CatalogMb };

//RECAMARAS
