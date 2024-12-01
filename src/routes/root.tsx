import { createBrowserRouter, Navigate } from "react-router-dom";
import { CochesPage } from "../pages/homepage/coches/coches";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/product";
import { ShoppingCartPage } from "../pages/shopping-card/ShoppingCard";
import { Checkout } from "../pages/checkout/checkout";
import { BedroomsPage } from "../pages/bedrooms/bedrooms";
import { StovePage } from "../pages/stove/stove";
import { LivingPage } from "../pages/living/living";
import { DiningPage } from "../pages/dining/dining";
import { FavoritesPage } from "../pages/Favorites/Favorites";
import { MapPage } from "../pages/mapa/map";

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
    path: "bedrooms",
    element: <BedroomsPage />,
  },
  {
    path: "stove",
    element: <StovePage />,
  },
  {
    path: "living",
    element: <LivingPage />,
  },
  {
    path: "dining",
    element: <DiningPage />,
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
    path: "favorites",
    element: <FavoritesPage />,
  },
  {
    path: "map",
    element: <MapPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
]);

export { router };
