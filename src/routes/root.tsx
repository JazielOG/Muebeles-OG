import { createBrowserRouter, Navigate } from "react-router-dom";
import { CochesPage } from "../pages/homepage/coches/coches";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/product";
import { ShoppingCartPage } from "../pages/shopping-card/ShoppingCard";
import { Checkout } from "../pages/checkout/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "coches",
    element: <CochesPage />,
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
  },
  {
    path: "shopping_cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
]);

export { router };
