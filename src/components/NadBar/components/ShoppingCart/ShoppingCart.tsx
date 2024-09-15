import { MdShoppingCart } from "react-icons/md";
import { IconLink } from "../../../IconLink/IconLink";
import { useContext, useEffect, useState } from "react";
import { ShoppingCardContext } from "../../../../providers/ShoppingCardContext";
import { ProductCardProps } from "../../../productCard/ProductCard";

const ShoppingCard = () => {
  const { productList } = useContext(ShoppingCardContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sum = 0;
    productList.forEach((product: ProductCardProps) => {
      sum += Number(product.quantity);
    });
    setCount(sum);
  }, [productList]);

  return (
    <div>
      <IconLink
        href="/shopping_cart"
        label={productList.length > 0 ? String(count) : ""}
      >
        <MdShoppingCart />
      </IconLink>
    </div>
  );
};

export { ShoppingCard };
