import NavBar from "./components/NadBar/navBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ShoppingCardContext } from "./providers/ShoppingCardContext";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FavoritesContext } from "./providers/FavoritesContext";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const ppIntialOptions = {
  clientId: "test",
  currency: "MXN",
  intent: "capture",
};

function App() {
  const [productList, setProductList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const result = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (result) {
      setProductList(result);
    }
    const favorites = getFromLocalStorage(FAVORITES_LIST_KEY);
    if (favorites) {
      setFavoritesList(favorites);
    }
  }, []);

  return (
    <PayPalScriptProvider options={ppIntialOptions}>
      <ShoppingCardContext.Provider
        value={{
          productList,
          setProductList,
        }}
      >
        <FavoritesContext.Provider
          value={{
            favoritesList,
            setFavoritesList,
          }}
        >
          <div className="app">
            <NavBar />
            <RouterProvider router={router} />
            <Footer year={0} companyName={""} />
          </div>
        </FavoritesContext.Provider>
      </ShoppingCardContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;
